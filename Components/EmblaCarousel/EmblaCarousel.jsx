// EmblaCarousel.jsx
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./embla.module.css";
import { useRouter } from "next/router";

const EmblaCarousel = ({ slides, options, autoScrollOptions }) => {
  const [emblaRef] = useEmblaCarousel(options, [AutoScroll(autoScrollOptions)]);
  const router = useRouter();
  const isAboutPage = router.pathname === "/about";

  // Center slides if there are fewer than 10
  const shouldCenter = slides.length < 10;

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div
          className={`${styles.embla__container} ${
            shouldCenter ? styles.embla__containerCenter : ""
          }`}
        >
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={`${styles.box} ${isAboutPage ? styles.boxWhite : ""}`}>
                {/* "Frontend" with solid color */}
                <span className="text-mainColor3 font-bold text-[60px] font-clash">
                  Frontend
                </span>
                {/* "Developer" with outlined text effect */}
                <span className="text-transparent font-clash font-bold text-[60px] ml-1 [-webkit-text-stroke:1px_#C45EEC]">
                  Developer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
