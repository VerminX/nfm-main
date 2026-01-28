import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Refrigerator, Palette, Users, Clock, ArrowRight, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Refrigerator, title: "Cooler Space", description: "Keep your blooms fresh and ready." },
  { icon: Palette, title: "Design Stations", description: "Fully-equipped workstations." },
  { icon: Users, title: "Community", description: "Collaboration, not competition." },
  { icon: Clock, title: "Flexible Access", description: "Arrangements that fit your schedule." },
];

const services = [
  { id: "wedding", label: "Wedding Florals" },
  { id: "event", label: "Event Florals" },
  { id: "everyday", label: "Everyday Arrangements" },
  { id: "other", label: "Other" },
];

const lookingForOptions = [
  { id: "cooler", label: "Cooler Rental" },
  { id: "workspace", label: "Studio Workspace" },
  { id: "both", label: "Both" },
  { id: "community", label: "Community/Networking" },
];

const ForDesigners = () => {
  const { toast } = useToast();
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const whyJoinAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "", businessName: "", instagram: "", services: "", experience: "",
    lookingFor: [] as string[], frequency: "", aboutBusiness: "", hearAboutUs: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLookingForChange = (id: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      lookingFor: checked ? [...prev.lookingFor, id] : prev.lookingFor.filter(i => i !== id)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Application Received!", description: "We'll reach out soon to schedule a studio tour." });
    setFormData({ name: "", businessName: "", instagram: "", services: "", experience: "", lookingFor: [], frequency: "", aboutBusiness: "", hearAboutUs: "" });
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-warm-cream to-background">
        <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p {...getAnimationClasses(heroAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 ${getAnimationClasses(heroAnimation.isVisible, 0).className}`}>For Freelance Florists</p>
          <h1 {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light max-w-3xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
            A Studio That Works <span className="italic text-primary">As Hard As You Do</span>
          </h1>
          <p {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`text-lg text-muted-foreground mt-6 max-w-2xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
            Professional workspace without the lease commitment. Cooler space, design stations, and a community of creatives.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-background">
        <div ref={featuresAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f, index) => (
              <Card 
                key={f.title} 
                {...getStaggeredAnimationClasses(featuresAnimation.isVisible, index, 0, 100)}
                className={`p-4 sm:p-6 ${getStaggeredAnimationClasses(featuresAnimation.isVisible, index, 0, 100).className}`}
              >
                <div className="p-2 bg-accent/20 rounded-lg w-fit mb-3">
                  <f.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-medium text-sm sm:text-base mb-1">{f.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{f.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-warm-cream">
        <div ref={whyJoinAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-3xl text-center">
          <h2 {...getAnimationClasses(whyJoinAnimation.isVisible, 0)} className={`font-serif text-3xl sm:text-4xl font-light mb-6 ${getAnimationClasses(whyJoinAnimation.isVisible, 0).className}`}>Focus on What You <span className="italic text-primary">Love</span></h2>
          <p {...getAnimationClasses(whyJoinAnimation.isVisible, 100)} className={`text-muted-foreground mb-4 ${getAnimationClasses(whyJoinAnimation.isVisible, 100).className}`}>
            Let us handle the infrastructure so you can focus on creating stunning arrangements. No long-term commitment required.
          </p>
          <p {...getAnimationClasses(whyJoinAnimation.isVisible, 200)} className={`text-muted-foreground ${getAnimationClasses(whyJoinAnimation.isVisible, 200).className}`}>
            Plus, you'll be part of a community of talented designers who lift each other up.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={formAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-2xl">
          <div {...getAnimationClasses(formAnimation.isVisible, 0)} className={`text-center mb-10 ${getAnimationClasses(formAnimation.isVisible, 0).className}`}>
            <h2 className="font-serif text-3xl sm:text-4xl font-light">Join Our <span className="italic text-primary">Creative Community</span></h2>
            <p className="text-muted-foreground mt-2">Tell us about your business.</p>
          </div>

          <Card {...getAnimationClasses(formAnimation.isVisible, 100)} className={`p-6 sm:p-8 ${getAnimationClasses(formAnimation.isVisible, 100).className}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" required autoComplete="name" placeholder="Your name" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" placeholder="Your business name" value={formData.businessName} onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram or Portfolio</Label>
                <div className="relative">
                  <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="instagram" placeholder="@yourhandle or URL" className="pl-10" value={formData.instagram} onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Services *</Label>
                  <Select value={formData.services} onValueChange={(value) => setFormData(prev => ({ ...prev, services: value }))}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => <SelectItem key={s.id} value={s.id}>{s.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience</Label>
                  <Input id="experience" placeholder="e.g., 3 years" value={formData.experience} onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))} />
                </div>
              </div>

              <div className="space-y-3">
                <Label>What are you looking for? *</Label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {lookingForOptions.map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <Checkbox id={item.id} checked={formData.lookingFor.includes(item.id)} onCheckedChange={(checked) => handleLookingForChange(item.id, checked as boolean)} />
                      <Label htmlFor={item.id} className="text-sm font-normal text-muted-foreground cursor-pointer">{item.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Access Frequency</Label>
                <Select value={formData.frequency} onValueChange={(value) => setFormData(prev => ({ ...prev, frequency: value }))}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="few-times-month">A few times a month</SelectItem>
                    <SelectItem value="occasionally">Occasionally for events</SelectItem>
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aboutBusiness">Tell us about your business *</Label>
                <Textarea id="aboutBusiness" required placeholder="Your floral journey, clients, and what you're looking for..." rows={4} value={formData.aboutBusiness} onChange={(e) => setFormData(prev => ({ ...prev, aboutBusiness: e.target.value }))} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                <Input id="hearAboutUs" placeholder="Instagram, word of mouth..." value={formData.hearAboutUs} onChange={(e) => setFormData(prev => ({ ...prev, hearAboutUs: e.target.value }))} />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting || formData.lookingFor.length === 0 || !formData.services} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground min-h-[44px]">
                {isSubmitting ? "Sending..." : "Join Our Creative Community"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">Your info stays safe with us. We'll reach out within 24 hours to schedule a studio tour.</p>
            </form>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default ForDesigners;