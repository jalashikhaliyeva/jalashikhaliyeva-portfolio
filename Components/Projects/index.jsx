import React from "react";
import style from "./style.module.css";
import Title from "../Title";
import ProjectCard from "../ProjectCard";
import Container from "../Container";


// Create a mock data array with different card details
const mockData = [
  {
    id: 6,
    imageHover: "/images/mockups/baku-video.png",
    image: "/images/mockups/baku-video.png",
    alt: "Project 3",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Learn More",
    url: "https://baku-videography-markup.vercel.app/",
  },
  {
    id: 1,
    imageHover: "/images/mockups/markup-agency.png",
    image: "/images/mockups/markup-agency.png",
    alt: "Project 1",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Learn More",
    url: "https://markup-green.vercel.app/",
  },
  {
    id: 4,
    imageHover: "/images/mockups/innoser.png",
    image: "/images/mockups/innoser.png",
    alt: "Project 3",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Learn More",
    url: "https://innosert.az/",
  },
  {
    id: 2,
    imageHover: "/images/mockups/Poodlepom1.png",
    image: "/images/mockups/Poodlepom1.png",
    alt: "Project 1",
    title: "Html & Css",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Learn More",
    url: "https://poodlepom.com/",
  },
  {
    id: 3,
    imageHover: "/images/mockups/bakuheartdays.png",
    image: "/images/mockups/bakuheartdays.png",
    alt: "Project 3",
    title: "Html & Css",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Learn More",
    url: "https://bakuheartdays.az/",
  },
 
  {
    id: 5,
    imageHover: "/images/mockups/bc-group.png",
    image: "/images/mockups/bc-group.png",
    alt: "Project 3",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Learn More",
    url: "https://bc-group.az/",
  },
 


];

function Projects({id}) {
  return (
    <div id={id}  className={`${style.container}  mb-60`}>
      <div className="mt-60">
      <Title title={"My Projects"} />

      </div>
      <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10 ">
        {mockData.map((card) => (
          <ProjectCard key={card.id} cardData={card} />
        ))}
      </div>

      </Container>
    
    </div>
  );
}

export default Projects;
