// components/Customers.js
import React from "react";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";

function Slider({
  // Create 10 slides each with the text "Frontend Developer"
  slides = Array.from({ length: 10 }, () => ({ text: "Frontend Developer" })),
}) {
  const OPTIONS = { loop: true };

  // Auto-scroll configuration (using left direction here)
  const autoScrollLeft = { playOnInit: true, interval: 6000, speed: -1 };

  return (
    <div className="bg-mainGray py-3 md:py-custom-space dark:bg-bgDarkGray ">
      <EmblaCarousel
        slides={slides}
        options={OPTIONS}
        autoScrollOptions={autoScrollLeft}
      />
    </div>
  );
}

export default Slider;
