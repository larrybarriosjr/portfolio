import { decode } from "he"
import { ProjectType } from "types/items"

const HYPHEN = decode("&#8209;")

export default <ProjectType[]>[
  {
    description: "A mobile-responsive personal portfolio.",
    link: "https://larrybarriosjr.com",
    logo: "/images/koala.svg",
    name: "Koala",
    stack: ["React", "TypeScript", "Next JS", "Tailwind"]
  },
  {
    description: "A mobile-responsive online flight booking system.",
    link: "https://bifrost.larrybarriosjr.com",
    logo: "/images/projects/bifrost.png",
    name: "Bifrost",
    stack: ["React", "TypeScript", "Tailwind", "React-Query", "Email JS", "Stripe"]
  },
  {
    description: "A progressive web app clone of the desktop app Microsoft To Do.",
    link: "https://todo.larrybarriosjr.com",
    logo: "/images/projects/todo.png",
    name: "Microsoft To Do Clone",
    stack: ["React", "Recoil", "PWA", "Lovefield", "IndexedDB"]
  },
  {
    description: `A simple static mobile-responsive web pages for a luxury fine${HYPHEN}dining restaurant.`,
    link: "https://valhalla.larrybarriosjr.com",
    logo: "/images/projects/valhalla.png",
    name: "Valhalla Restaurant",
    stack: ["HTML", "CSS", "Bootstrap"]
  }
]
