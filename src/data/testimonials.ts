export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number; // 1-5
}

// Real feedback only. If you add more, keep them genuine — a client can always
// check, and a fabricated quote is a bigger credibility risk than having none.
export const testimonials: Testimonial[] = [
  {
    name: "Muneeb Ahmed",
    role: "Client",
    company: "Omni Verge Technologies",
    quote:
      "Delivered right on time and the site turned out exactly how we wanted. Genuinely happy with the work.",
    rating: 5,
  },
];
