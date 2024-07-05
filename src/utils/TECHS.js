
import AstroIcon from "../components/icons/AstroIcon.astro";
import ExpressJS from "../components/icons/ExpressJS.astro";
import MongoDBIcon from "../components/icons/MongoDBIcon.astro";
import NextJS from "../components/icons/NextJS.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import ReactQueryIcon from "../components/icons/ReactQueryIcon.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import ZustandIcon from "../components/icons/ZustandIcon.astro";

export const TECHS = {
    NEXT: {
       name: "Next.js",
       class: "border border-black dark:bg-black text-black  dark:text-white",
       icon: NextJS,
    },
    TAILWIND: {
       name: "Tailwind CSS",
       class: " bg-cyan-100 dark:bg-[#003159] text-black  dark:text-white",
       icon: Tailwind,
    },
    ASTRO: {
       name: "Astro",
       class: "bg-gray-700 dark:bg-orange-950 text-white",
       icon: AstroIcon,
    },
    EXPRESSJS: {
       name: "Express js",
       class: "border-black bg-black text-white flex items-center",
       icon: ExpressJS,
    },
    MONGODB: {
       name: "MongoDB",
       class: "border-green-800 bg-green-300 dark:bg-green-800 flex items-center",
       icon: MongoDBIcon,
    },
    REACT: {
       name: "React",
       class: "bg-cyan-50 border-cyan-900  dark:bg-cyan-900 flex items-center",
       icon: ReactIcon,
    },
    ZUSTAND: {
      name: "Zustand",
      class: "bg-amber-400 dark:bg-amber-950 flex items-center",
      icon: ZustandIcon,
   },
    REACTQUERY: {
      name: "React Query",
      class: "bg-red-200 dark:bg-red-800 flex items-center",
      icon: ReactQueryIcon,
   },
 };
