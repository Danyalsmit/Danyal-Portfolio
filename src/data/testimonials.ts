export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number; // 1-5
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Engineering Lead",
    company: "ioMoVo",
    quote:
      "Danyal delivered exceptional Microsoft 365 add-ins and AI agents that transformed our platform's capabilities. His attention to detail and technical precision are genuinely top-notch.",
    rating: 5,
  },
  {
    name: "Omar Farooq",
    role: "Founder",
    company: "Ace BPO Solutions",
    quote:
      "We handed Danyal a rough brief and he came back with a site that looked and felt premium — fast, responsive, and exactly on brand. Communication throughout was clear and reliable.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Product Manager",
    company: "Asra Soft",
    quote:
      "A phenomenal MERN stack developer who consistently writes clean code and solves complex backend and frontend challenges with ease. Would work with him again without hesitation.",
    rating: 5,
  },
];
