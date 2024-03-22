"use client";
import { GitHub, Linkedin } from "react-feather";

const Navigation = () => {
  //create a function to handle the scroll event
  //when the user click on the navigation link the page will scroll to the section
  //with the id of the link

  const handleScroll = (e: any) => {
    e.preventDefault();
    const id = e.target.innerText.toLowerCase();
    const element = document.getElementById(id);
    const navHeight = document.getElementById("navigation")?.offsetHeight;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navHeight!,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="navigation"
      className="w-10/12 h-14 grid grid-flow-col gap-x-8 place-content-end content-center mx-auto sticky top-0 bg-white z-50"
    >
      <ul className="grid grid-flow-col gap-x-8 text-secondary">
        <li>
          <button onClick={(e: any) => handleScroll(e)}>About</button>
        </li>
        <li>
          <button onClick={(e: any) => handleScroll(e)}>Technologies</button>
        </li>
        <li>
          <button onClick={(e: any) => handleScroll(e)}>Projects</button>
        </li>
        <li>
          <button onClick={(e: any) => handleScroll(e)}>Contact</button>
        </li>
      </ul>
      <ul className="grid grid-flow-col gap-x-8 text-secondary">
        <li>
          <a href="/" target="">
            <GitHub size={20} />
          </a>
        </li>
        <li>
          <a href="/" target="">
            <Linkedin size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
