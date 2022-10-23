import { useEffect, useMemo, useState } from "react";
import { throttle } from "lodash";

interface Imenu {
  home: boolean;
  skill: boolean;
  portfolio: boolean;
  language: boolean;
}

interface IProps {
  start: boolean;
}

export default function Menu({ start }: IProps) {
  const [menu, setMenu] = useState<Imenu>({
    home: true,
    language: false,
    portfolio: false,
    skill: false,
  });
  const [fadein, setFadein] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFadein(start);
    }, 200);
  }, [start]);
  const onClick = (e: any) => {
    // if (e.currentTarget.id === "home") {
    //   setMenu({ home: true, language: false, portfolio: false, skill: false });
    // } else if (e.currentTarget.id === "skill") {
    //   setMenu({ home: false, language: false, portfolio: false, skill: true });
    // } else if (e.currentTarget.id === "portfolio") {
    //   setMenu({ home: false, language: false, portfolio: true, skill: false });
    // } else if (e.currentTarget.id === "language") {
    //   setMenu({ home: false, language: true, portfolio: false, skill: false });
    // }
  };

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        const height = window.innerHeight / 2;
        if (window.scrollY < height) {
          setMenu({
            home: true,
            language: false,
            portfolio: false,
            skill: false,
          });
        } else if (window.scrollY >= height && window.scrollY < height * 3) {
          setMenu({
            home: false,
            language: false,
            portfolio: false,
            skill: true,
          });
        } else if (
          window.scrollY >= height * 3 &&
          window.scrollY < height * 5
        ) {
          setMenu({
            home: false,
            language: false,
            portfolio: true,
            skill: false,
          });
        } else if (window.scrollY >= height * 5) {
          setMenu({
            home: false,
            language: true,
            portfolio: false,
            skill: false,
          });
        }
      }, 300),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [throttledScroll]);

  return (
    <div className="fixed h-screen flex flex-col justify-center ml-12 md:ml-20 lg:ml-28 z-10 transition-all">
      <div className="navigation">
        <ul>
          <li
            id="home"
            onClick={(e) => onClick(e)}
            className={`list ${menu.home && "act"} ${fadein && "fadein"}`}
          >
            <a href="#page1">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li
            id="skill"
            onClick={(e) => onClick(e)}
            className={`list ${menu.skill && "act"} ${fadein && "fadein"}`}
          >
            <a href="#page2">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </span>
              <span className="text">Skill</span>
            </a>
          </li>
          <li
            id="portfolio"
            onClick={(e) => onClick(e)}
            className={`list ${menu.portfolio && "act"} ${fadein && "fadein"}`}
          >
            <a href="#page3" className="">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <span className="text">Portfolio</span>
            </a>
          </li>
          <li
            id="language"
            onClick={(e) => onClick(e)}
            className={`list ${menu.language && "act"} ${fadein && "fadein"}`}
          >
            <a href="#page4">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  />
                </svg>
              </span>
              <span className="text">Language</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}
