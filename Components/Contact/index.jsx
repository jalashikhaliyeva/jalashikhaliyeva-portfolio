import React from "react";
import ContactFooter from "../ContactFooter";
import Container from "../Container";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact({ id }) {
  return (
    <Container>
      <div  id={id}  className="w-full flex flex-col md:flex-row justify-between pt-60">
        <div className="w-full">
          <h6 className="font-clash font-bold text-6xl md:text-8xl text-bg mb-20 [-webkit-text-stroke:1px_#C45EEC]">
            Feel Free to Contact Me
          </h6>

          <div className="flex flex-col gap-3">
            {/* E-mail */}
            <div className="flex items-center gap-4">
              <div>
                <IoMdMail className="fill-subTitleGray text-3xl" />
              </div>
              <div className="flex flex-col gap-1 font-clash">
                <p className="font-semibold text-subTitleGray text-2xl md:text-3xl">
                  E-mail
                </p>
                <a 
                  href="mailto:jala.shikhaliyeva@gmail.com?subject=New%20Project&body=Hi%20Jala%20Shikhaliyeva,"
                  className="relative group inline-block"
                >
                  <p className="text-purple500 text-lg md:text-2xl">
                    jala.shikhaliyeva@gmail.com
                  </p>
                  <span className="absolute left-0 -bottom-1 block h-[2px] w-0 bg-purple500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div>
                <FaPhoneVolume className="fill-subTitleGray text-3xl" />
              </div>
              <div className="flex flex-col gap-1 font-clash">
                <p className="font-semibold text-subTitleGray text-2xl md:text-3xl">
                  Phone
                </p>
                <div className="relative group inline-block">
                  <p className="text-purple500 text-lg md:text-2xl">
                    +994 55 410 55 26
                  </p>
                  <span className="absolute left-0 -bottom-1 block h-[2px] w-0 bg-purple500 transition-all duration-300 group-hover:w-full"></span>
                </div>
              </div>
            </div>

            {/* Linkedin */}
            <div className="flex items-center gap-4">
              <div>
                <FaLinkedinIn className="fill-subTitleGray text-3xl" />
              </div>
              <div className="flex flex-col gap-1 font-clash">
                <p className="font-semibold text-subTitleGray text-2xl md:text-3xl">
                  Linkedin
                </p>
                <a 
                  href="https://www.linkedin.com/in/jaleshikhaliyeva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-block"
                >
                  <p className="text-purple500 text-lg md:text-2xl">
                    in/jaleshikhaliyeva
                  </p>
                  <span className="absolute left-0 -bottom-1 block h-[2px] w-0 bg-purple500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <ContactFooter />
        </div>
      </div>
    </Container>
  );
}

export default Contact;
