import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle, Palette, Users, Sparkles, Heart, Clock, Timer, Zap, Coffee, ThumbsUp, HelpCircle, AlertCircle, XCircle, Flower, Star, Crown, Gem, Hand, Scale, Sofa, Award, Calendar, CalendarDays, CalendarX2, Compass, Map, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface HelpMeDecideProps {
  onBack: () => void;
}

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

export const HelpMeDecide = ({ onBack }: HelpMeDecideProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Scores>({ diy: 0, hybrid: 0, designed: 0 });
  const [showResult, setShowResult] = useState(false);

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
      onBack();
    }
  };

  const recommendation = getRecommendation(scores);

  if (showResult) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-warm-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-2xl">
          <Button variant="ghost" onClick={handleBack} className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Card className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
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
              <Button variant="ghost" size="lg" onClick={onBack}>
                Start Over
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-warm-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-2xl">
        <Button variant="ghost" onClick={handleBack} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {/* Progress Bar */}
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

        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-light">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="grid sm:grid-cols-2 gap-4">
          {currentQuestion.options.map((option) => (
            <Card
              key={option.id}
              className="p-5 cursor-pointer transition-all hover:shadow-md hover:border-primary/30"
              onClick={() => handleSelect(option)}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/20 rounded-lg">
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
      </div>
    </section>
  );
};
