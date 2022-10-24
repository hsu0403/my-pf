import { useEffect, useState } from "react";

interface IProps {
  page: boolean;
}

export default function Skills({ page }: IProps) {
  const [fadein, setFadein] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFadein(page);
    }, 200);
  }, [page]);
  return (
    <div className="skills-container">
      <h1
        className={`tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-cyan-300 text-center transition-all pt-10 lg:pt-40 text-4xl ${
          fadein && "fadein"
        }`}
      >
        Develop Skills
      </h1>
      <div className="w-full max-w-lg z-10 bg-white opacity-30 h-1 lg:h-1/3 lg:w-1  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="bg-cyan-200 bg-opacity-10 rounded-md shadow-xl transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl w-full h-3/4 lg:h-2/5 grid grid-cols-1 lg:grid-cols-2 gap-2 p-4">
        <div className="flex flex-col justify-center group">
          <h2
            className={`text-center text-xl transition-all text-gray-500 group-hover:text-gray-600 mb-4 font-semibold ${
              fadein && "fadein"
            }`}
          >
            Frontend
          </h2>
          <ul
            className={`text-start ml-12 text-gray-700 font-medium ${
              fadein && "fadein"
            }`}
          >
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
          <h2
            className={`text-center text-xl transition-all mb-4 text-gray-500 group-hover:text-gray-600 font-semibold ${
              fadein && "fadein"
            }`}
          >
            Backend
          </h2>
          <ul
            className={`text-start ml-12 text-gray-700 font-medium ${
              fadein && "fadein"
            }`}
          >
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
    </div>
  );
}
