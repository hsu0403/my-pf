import Menu from "@components/menu";
import Profile from "@components/profile";
import { throttle } from "lodash";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

interface IPage {
  page2: boolean;
  page3: boolean;
  page4: boolean;
}

const Home: NextPage = () => {
  const [page, setPage] = useState<IPage>({
    page2: false,
    page3: false,
    page4: false,
  });
  const [start, setStart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 2000);
  }, [start]);

  const showPage = useMemo(
    () =>
      throttle(() => {
        const height = window.innerHeight / 2;
        if (window.scrollY >= height && !page.page2) {
          setPage((prev) => ({ ...prev, page2: true }));
        } else if (window.scrollY >= height * 3 && !page.page3) {
          setPage((prev) => ({ ...prev, page3: true }));
        } else if (window.scrollY >= height * 5 && !page.page4) {
          setPage((prev) => ({ ...prev, page4: true }));
        }
      }, 300),
    [page]
  );

  useEffect(() => {
    window.addEventListener("scroll", showPage);
    return () => {
      window.removeEventListener("scroll", showPage);
    };
  }, [showPage]);

  const [num, setNum] = useState(0);

  const onNumClick = (n: number) => {
    setNum(n);
  };
  return start ? (
    <>
      <Head>
        <title>title</title>
      </Head>
      <Menu start />
      <section
        id="page1"
        className="relative bg-gradient-to-tr from-indigo-500 h-screen"
      >
        <Profile start />
        <span className="rounded-sm shadow-xl transition-all select-none flex items-center bg-slate-300 p-3 bg-opacity-30 w-7/12 h-72 sm:h-60 md:h-52 lg:h-44 xl:h-36 absolute mt-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:rotate-3 after:scale-95 after:bg-slate-300 after:w-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-z-10 after:opacity-40 after:rounded-sm after:h-72 after:sm:h-60 after:md:h-52 after:lg:h-44 after:xl:h-36 before:rotate-6 before:scale-90 before:bg-slate-300 before:w-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:opacity-40 before:rounded-sm before:h-72 before:sm:h-60 before:md:h-52 before:lg:h-44 before:xl:h-36">
          <h3 className="text-gray-600 opacity-90 text-start">
            학부시절부터 여러가지 경험을 해보았지만 당시에는 흥미를 느끼지
            못하고 해야하니까 했었었는데, 혼자서 공부를 더 해보고 느껴보니
            결과물이 눈에 확 띄는 Web을 만들거나 App을 만들어 보는거에 가장
            흥미를 느끼게 되어 FullStack 개발자로서 성장해 나가는중 입니다.
            아직까지는 많은 개발자들이 생각하기에 Web 3.0은 멀었다고 아직은
            아니라고 하지만 그 때가 오기전에 미리 공부를 해두어 선두 개발자가
            되는게 목표입니다.
          </h3>
        </span>
      </section>
      <section
        id="page2"
        className="bg-gradient-to-br from-indigo-500 h-screen relative"
      >
        <h1 className="tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-cyan-300 text-center transition-all pt-10 lg:pt-40 text-4xl">
          Develop Skills
        </h1>
        <div className="w-full max-w-lg z-10 bg-white opacity-30 h-1 lg:h-1/3 lg:w-1  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="bg-cyan-200 bg-opacity-10 rounded-md shadow-xl transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl w-full h-3/4 lg:h-2/5 grid grid-cols-1 lg:grid-cols-2 gap-2 p-4">
          <div className="flex flex-col justify-center group">
            <h2 className="text-center text-xl transition-all text-gray-500 group-hover:text-gray-600 mb-4 font-semibold">
              Frontend
            </h2>
            <ul className="text-start ml-12 text-gray-700 opacity-80 font-medium">
              <li>React</li>
              <li>React Native</li>
              <li>Next</li>
              <li>Tailwind</li>
              <li>Styled Components</li>
              <li>Html</li>
              <li>Css</li>
              <li>Pug</li>
              <li>Jest</li>
              <li>Cypress</li>
              <li className="text-center -ml-12">...</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center group">
            <h2 className="text-center text-xl transition-all mb-4 text-gray-500 group-hover:text-gray-600 font-semibold">
              Backend
            </h2>
            <ul className="text-start ml-12 text-gray-700 opacity-80">
              <li>TypeOrm</li>
              <li>Prisma</li>
              <li>GraphQl</li>
              <li>MongoDB</li>
              <li>MySql</li>
              <li>NodeJs</li>
              <li>Express</li>
              <li>Nest</li>
              <li>Spring</li>
              <li className="text-center -ml-12">...</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        id="page3"
        className="bg-gradient-to-tr from-indigo-500 h-screen relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 w-full h-80">
          <div>
            <div>fullstack</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div className="" key={item}>
                  <div
                    onClick={() => onNumClick(item)}
                    className="w-full relative h-40 transition-all bg-yellow-400"
                  >
                    <div
                      style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1528321917418-af00f8823ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MjY1Mzg&ixlib=rb-1.2.1&q=80&w=800")`,
                      }}
                      className={`w-full cursor-pointer grayscale bg-center bg-cover bg-no-repeat h-full absolute transition-all duration-1000 bg-gray-500 ${
                        num === item && "w-1/2 grayscale-0"
                      }`}
                    >
                      사진
                    </div>
                    <div
                      id={`ga${item}`}
                      className={`w-full absolute transition-all h-10 pointer-events-none ${
                        num === item && "fadein"
                      }`}
                    >
                      <div
                        className={`text-end mr-2 transition-all delay-1000 duration-1000 opacity-0 ${
                          num === item && "opacity-100"
                        }`}
                      >
                        web address
                      </div>
                      <div>github front</div>
                      <div>github back</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>front</div>
          </div>
        </div>
      </section>
      <section
        id="page4"
        className="bg-gradient-to-br from-indigo-500 h-screen relative"
      >
        <h1 className="tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-cyan-300 text-center transition-all pb-1 pt-52 text-4xl">
          Language
        </h1>
        <div className="bg-cyan-200 bg-opacity-10 rounded-md shadow-xl p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="space-y-4 w-96 text-gray-700 opacity-80">
            <li className="flex justify-between items-center">
              <h2>JavaScript</h2>
              <div className="w-44 h-4 bg-white rounded-md relative">
                <div className="absolute w-44 h-4 rounded-md bg-red-500"></div>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <h2>TypeScript</h2>
              <div className="w-44 h-4 bg-white rounded-md relative">
                <div className="absolute w-40 h-4 rounded-md bg-red-500"></div>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <h2>Java</h2>
              <div className="w-44 h-4 bg-white rounded-md relative">
                <div className="absolute w-40 h-4 rounded-md bg-red-500"></div>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <h2>C</h2>
              <div className="w-44 h-4 bg-white rounded-md relative">
                <div className="absolute w-36 h-4 rounded-md bg-red-500"></div>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <h2>C++</h2>
              <div className="w-44 h-4 bg-white rounded-md relative">
                <div className="absolute w-36 h-4 rounded-md bg-red-500"></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  ) : (
    <div className="animate-enter w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Welcome</h1>
      <h2 className="">This is Next.js</h2>
    </div>
  );
};

export default Home;
