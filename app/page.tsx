"use client";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Navigation from "../components/layout/navigations";
import { GitHub, Link, Linkedin, Briefcase } from "react-feather";
import ThemeToggle from "@/components/themeToggle";
import { useTheme } from "next-themes";

const seo = {
  title: "Cj Supan - Portfolio",
  description: "cj supan's portfolio",
  openGraph: {
    type: "website",
    url: "https://cjsupan-porfolio.vercel.app/",
    title: "Cj Supan - Portfolio",
    description: "cj supan's portfolio",
    images: [
      {
        url: "https://imgur.com/a/ZyBrqgG",
        width: 1200,
        height: 630,
        alt: "cj supan's portfolio",
      },
    ],
  },
  twitter: {
    handle: "@cjsupan",
    site: "@cjsupan",
    cardType: "summary_large_image",
  },
};

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      id="home"
      className={`${
        theme === "dark" ? "bg-background-dark" : "bg-background-light"
      } flex flex-col justify-center items-center xxs:pb-2 xs:gap-20 xxs:gap-20 xs:pb-8 md:gap-20 lg:gap-42 2xl:gap-80`}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <NextSeo {...seo} />
      </Head>
      <Navigation />
      <div className="w-10/12 flex lg:flex-row lg:mb-32 xxs:flex-col-reverse gap-8 xxs:mb-20 md:justify-center lg:justify-evenly items-center">
        <h1
          className={`${
            theme === "dark" ? "text-primary-dark" : "text-secondary-light"
          } font-semibold xs:text-left lg:text-left md:text-5xl lg:text-5xl xl:text-6xl xxs:text-2xl`}
        >
          Hi 👋, My name is <br />
          <span className="xxs:text-3xl md:text-6xl lg:text-6xl xl:text-8xl font-bold bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text">
            Cedrick
          </span>{" "}
          <br />I build things for web
        </h1>
        <div className=" ring-4 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]  rounded-full relative overflow-hidden lg:size-80 xl:size-96 xxs:size-60">
          <Image
            src="/profile.jpg"
            alt="profile"
            fill
            sizes="w-80 h-80"
            priority
          />
        </div>
      </div>

      <div id="about" className="w-10/12 flex flex-col gap-8 mb-20">
        <div className="flex flex-col gap-3 xxs:gap-0">
          <h2
            className={` text-center font-bold lg:text-7xl md:text-4xl xxs:text-3xl bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text`}
          >
            About Me
          </h2>
          <h4 className="text-center lg:text-4xl md:text-2xl xxs:text-lg text-secondary">
            A little bit about myself
          </h4>
        </div>
        <div className="flex flex-col gap-8">
          <p
            className={`${
              theme === "dark" ? "text-primary-dark" : "text-secondary-light"
            } text-lg xxs:text-sm xl:text-2xl`}
          >
            A skilled front-end developer with three years of experience in
            building websites and web applications. Well-versed in Agile
            methodology and responsive UI design. Possesses strong
            problems-solving abilities and a keen interest in staying current
            with industry trends.
          </p>
          <div className="w-full flex lg:flex-row md:flex-col xxs:flex-col gap-8 justify-between">
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-left text-3xl xxs:text-2xl xl:text-3xl text-primary font-semibold">
                Work Experience
              </h3>
              {workExperience.map((work, index) => (
                <div
                  key={index}
                  className=" flex flex-col gap-4 border-b-2 border-secondary pb-4"
                >
                  <div className="flex flex-col gap-2">
                    <div className=" flex justify-between items-center">
                      <h4 className="text-left text-[20px] xl:text-lg xxs:text-sm text-secondary">
                        {work.title}
                      </h4>
                      <div className="bg-[#D7FFE0] rounded-full px-4 xxs:px-2 flex items-center">
                        <p className="text-[#018C0F] xxs:text-xs xl:text-md text-sm leading-6">
                          {work.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-left xxs:text-xs xl:text-lg text-secondary flex gap-2 items-center">
                        <Briefcase size={16} />
                        {work.company}
                      </p>
                      <p className="text-left xxs:text-xs text-secondary">
                        {work.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" lg:border border-secondary" />
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-left text-3xl xxs:text-2xl xl:text-3xl text-primary font-semibold">
                Education
              </h3>
              <div className=" flex flex-col gap-4 border-b-2 border-secondary pb-4">
                <div className="flex flex-col gap-2">
                  <div className=" flex justify-between items-center">
                    <h4 className="text-left lg:text-lg xs:text-xs xxs:text-xs text-secondary">
                      Bachelor in Information Technology
                    </h4>
                    <div className="bg-[#D7FFE0] rounded-full px-4 flex items-center">
                      <p className="text-[#018C0F] text-sm xxs:text-xs leading-6">
                        Graduated
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-left lg:text-md xs:text-xs xxs:text-xs xl:text-md text-secondary flex gap-2 items-center">
                      <Briefcase size={16} />
                      Saint Louis College - San Fernando City, La Union
                    </p>
                    <p className="text-left lg:text-md xs:text-xs xxs:text-xs text-secondary">
                      June 2015 - July 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="technologies"
        className="w-10/12 flex flex-col gap-8 xxs:mb-20 lg:mb-32 xl:mb-32"
      >
        <div className="flex flex-col lg:gap-3 xxs:gap-0">
          <h2
            className={` text-center font-bold lg:text-7xl md:text-4xl xxs:text-3xl bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text`}
          >
            My Tech Stack
          </h2>
          <h4 className="text-center lg:text-4xl md:text-2xl xxs:text-md text-secondary">
            Technologies I&apos;ve been working with recently
          </h4>
        </div>
        <div className=" flex items-center justify-center">
          <div className=" grid grid-cols-1 xxs:grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-6 gap-16 xxs:gap-12 xl:gap-16 2xl:gap-20">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="size-24 xxs:size-14 md:size-24 xl:size-28 2xl:size-28 relative"
              >
                <Image src={logo} alt="logo" fill sizes="w-14 h-14" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="projects" className="w-10/12 flex flex-col gap-8">
        <div className="flex flex-col gap-3 xxs:gap-0">
          <h2
            className={`text-center font-bold lg:text-7xl md:text-4xl xxs:text-3xl bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text`}
          >
            Projects
          </h2>
          <h4 className="text-center lg:text-4xl md:text-xl xxs:text-md text-secondary">
            Things I&apos;ve built so far
          </h4>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        className="w-10/12 flex flex-col justify-evenly xxs:gap-2 lg:gap-8"
      >
        <div className="border border-secondary" />
        <div className="w-full flex lg:flex-row xxs:flex-col gap-4 lg:justify-between xs:justify-center">
          <h2
            className={`${
              theme === "dark" ? "text-secondary-dark" : "text-primary"
            } font-bold xxs:w-full lg:w-1/3 xxs:text-3xl xxs:text-center lg:text-left sm:text-md lg:text-3xl xl:text-5xl bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text`}
          >
            Get in Touch
          </h2>
          <div className="w-full flex lg:flex-row lg:justify-end lg:gap-8  md:flex-row md:gap-8 md:justify-center xxs:flex-col xxs:items-center xxs:gap-4 ">
            <p
              className={`${
                theme === "dark" ? "text-secondary-dark" : "text-primary"
              } xxs:text-xs lg:text-lg`}
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

const workExperience = [
  {
    title: "Front-end Developer",
    company: "Vashcorp Inc.",
    date: "Nov 2023 - Mar 2024",
    type: "Full Time",
  },
  {
    title: "Full-stack Developer",
    company: "Volenday",
    date: "Nov 2021 - Nov 2024",
    type: "Full Time",
  },
  {
    title: "Front-end Developer",
    company: "Raksquad Tech Corp.",
    date: "July 2021 - Sept 2021",
    type: "Internship",
  },
  {
    title: "Full-stack Developer",
    company: "Villge88",
    date: "Mar 2021 - June 2021",
    type: "Internship",
  },
];

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
