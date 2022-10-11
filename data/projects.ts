import { decode } from "he"
import { ProjectType } from "types/items"

const HYPHEN = decode("&#8209;")

export default <ProjectType[]>[
  {
    description: "My personal portfolio. You're viewing it right now, actually.",
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
    description: "An online webshop for workshops.",
    features: ["Mobile Responsive", "Workshop Browsing", "Workshop Filter", "Cart", "Checkout"],
    link: "https://tinel.larrybarriosjr.com",
    logo: "/images/projects/tinel.png",
    name: "Tinel",
    platform: "GitHub",
    source: "https://github.com/larrybarriosjr/tinel",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Router",
      "Sass",
      "Formik",
      "Yup",
      "Jest",
      "React Testing Library",
      "Cypress"
    ]
  },
  {
    description: "A simple movie listing website.",
    features: ["Mobile Responsive", "Movie Browsing", "Movie Search", "Favorites"],
    link: "https://mvpmovie.larrybarriosjr.com",
    logo: "/images/projects/mvpmovie.png",
    name: "MVP Movie",
    platform: "GitHub",
    source: "https://github.com/larrybarriosjr/mvpmovie",
    stack: ["React", "TypeScript", "React Query", "React Router", "Tailwind"]
  },
  {
    description: `A simple static web pages for a luxury fine${HYPHEN}dining restaurant.`,
    features: [
      "Mobile Responsive",
      "Beautiful UI",
      "Gallery",
      "Landing Page",
      "Hero Carousel",
      "Static Web Pages"
    ],
    link: "https://valhalla.larrybarriosjr.com",
    logo: "/images/projects/valhalla.png",
    name: "Valhalla Restaurant",
    platform: "GitHub",
    source: "https://github.com/larrybarriosjr/valhalla",
    stack: ["HTML", "CSS", "Bootstrap"]
  }
]
