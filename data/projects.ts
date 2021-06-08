import { decode } from "he"
import { ProjectType } from "types/items"

const HYPHEN = decode("&#8209;")

export default <ProjectType[]>[
  {
    description: "My personal portfolio. You're viewing it right now.",
    features: [
      "Mobile Responsive",
      "Pre-Rendered for SEO",
      "Resume Download",
      "Contact Form",
      "Recommendations"
    ],
    link: "https://larrybarriosjr.com",
    logo: "/images/koala.svg",
    name: "Koala",
    platform: "GitHub",
    source: "https://github.com/larrybarriosjr/portfolio",
    stack: ["React", "TypeScript", "Next JS", "Tailwind"]
  },
  {
    description: "An online flight booking system.",
    features: [
      "Mobile Responsive",
      "Stripe Integration",
      "Email Integration",
      "One-Way and Round Trip",
      "Domestic Prices",
      "Multiple Passengers",
      "Barcode on Print",
      "Printable Ticket"
    ],
    link: "https://bifrost.larrybarriosjr.com",
    logo: "/images/projects/bifrost.png",
    name: "Bifrost",
    platform: "GitHub",
    source: "https://github.com/larrybarriosjr/bifrost",
    stack: ["React", "TypeScript", "Tailwind", "React-Query", "Email JS", "Stripe"]
  },
  {
    description: "A clone of the desktop app Microsoft To Do.",
    features: [
      "Progressive Web App",
      "Works Offline",
      "Installable App",
      "Lists",
      "Steps",
      "Scheduling",
      "Reminder Notification"
    ],
    link: "https://todo.larrybarriosjr.com",
    logo: "/images/projects/todo.png",
    name: "Microsoft To Do Clone",
    platform: "GitHub",
    source: "https://github.com/larrybarriosjr/microsoft-todo",
    stack: ["React", "Recoil", "PWA", "Lovefield", "IndexedDB"]
  },
  {
    description: `A simple static web pages for a luxury fine${HYPHEN}dining restaurant.`,
    features: ["Mobile Responsive", "Beautiful UI", "Static Web Pages"],
    link: "https://valhalla.larrybarriosjr.com",
    logo: "/images/projects/valhalla.png",
    name: "Valhalla Restaurant",
    platform: "GitHub",
    source: "https://github.com/larrybarriosjr/valhalla",
    stack: ["HTML", "CSS", "Bootstrap"]
  }
]
