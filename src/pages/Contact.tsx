import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/useScrollAnimation";
import { ZohoForm } from "@/components/ZohoForm";

const Contact = () => {
  const heroAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-brand-cream to-background">
        <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p {...getAnimationClasses(heroAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 ${getAnimationClasses(heroAnimation.isVisible, 0).className}`}>
            Get In Touch
          </p>
          <h1 {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light max-w-3xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
            We'd Love to <span className="italic text-primary">Hear From You</span>
          </h1>
          <p {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`text-lg text-muted-foreground mt-6 max-w-2xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
            Questions, ideas, or ready to start planning? Reach out—we're real people who actually pick up the phone.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={formAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div {...getAnimationClasses(formAnimation.isVisible, 0)} className={getAnimationClasses(formAnimation.isVisible, 0).className}>
              <h2 className="font-serif text-2xl sm:text-3xl font-light mb-6">
                Send Us a <span className="italic text-primary">Message</span>
              </h2>
              
              <Card className="p-0 overflow-hidden">
                <ZohoForm
                  formId="AmvfOTh3URAaUUsHWO32fKBkseIIPliiuKwL9C-yu44"
                  formUrl="https://forms.zohopublic.com/nashvilleflowermarket1/form/NashvilleFlowerMarketContactForm/formperma/AmvfOTh3URAaUUsHWO32fKBkseIIPliiuKwL9C-yu44"
                  ariaLabel="Nashville Flower Market Contact Form"
                  initialHeight="1928px"
                />
              </Card>
            </div>

            {/* Contact Info */}
            <div {...getAnimationClasses(formAnimation.isVisible, 200)} className={`space-y-8 ${getAnimationClasses(formAnimation.isVisible, 200).className}`}>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-light mb-6">
                  Visit Our <span className="italic text-primary">Studio</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-gold/20 rounded-lg">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        2615 Lebanon Pike, Suite B<br />
                        Nashville, TN 37214
                      </p>
                      <a
                        href="https://maps.google.com/?q=2615+Lebanon+Pike+Suite+B+Nashville+TN+37214"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline mt-1 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-gold/20 rounded-lg">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a href="tel:+16159288001" className="text-muted-foreground hover:text-foreground">
                        (615) 928-8001
                      </a>
                      <div className="flex items-center gap-2 mt-1">
                        <MessageCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">You can also text us at 615-928-8001</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-gold/20 rounded-lg">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:hello@nashvilleflowermarket.com" className="text-muted-foreground hover:text-foreground">
                        hello@nashvilleflowermarket.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-gold/20 rounded-lg">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Studio Hours</h3>
                      <p className="text-muted-foreground">
                        Tue–Fri: 9am–6pm<br />
                        Sat: 9am–12pm<br />
                        Sun–Mon: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Embedded Google Map */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.9511234567!2d-86.7089!3d36.1789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646912345678%3A0x1234567890abcdef!2s2615%20Lebanon%20Pike%2C%20Nashville%2C%20TN%2037214!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nashville Flower Market Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
