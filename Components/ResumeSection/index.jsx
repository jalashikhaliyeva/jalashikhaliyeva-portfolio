import React, { useEffect } from "react";
import styles from "./ResumeSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../Container";
import Title from "../Title";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const ResumeSection = ({ id}) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Container>
      <section   id={id}  className={styles.resumeSection}>
        <div className={styles.container}>
          <Title title={"My education and work experience"} />

          {/* Experiences Container */}
          <div className={styles.experiencesContainer}>
            {/* Experience Item 1 */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className={styles.experienceItem}
            >
              {/* Left Column – Icon & Details */}
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <MdWork />
                </div>
                <div className={styles.experienceOrg}>Markup Agency</div>
                <div className={styles.experienceDuration}>
                  April 2024 - Present
                </div>
              </div>
              {/* Right Column – Title & Description */}
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>Frontend Developer</div>
                <div className={styles.experienceDesc}>
                  As a Frontend Developer at Markup Agency, I have been
                  leveraging my skills in JavaScript, React.js, Next.js,
                  TypeScript, and modern frameworks like Tailwind CSS and
                  Material UI to create efficient, user-friendly web
                  applications. My expertise also extends to Firebase, Redux
                  Toolkit, and testing APIs with Postman, enabling me to deliver
                  seamless and responsive designs.
                </div>
              </div>
            </div>
            {/* Experience Item 2 */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              {/* Right Column – Icon & Details */}

              {/* Left Column – Title & Description */}
              <div className={styles.experienceLeft}>
                <div className={styles.experienceTitle}>Social Work</div>
                <div className={styles.experienceDesc}>
                  From my bachelor's degree in social work, I gained a deep
                  understanding of human behavior, social systems, and effective
                  methods for supporting individuals and communities in need.
                  This education equipped me with strong skills in empathy,
                  communication, problem-solving, and advocacy to address
                  diverse social challenges.
                </div>
              </div>
              <div className={styles.experienceRight}>
                <div className={styles.experienceIcon}>
                  <IoSchoolSharp />
                </div>
                <div className={styles.experienceOrg}>University</div>
                <div className={styles.experienceDuration}>2020 - 2024</div>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              {/* Left Column – Icon & Details */}
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <IoSchoolSharp />
                </div>
                <div className={styles.experienceOrg}>University</div>
                <div className={styles.experienceDuration}>2021 - 2024</div>
              </div>
              {/* Right Column – Title & Description */}
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>Computer Science</div>
                <div className={styles.experienceDesc}>
                  Pursuing a second degree in Computer Science at the
                  University. Successfully passed the entrance exam for this
                  concurrent studies program. The curriculum offers in-depth
                  knowledge of computer science, covering advanced programming,
                  algorithms, and system design. This dual-education program
                  aims to enhance my academic and professional growth, preparing
                  me for diverse technological challenges in the tech industry.
                </div>
              </div>
            </div>

            {/* Experience Item 4 */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className={styles.experienceItem}
            >
              {/* Right Column – Icon & Details */}

              {/* Left Column – Title & Description */}
              <div
                className={styles.experienceLeft}
                data-aos="fadeInLeft"
                data-aos-delay="200"
              >
                <div className={styles.experienceTitle}>
                  Frontend Development
                </div>
                <div className={styles.experienceDesc}>
                  I completed an intensive Frontend Developer Bootcamp, where I
                  gained hands-on experience in HTML, CSS, JavaScript, and
                  modern frameworks like React and Next.js. This rigorous
                  program equipped me with practical skills and real-world
                  project experience, preparing me to excel in frontend
                  development roles.
                </div>
              </div>
              <div
                className={styles.experienceRight}
                data-aos="fadeInRight"
                data-aos-delay="100"
              >
                <div className={styles.experienceIcon}>
                  <IoSchoolSharp />
                </div>
                <div className={styles.experienceOrg}>BOOTCAMP - EACAMP</div>
                <div className={styles.experienceDuration}>2023 - 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ResumeSection;
