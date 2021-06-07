import { decode } from "he"
import bifrost from "public/images/bifrost.png"
import mstodo from "public/images/microsoft-todo.png"
import valhalla from "public/images/valhalla.png"
import { ProjectType } from "types/items"

const HYPHEN = decode("&#8209;")

export default <ProjectType[]>[
  {
    description: `A simple static web pages for a luxury fine${HYPHEN}dining restaurant.`,
    key: 1,
    link: "https://valhalla.larrybarriosjr.com",
    logo: valhalla,
    name: "Valhalla Restaurant",
    pills: ["HTML", "CSS", "Bootstrap"]
  },
  {
    description: "A progressive web app clone of the desktop app Microsoft To Do.",
    key: 2,
    link: "https://todo.larrybarriosjr.com",
    logo: mstodo,
    name: "Microsoft To Do Clone",
    pills: ["React", "Recoil", "PWA", "Lovefield", "IndexedDB"]
  },
  {
    description: "A mobile-responsive online flight booking system.",
    key: 3,
    link: "https://bifrost.larrybarriosjr.com",
    logo: bifrost,
    name: "Bifrost",
    pills: ["React", "TypeScript", "Tailwind", "React-Query", "Email JS", "Stripe"]
  }
]
