"use client";
import { GitHub, Linkedin } from "react-feather";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
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
      className={` w-11/12 h-14 grid grid-flow-col gap-x-8 place-content-end content-center sticky top-0 z-50`}
    >
      <ul className="grid grid-flow-col lg:gap-x-8 xxs:gap-3 ">
        <li>
          <button className="xxs:text-xs" onClick={(e: any) => handleScroll(e)}>
            Home
          </button>
        </li>
        <li>
          <button className="xxs:text-xs" onClick={(e: any) => handleScroll(e)}>
            About
          </button>
        </li>
        <li>
          <button className="xxs:text-xs" onClick={(e: any) => handleScroll(e)}>
            Technologies
          </button>
        </li>
        <li>
          <button className="xxs:text-xs" onClick={(e: any) => handleScroll(e)}>
            Projects
          </button>
        </li>
        <li>
          <button className="xxs:text-xs" onClick={(e: any) => handleScroll(e)}>
            Contact
          </button>
        </li>
      </ul>
      <ul className="grid grid-flow-col gap-x-8 text-secondary xxs:hidden lg:inline-flex">
        <li>
          <a href="https://github.com/cjsupan" target="_blank">
            <GitHub size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/cedrick-john-supan/"
            target="_blank"
          >
            <Linkedin size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
