import Image from "next/image";
import React, { useState } from "react";

function ProjectCard({ cardData }) {
  const { image, imageHover, alt, title, description, buttonText, url } = cardData;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
    onClick={() => url && window.open(url, "_blank", "noopener,noreferrer")}
      className="group flex flex-col rounded-lg overflow-hidden font-clash cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        {/* Base Image */}
        <Image
          src={image}
          alt={alt}
          fill
          quality={100}
          className={`rounded-2xl object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Hover Image */}
        <Image
          src={imageHover}
          alt={alt}
          fill
          quality={100}
          className={`rounded-2xl object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-mainColor2">{title}</h3>
          <button
        
            className="relative overflow-hidden mt-4 py-2 px-6 border border-mainColor3 text-mainColor3 text-lg rounded-full"
          >
            <span className="absolute left-0 top-0 h-full bg-mainColor3 transition-all duration-300 w-0 group-hover:w-full"></span>
            <span className="relative transition-colors duration-300 group-hover:text-white">
              {buttonText}
            </span>
          </button>
        </div>
        {/* Uncomment if you wish to display the description */}
        {/* <p className="mt-2 text-gray-600">{description}</p> */}
      </div>
    </div>
  );
}

export default ProjectCard;
