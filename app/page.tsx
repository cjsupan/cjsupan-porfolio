import Image from "next/image";
import Navigation from "../components/layout/navigations";
import { GitHub, Link, Linkedin } from "react-feather";

export default function Home() {
  const logos = [
    "/icons/html.svg",
    "/icons/css.svg",
    "/icons/js.svg",
    "/icons/ts.svg",
    "/icons/react.svg",
    "/icons/nextjs.svg",
    "/icons/nodejs.svg",
    "/icons/mysql.svg",
    "/icons/mongodb.svg",
    "/icons/sass.svg",
    "/icons/tailwind.svg",
    "/icons/github.svg",
  ];

  const projects = [
    {
      title: "Project 1",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/sample-image.jpg",
      link: "/project1",
      code_link: "/project1",
    },
    {
      title: "Project 2",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/sample-image.jpg",
      link: "/project2",
      code_link: "/project2",
    },
    {
      title: "Project 3",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/sample-image.jpg",
      link: "/project3",
      code_link: "/project3",
    },
    {
      title: "Project 4",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/sample-image.jpg",
      link: "/project4",
      code_link: "/project4",
    },
  ];

  return (
    <div id="about" className="bg-white w-screen grid grid-flow-row gap-52">
      <Navigation />
      <div className="w-10/12 grid grid-flow-col content-center place-content-center h-64 mx-auto">
        <h1 className="text-center w-3/5 font-bold text-[58px] text-primary">
          Hi 👋, My name is{" "}
          <span className="bg-gradient-to-r from-[#13B0F5] to-blue-500 text-transparent bg-clip-text">
            CJ Supan
          </span>{" "}
          I build things for web
        </h1>
        <div className="size-80 ring-2 ring-red rounded-full relative overflow-hidden">
          <Image src="/profile.jpg" alt="profile" fill sizes="w-80 h-80" />
        </div>
      </div>

      <div id="technologies" className="w-10/12 flex flex-col gap-8 mx-auto">
        <div className="flex flex-col">
          <h2 className="text-center font-bold text-[48px] text-primary">
            My Tech Stack
          </h2>
          <h4 className="text-center text-[24px] text-secondary">
            Technologies I&apos;ve been working with recently
          </h4>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {logos.map((logo, index) => (
              <div key={index} className="w-24 h-24 relative">
                <Image src={logo} alt="logo" fill sizes="w-14 h-14" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="projects" className="w-10/12 flex flex-col gap-8 mx-auto">
        <div className="flex flex-col">
          <h2 className="text-center font-bold text-[48px] text-primary">
            Projects
          </h2>
          <h4 className="text-center text-[24px] text-secondary">
            Things I&apos;ve built so far
          </h4>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-max gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full rounded-xl border-2 overflow-hidden"
              >
                <div className="w-full h-52 relative">
                  <Image
                    src={project.image}
                    alt="project"
                    fill
                    sizes="w-full h-full"
                  />
                </div>
                <div className="w-full p-4 flex flex-col gap-2">
                  <h3 className="text-center font-bold text-[24px]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary h-32 leading-5 ">
                    {project.description}
                  </p>
                  <div className="flex justify-between">
                    <a
                      href={project.link}
                      className="text-secondary text-sm py-2 mt-4 flex gap-2 underline underline-offset-2"
                    >
                      <Link className="text-primary" size={20} />
                      Live Demo
                    </a>
                    <a
                      href={project.code_link}
                      className="text-secondary text-sm py-2 mt-4 flex gap-2 underline underline-offset-2"
                    >
                      <GitHub className="text-primary" size={20} />
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
        className="w-10/12 h-52 mx-auto flex flex-col justify-evenly"
      >
        <div className="flex justify-between items-center ">
          <h2 className="text-primary font-bold text-[28px]">Get in Touch</h2>
          <div className=" flex gap-8">
            <p className="text-primary">+639195452872</p>
            <p className="text-primary">supancj18@gmail.com</p>
            <div className="flex justify-self-end gap-6">
              <GitHub className="text-primary" size={20} />
              <Linkedin className="text-primary" size={20} />
            </div>
          </div>
        </div>
        <div className="border border-secondary" />
        <div>
          <ul className="w-full flex gap-8 justify-end">
            <li>
              <a href="/" className="text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-primary">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="text-primary">
                Technologies
              </a>
            </li>
            <li>
              <a href="/projects" className="text-primary">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
