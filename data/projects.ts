import { decode } from "he"
import bifrost from "public/images/bifrost.png"
import mstodo from "public/images/microsoft-todo.png"
import valhalla from "public/images/valhalla.png"
import { ProjectType } from "types/items"

const HYPHEN = decode("&#8209;")

export default <ProjectType[]>[
  {
    key: 1,
    logo: bifrost,
    name: "Bifrost",
    description: "A mobile-responsive online flight booking system.",
    pills: ["React", "TypeScript", "Tailwind", "React-Query", "Email JS", "Stripe"]
  },
  {
    key: 2,
    logo: mstodo,
    name: "Microsoft To Do Clone",
    description: "A progressive web app clone of the desktop app Microsoft To Do.",
    pills: ["React", "Recoil", "PWA", "Lovefield", "IndexedDB"]
  },
  {
    key: 3,
    logo: valhalla,
    name: "Valhalla Restaurant",
    description: `A simple static web pages for a luxury fine${HYPHEN}dining restaurant.`,
    pills: ["HTML", "CSS", "Bootstrap"]
  }
]
