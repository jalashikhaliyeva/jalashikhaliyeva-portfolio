// utils/skill-image.js

export function skillsImage(skill) {
    const imageMap = {
      "JavaScript": { src: "/images/skill/js.png" },
      "React": { src: "/images/skill/react.png" },
      "TypeScript": { src: "/images/skill/typescript.png" },
      "Next.js": { src: "/images/skill/nextjs.png" },
      "CSS": { src: "/images/skill/css.png" },
      "HTML": { src: "/images/skill/html.png" },
      "Ant Design": { src: "/images/skill/antdesign.png" },
      "Tailwind": { src: "/images/skill/tailwind.png" },
      "Bootstrap": { src: "/images/skill/bootstrap.png" },
      "Firebase": { src: "/images/skill/firebase.webp" },
      "Zustand": { src: "/images/skill/zustand.png" },
    };
  
    // Return the mapped image or a default if not found.
    return imageMap[skill] || { src: "/assets/default.png" };
  }
  