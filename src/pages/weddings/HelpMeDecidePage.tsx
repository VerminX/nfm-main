import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle, Palette, Users, Sparkles, Heart, Clock, Timer, Zap, Coffee, ThumbsUp, HelpCircle, AlertCircle, XCircle, Flower, Star, Crown, Gem, Hand, Scale, Sofa, Award, Calendar, CalendarDays, CalendarX2, Compass, Map, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";

interface QuizOption {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  points: { diy: number; hybrid: number; designed: number };
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

const questions: QuizQuestion[] = [
  {
    id: "creative-style",
    question: "When it comes to creative projects, you usually…",
    options: [
      { id: "hands-on", label: "Love Being Hands-On", description: "Making it my own is the best part", icon: Palette, points: { diy: 2, hybrid: 0, designed: 0 } },
      { id: "guidance", label: "Enjoy Guidance", description: "I want to participate with support", icon: Users, points: { diy: 0, hybrid: 2, designed: 0 } },
      { id: "hand-off", label: "Prefer to Hand It Off", description: "I trust the professionals", icon: Sparkles, points: { diy: 0, hybrid: 0, designed: 2 } },
      { id: "no-think", label: "Don't Want to Think About It", description: "Just make it beautiful", icon: Heart, points: { diy: 0, hybrid: 0, designed: 3 } },
    ],
  },
  {
    id: "time-reality",
    question: "How much time do you want to spend on your wedding flowers?",
    options: [
      { id: "few-hours", label: "A Few Hours with Friends", description: "Sounds like fun!", icon: Clock, points: { diy: 2, hybrid: 0, designed: 0 } },
      { id: "half-day", label: "A Half Day Max", description: "I can carve out some time", icon: Timer, points: { diy: 0, hybrid: 2, designed: 0 } },
      { id: "minimal", label: "Minimal Time", description: "I'm already overwhelmed", icon: Zap, points: { diy: 0, hybrid: 0, designed: 2 } },
      { id: "zero", label: "Zero Time", description: "Please just make them beautiful", icon: Coffee, points: { diy: 0, hybrid: 0, designed: 3 } },
    ],
  },
  {
    id: "confidence-check",
    question: "When you imagine making your own bouquet, you feel…",
    options: [
      { id: "excited", label: "Excited & Confident", description: "I can't wait to try!", icon: ThumbsUp, points: { diy: 2, hybrid: 0, designed: 0 } },
      { id: "nervous", label: "Nervous but Curious", description: "I'd need some help", icon: HelpCircle, points: { diy: 0, hybrid: 2, designed: 0 } },
      { id: "panicked", label: "Slightly Panicked", description: "That sounds stressful", icon: AlertCircle, points: { diy: 0, hybrid: 0, designed: 2 } },
      { id: "absolutely-not", label: "Absolutely Not", description: "That's a hard no", icon: XCircle, points: { diy: 0, hybrid: 0, designed: 3 } },
    ],
  },
  {
    id: "vision-level",
    question: "Which best describes your floral vision?",
    options: [
      { id: "simple", label: "Simple & Seasonal", description: "Pretty and effortless", icon: Flower, points: { diy: 2, hybrid: 0, designed: 0 } },
      { id: "elevated", label: "Elevated but Relaxed", description: "Beautiful with a casual vibe", icon: Star, points: { diy: 0, hybrid: 2, designed: 0 } },
      { id: "polished", label: "Very Polished", description: "Designer-level aesthetics", icon: Crown, points: { diy: 0, hybrid: 0, designed: 2 } },
      { id: "flawless", label: "Flawless & High-End", description: "Magazine-worthy perfection", icon: Gem, points: { diy: 0, hybrid: 0, designed: 3 } },
    ],
  },
  {
    id: "involvement",
    question: "What matters more to you?",
    options: [
      { id: "involved", label: "Being Involved", description: "The process is part of the joy", icon: Hand, points: { diy: 2, hybrid: 0, designed: 0 } },
      { id: "balance", label: "Balance of Both", description: "Involvement with support", icon: Scale, points: { diy: 0, hybrid: 2, designed: 0 } },
      { id: "stress-free", label: "Stress-Free Experience", description: "Just let me enjoy my day", icon: Sofa, points: { diy: 0, hybrid: 0, designed: 2 } },
      { id: "professional", label: "Professional Execution", description: "Leave it to the experts", icon: Award, points: { diy: 0, hybrid: 0, designed: 3 } },
    ],
  },
  {
    id: "logistics",
    question: "How close to your wedding would you be comfortable handling flowers?",
    options: [
      { id: "days-before", label: "1–2 Days Before", description: "That's plenty of time", icon: Calendar, points: { diy: 2, hybrid: 0, designed: 0 } },
      { id: "same-week", label: "Same Week Only", description: "But not the day before", icon: CalendarDays, points: { diy: 0, hybrid: 2, designed: 0 } },
      { id: "rather-not", label: "Rather Not", description: "I don't want to touch flowers before the wedding", icon: CalendarX2, points: { diy: 0, hybrid: 0, designed: 3 } },
    ],
  },
  {
    id: "mindset",
    question: "Which statement feels most true?",
    options: [
      { id: "flexibility", label: "Flexibility & Control", description: "I want creative freedom", icon: Compass, points: { diy: 2, hybrid: 0, designed: 0 } },
      { id: "clear-plan", label: "Clear Plan & Pricing", description: "I want predictability", icon: Map, points: { diy: 0, hybrid: 2, designed: 0 } },
      { id: "done-for-me", label: "Done-for-Me Experience", description: "I'm investing in ease", icon: Gift, points: { diy: 0, hybrid: 0, designed: 3 } },
    ],
  },
];

interface Scores {
  diy: number;
  hybrid: number;
  designed: number;
}

interface Recommendation {
  type: string;
  description: string;
  features: string[];
  link: string;
}

const getRecommendation = (scores: Scores): Recommendation => {
  const { diy, hybrid, designed } = scores;
  
  // Find the highest score
  const maxScore = Math.max(diy, hybrid, designed);
  
  // If DESIGNED leads by 3+ points, strongly guide to Full-Service
  if (designed >= diy + 3 && designed >= hybrid + 3) {
    return {
      type: "Designed Bride",
      description: "You value polish, ease, and a seamless experience. Our luxury event floral design team handles everything—from sourcing to setup—so you can enjoy your day stress-free.",
      features: [
        "Personal Stem Stylist",
        "Full design + mood board",
        "Rental piece access",
        "Delivery + setup",
        "Teardown included",
      ],
      link: "/weddings/full-service",
    };
  }
  
  // If HYBRID is within 1–2 points of another category, show HYBRID result
  if (hybrid === maxScore || 
      (Math.abs(hybrid - diy) <= 2 && hybrid >= designed) ||
      (Math.abs(hybrid - designed) <= 2 && hybrid >= diy)) {
    return {
      type: "Hybrid Bride",
      description: "You want beautiful flowers with support along the way. A guided DIY or partial design experience gives you confidence, clarity, and creative involvement.",
      features: [
        "DIY your personal flowers in studio",
        "We handle ceremony and reception pieces",
        "Expert guidance throughout",
        "Stress-free day-of experience",
      ],
      link: "/weddings/diy",
    };
  }
  
  // DIY wins
  if (diy === maxScore) {
    return {
      type: "DIY Bride",
      description: "You love being hands-on and want creative control. Our DIY Flower Program gives you the space, tools, and flexibility to design your own wedding flowers with confidence.",
      features: [
        "Personal Petal Planner",
        "Premium blooms sourced for you",
        "Studio + tools access",
        "Stem Stylist support",
        "Hybrid option available",
      ],
      link: "/weddings/diy",
    };
  }
  
  // Designed wins
  return {
    type: "Designed Bride",
    description: "You value polish, ease, and a seamless experience. Our luxury event floral design team handles everything—from sourcing to setup—so you can enjoy your day stress-free.",
    features: [
      "Personal Stem Stylist",
      "Full design + mood board",
      "Rental piece access",
      "Delivery + setup",
      "Teardown included",
    ],
    link: "/weddings/full-service",
  };
};

// Decision card data
const decisionCards = [
  {
    id: "diy",
    title: "DIY Wedding Flowers",
    bullets: [
      "Love being hands-on and creative",
      "Want a fun, social experience with your people",
      "Enjoy having control over your floral look",
      "Are excited to design your own flowers",
    ],
    link: "/weddings/diy",
    buttonText: "Learn About DIY",
  },
  {
    id: "hybrid",
    title: "Hybrid Wedding Flowers",
    bullets: [
      "Want to DIY some pieces, but not all",
      "Prefer help with statement or focal designs",
      "Want flexibility without full responsibility",
      "Like a blend of hands-on and hands-off",
    ],
    link: "/weddings/diy",
    buttonText: "Learn About Hybrid",
  },
  {
    id: "designed",
    title: "Designed Wedding Florals",
    bullets: [
      "Want everything handled for you",
      "Prefer to focus on your wedding day, not logistics",
      "Like sharing inspiration and trusting the experts",
      "Want a fully polished, install-ready result",
    ],
    link: "/weddings/full-service",
    buttonText: "Learn About Designed",
  },
];

const HelpMeDecidePage = () => {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Scores>({ diy: 0, hybrid: 0, designed: 0 });
  const [showResult, setShowResult] = useState(false);

  const heroAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
  const stillNotSureAnimation = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleSelect = (option: QuizOption) => {
    const newScores = {
      diy: scores.diy + option.points.diy,
      hybrid: scores.hybrid + option.points.hybrid,
      designed: scores.designed + option.points.designed,
    };
    setScores(newScores);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setShowQuiz(false);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({ diy: 0, hybrid: 0, designed: 0 });
    setShowResult(false);
    setShowQuiz(false);
  };

  const recommendation = getRecommendation(scores);

  return (
    <PageLayout>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-brand-cream to-background">
          <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light mb-6 ${getAnimationClasses(heroAnimation.isVisible, 0).className}`} style={getAnimationClasses(heroAnimation.isVisible, 0).style}>
              DIY or Designed?
            </h1>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-4 ${getAnimationClasses(heroAnimation.isVisible, 100).className}`} style={getAnimationClasses(heroAnimation.isVisible, 100).style}>
              Not sure which wedding floral experience fits you best? Start here.
            </p>
            <p className={`text-sm text-muted-foreground/70 max-w-xl mx-auto mb-8 italic ${getAnimationClasses(heroAnimation.isVisible, 200).className}`} style={getAnimationClasses(heroAnimation.isVisible, 200).style}>
              There's no wrong answer—just what works for you.
            </p>
            <div className={getAnimationClasses(heroAnimation.isVisible, 300).className} style={getAnimationClasses(heroAnimation.isVisible, 300).style}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setShowQuiz(true)}
              >
                Take the Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        {showQuiz && (
          <section className="py-16 sm:py-20 bg-brand-cream/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-2xl">
              {showResult ? (
                <>
                  <Button variant="ghost" onClick={handleBack} className="mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>

                  <Card className="p-8 sm:p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-nfm-gold/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>

                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-2">
                      We Recommend
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
                      {recommendation.type}
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                      {recommendation.description}
                    </p>

                    <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
                      {recommendation.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => navigate(recommendation.link)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
                      >
                        Schedule Consultation
                      </Button>
                      <Button variant="ghost" size="lg" onClick={resetQuiz}>
                        Start Over
                      </Button>
                    </div>
                  </Card>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={handleBack} className="mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>

                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Question {currentStep + 1} of {questions.length}</span>
                      <span>{Math.round(progress)}% complete</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <h2 className="font-serif text-2xl sm:text-3xl font-light">
                      {currentQuestion.question}
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {currentQuestion.options.map((option) => (
                      <Card
                        key={option.id}
                        className="p-5 cursor-pointer transition-all hover:shadow-md hover:border-primary/30"
                        onClick={() => handleSelect(option)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-nfm-gold/20 rounded-lg">
                            <option.icon className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">{option.label}</h3>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {/* Decision Cards Section */}
        {!showQuiz && (
          <section className="py-16 sm:py-20 lg:py-24">
            <div ref={cardsAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className={`text-center mb-12 ${getAnimationClasses(cardsAnimation.isVisible, 0).className}`} style={getAnimationClasses(cardsAnimation.isVisible, 0).style}>
                <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
                  Choose Your Path
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Each experience is designed to meet you where you are—whether you want to be hands-on or let us handle everything.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {decisionCards.map((card, index) => (
                  <Card key={card.id} className={`p-6 flex flex-col h-full hover:shadow-lg transition-shadow ${getStaggeredAnimationClasses(cardsAnimation.isVisible, index, 100).className}`} style={getStaggeredAnimationClasses(cardsAnimation.isVisible, index, 100).style}>
                    <h3 className="font-serif text-xl font-medium mb-4">{card.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">Choose {card.title.split(' ')[0]} if you...</p>
                    <ul className="space-y-3 mb-6 flex-1">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => navigate(card.link)}
                    >
                      {card.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Still Not Sure Section */}
        {!showQuiz && (
          <section className="py-12 sm:py-16 bg-brand-cream/40">
            <div ref={stillNotSureAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className={`font-serif text-2xl sm:text-3xl font-light mb-4 ${getAnimationClasses(stillNotSureAnimation.isVisible, 0).className}`} style={getAnimationClasses(stillNotSureAnimation.isVisible, 0).style}>
                  Still not sure?
                </h2>
                <p className={`text-muted-foreground mb-8 ${getAnimationClasses(stillNotSureAnimation.isVisible, 100).className}`} style={getAnimationClasses(stillNotSureAnimation.isVisible, 100).style}>
                  That's completely normal. If you're torn between options, our quiz or a quick conversation can help point you in the right direction.
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses(stillNotSureAnimation.isVisible, 200).className}`} style={getAnimationClasses(stillNotSureAnimation.isVisible, 200).style}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => setShowQuiz(true)}
                  >
                    Take the Quiz
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
                  >
                    Book a Consult
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
    </PageLayout>
  );
};

export default HelpMeDecidePage;