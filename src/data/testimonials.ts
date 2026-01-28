export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  type: "bride" | "customer" | "designer";
}

export const testimonials: Testimonial[] = [
  {
    quote: "They actually picked up the phone! That alone sold me. Then they exceeded every expectation.",
    name: "Sarah M.",
    title: "Fall Bride",
    type: "bride"
  },
  {
    quote: "My Pinterest board came to life. They understood my vision better than I did.",
    name: "Emily R.",
    title: "Spring Bride",
    type: "bride"
  },
  {
    quote: "The DIY experience was luxury, not budget. My bridesmaids still talk about it.",
    name: "Jessica T.",
    title: "Summer Bride",
    type: "bride"
  },
  {
    quote: "Ordered a Joy Jar on DoorDash for my mom—she cried. Best $45 I've ever spent.",
    name: "Amanda K.",
    title: "Happy Customer",
    type: "customer"
  },
  {
    quote: "Weekly Joy Jars at our office changed the whole vibe. Everyone looks forward to Mondays now.",
    name: "Rachel B.",
    title: "Office Manager",
    type: "customer"
  },
  {
    quote: "Finally, a studio that gets freelancers. Professional space without the overhead.",
    name: "Lauren D.",
    title: "Freelance Florist",
    type: "designer"
  }
];

export const getTestimonialsByType = (type: Testimonial["type"]) => 
  testimonials.filter(t => t.type === type);

export const getBrideTestimonials = () => getTestimonialsByType("bride");
export const getCustomerTestimonials = () => getTestimonialsByType("customer");
