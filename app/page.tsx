"use client";
import Image from "next/image";
import Navigation from "../components/layout/navigations";
import { GitHub, Link, Linkedin } from "react-feather";
import ThemeToggle from "@/components/themeToggle";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const logos = [
    "/icons/html.svg",
    "/icons/css.svg",
    "/icons/js.svg",
    "/icons/ts.svg",
    "/icons/react.svg",
    "/icons/nextjs.svg",
    "/icons/nodejs.svg",
    "/icons/mysql.svg",
    "/icons/mongoDB.svg",
    "/icons/sass.svg",
    "/icons/tailwind.svg",
    "/icons/github.svg",
  ];

  const projects = [
    {
      title: "Appointment Scheduler",
      description:
        "A web application that allows users to schedule an appointment with a vet. The application is built using Next.js, Tailwind CSS, and MongoDB.",
      image: "/appointment.png",
      link: "https://vet-clinic-swart.vercel.app/",
      code_link: "https://github.com/cjsupan/vet-clinic",
    },
    {
      title: "Portfolio Website",
      description:
        "A web application that showcases my projects and skills. The application is built using Next.js, Tailwind CSS",
      image: "/portfolio.png",
      link: "https://cjsupan-porfolio.vercel.app/",
      code_link: "https://github.com/cjsupan/cjsupan-porfolio",
    },
    // {
    //   title: "Project 3",
    //   description:
    //     "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   image: "/sample-image.jpg",
    //   link: "/project3",
    //   code_link: "/project3",
    // },
    // {
    //   title: "Project 4",
    //   description:
    //     "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   image: "/sample-image.jpg",
    //   link: "/project4",
    //   code_link: "/project4",
    // },
  ];

  return (
    <div
      id="about"
      className={`${
        theme === "dark" ? "bg-background-dark" : "bg-background-light"
      } flex flex-col justify-center items-center xs:gap-20 xs:pb-8 md:gap-20 lg:gap-42 xl:gap-20`}
    >
      <Navigation />
      <div className="w-10/12 flex lg:flex-row lg:mb-32 xs:flex-col-reverse gap-8 xs:mb-20 md:justify-center justify-between items-center">
        <h1
          className={`${
            theme === "dark" ? "text-primary-dark" : "text-secondary-light"
          } font-semibold xs:text-left lg:text-left  xs:text-4xl md:text-5xl lg:text-5xl xl:text-7xl`}
        >
          Hi 👋, My name is <br />
          <span className=" font-bold bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text">
            CJ Supan
          </span>{" "}
          <br />I build things for web
        </h1>
        <div className=" ring-2 ring-red rounded-full relative overflow-hidden xs:size-72 lg:size-80 xl:size-96">
          <Image
            src="/profile.jpg"
            alt="profile"
            fill
            sizes="w-80 h-80"
            priority
          />
        </div>
      </div>

      <div
        id="technologies"
        className="w-10/12 flex flex-col gap-8 xs:mb-20 lg:mb-32 xl:mb-32"
      >
        <div className="flex flex-col">
          <h2
            className={`${
              theme === "dark" ? "text-primary-dark" : "text-primary-light"
            } text-center font-bold text-[48px]`}
          >
            My Tech Stack
          </h2>
          <h4 className="text-center text-[24px] text-secondary">
            Technologies I&apos;ve been working with recently
          </h4>
        </div>
        <div className=" flex items-center justify-center">
          <div className=" grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-16 xs:gap-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="size-24 xs:size-14 md:size-24 relative"
              >
                <Image src={logo} alt="logo" fill sizes="w-14 h-14" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="projects" className="w-10/12 flex flex-col gap-8">
        <div className="flex flex-col">
          <h2
            className={`${
              theme === "dark" ? "text-primary-dark" : "text-primary-light"
            } text-center font-bold text-[48px] `}
          >
            Projects
          </h2>
          <h4 className="text-center text-[24px] text-secondary">
            Things I&apos;ve built so far
          </h4>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`w-full rounded-xl overflow-hidden ${
                  theme === "dark"
                    ? "border border-secondary-dark"
                    : "border border-secondary-light"
                } shadow-sm`}
              >
                <div className="w-full h-44 relative">
                  <Image
                    src={project.image}
                    alt="project"
                    fill
                    sizes="w-full h-full"
                  />
                </div>
                <div className="w-full p-4 flex flex-col gap-2">
                  <h3 className="text-center font-bold text-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary h-32 leading-5 ">
                    {project.description}
                  </p>
                  <div className="flex justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-secondary text-sm py-2 mt-4 flex gap-2 underline underline-offset-2"
                    >
                      <Link
                        className={`${
                          theme === "dark"
                            ? "text-secondary-dark"
                            : "text-primary"
                        }`}
                        size={20}
                      />
                      Live Demo
                    </a>
                    <a
                      href={project.code_link}
                      target="_blank"
                      className="text-secondary text-sm py-2 mt-4 flex gap-2 underline underline-offset-2"
                    >
                      <GitHub
                        className={`${
                          theme === "dark"
                            ? "text-secondary-dark"
                            : "text-primary"
                        }`}
                        size={20}
                      />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="w-10/12 flex flex-col justify-evenly xs:gap-2 lg:gap-8"
      >
        <div className="border border-secondary" />
        <div className="w-full flex lg:flex-row xs:flex-col gap-4 lg:justify-between xs:justify-center">
          <h2
            className={`${
              theme === "dark" ? "text-secondary-dark" : "text-primary"
            } font-bold xs:w-full lg:w-1/3 xs:text-center lg:text-left xs:text-3xl sm:text-md lg:text-3xl`}
          >
            Get in Touch
          </h2>
          <div className="w-full flex lg:flex-row lg:justify-end lg:gap-8  md:flex-row md:gap-8 md:justify-center xs:flex-col xs:items-center xs:gap-4">
            <p
              className={`${
                theme === "dark" ? "text-secondary-dark" : "text-primary"
              } xs:text-xs lg:text-lg`}
            >
              +639195452872
            </p>
            <p
              className={`${
                theme === "dark" ? "text-secondary-dark" : "text-primary"
              } xs:text-xs lg:text-lg`}
            >
              supancj18@gmail.com
            </p>
            <div className="flex xs:justify-center lg:justify-self-end gap-6">
              <a href="https://github.com/cjsupan" target="_blank">
                <GitHub
                  className={`${
                    theme === "dark" ? "text-secondary-dark" : "text-primary"
                  }`}
                  size={20}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/cedrick-john-supan/"
                target="_blank"
              >
                <Linkedin
                  className={`${
                    theme === "dark" ? "text-secondary-dark" : "text-primary"
                  }`}
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
