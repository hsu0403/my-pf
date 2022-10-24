import { useEffect, useState } from "react";

interface IProps {
  page: boolean;
}

export default function Language({ page }: IProps) {
  const [fadein, setFadein] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFadein(page);
    }, 200);
  }, [page]);
  return (
    <div className="language-container">
      <h1
        className={`tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-cyan-300 text-center transition-all pb-1 pt-52 text-4xl ${
          fadein && "fadein"
        }`}
      >
        Language
      </h1>
      <div className="bg-cyan-200 bg-opacity-10 rounded-md shadow-xl p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="space-y-4 w-96 text-gray-700 opacity-80">
          <li
            className={`flex justify-between items-center ${
              fadein && "fadein"
            }`}
          >
            <h2>JavaScript</h2>
            <div className="w-44 h-4 bg-white rounded-md relative">
              <div className="absolute w-44 h-4 rounded-md bg-red-500"></div>
            </div>
          </li>
          <li
            className={`flex justify-between items-center ${
              fadein && "fadein"
            }`}
          >
            <h2>TypeScript</h2>
            <div className="w-44 h-4 bg-white rounded-md relative">
              <div className="absolute w-40 h-4 rounded-md bg-red-500"></div>
            </div>
          </li>
          <li
            className={`flex justify-between items-center ${
              fadein && "fadein"
            }`}
          >
            <h2>Java</h2>
            <div className="w-44 h-4 bg-white rounded-md relative">
              <div className="absolute w-40 h-4 rounded-md bg-red-500"></div>
            </div>
          </li>
          <li
            className={`flex justify-between items-center ${
              fadein && "fadein"
            }`}
          >
            <h2>C</h2>
            <div className="w-44 h-4 bg-white rounded-md relative">
              <div className="absolute w-36 h-4 rounded-md bg-red-500"></div>
            </div>
          </li>
          <li
            className={`flex justify-between items-center ${
              fadein && "fadein"
            }`}
          >
            <h2>C++</h2>
            <div className="w-44 h-4 bg-white rounded-md relative">
              <div className="absolute w-36 h-4 rounded-md bg-red-500"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
