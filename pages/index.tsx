import Interview from "@components/interview";
import Language from "@components/language";
import Menu from "@components/menu";
import Portfolioes from "@components/portfolioes";
import Profile from "@components/profile";
import Skills from "@components/skills";
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

  const [name, setName] = useState<String>("");

  const onNameClick = (name: String) => {
    setName(name);
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
        <Interview start />
      </section>
      <section
        id="page2"
        className="bg-gradient-to-br from-indigo-500 h-screen relative"
      >
        <Skills page={page.page2} />
      </section>
      <section
        id="page3"
        className="bg-gradient-to-tr from-indigo-500 h-screen relative"
      >
        <Portfolioes name={name} onNameClick={onNameClick} page={page.page3} />
      </section>
      <section
        id="page4"
        className="bg-gradient-to-br from-indigo-500 h-screen relative"
      >
        <Language page={page.page4} />
      </section>
    </>
  ) : (
    <div className="animate-enter w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Welcome</h1>
      <h2 className="">SeongUn&#39;s PF</h2>
    </div>
  );
};

export default Home;
