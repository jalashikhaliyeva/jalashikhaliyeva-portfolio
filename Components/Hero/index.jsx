import Image from "next/image";
import React from "react";
import Container from "../Container";
import Typewriter from "@/Components/Typewriter"; // adjust the import path as needed
import Slider from "../Slider";
import { FaGithub } from "react-icons/fa";
import style from "./style.module.css";

function Hero({ id }) {
  return (
    <div id={id}  className="bg-[url('/images/bg-vector.png')] bg-no-repeat bg-cover mt-28 bg-bottom">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row justify-between w-full">
          <div>
            <Image
              src="/images/me/me12.jpeg"
              alt="Hero Image"
              className="object-cover rounded-lg"
              width={600}
              height={300}
              quality={100}
            />
          </div>
          <div className="text-white flex flex-col gap-3 md:gap-8 pt-5 md:pt-32 font-clash">
            <h1 className="font-bold text-4xl md:text-6xl">
              Hi, It's Jala Shikhaliyeva
            </h1>
            {/* <Typewriter
              text="I'm a Frontend Developer"
              speed={150}
              pause={2000}
            /> */}
            <div className="flex gap-4 pt-9">
              <button>
                <a
                  href="/Resume-JalaShikhaliyeva.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${style.cvBtn} w-full mt-8 py-3 px-6 text-white bg-mainColor3 text-lg rounded-full uppercase`}
                >
                  Download CV
                </a>
              </button>
              <a
                href="https://github.com/jalashikhaliyeva"
                target="_blank"
                rel="noopener noreferrer"
                className={`${style.hoverLineBtn} mt-8 py-3 flex items-center gap-3 px-6 text-mainColor3 border-mainColor3 text-lg rounded-full uppercase`}
              >
                <FaGithub className="text-3xl" /> Github
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Slider />
    </div>
  );
}

export default Hero;
