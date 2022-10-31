import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface IProps {
  start: boolean;
}

export default function Profile({ start }: IProps) {
  const [fadein, setFadein] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFadein(start);
    }, 200);
  }, [start]);
  return (
    <div className="w-1/2 absolute top-16 right-0">
      <div className={`card-content ${fadein && "fadein"}`}>
        <div className="tilting-card-content bg-white rounded-xl">
          <div
            style={{
              backgroundImage: `url("/img/profile.jpg")`,
            }}
            className="absolute w-full h-64 bg-cover bg-no-repeat rounded-b-md"
          ></div>
          <span className="w-full pt-1 px-1">
            <h1 className="text-start text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-900">
              SeongUn Hwang
            </h1>
            <h2 className="font-normal text-slate-800">
              hseongun0403@gmail.com
            </h2>
            <h2 className="font-normal text-slate-800">010-4101-0553</h2>
            <h2 className="text-sm font-normal text-slate-800">
              금오공대 / 컴퓨터소프트웨어공학 졸업
            </h2>
            <h2 className="font-normal text-slate-800">
              정보처리기사{" "}
              <FontAwesomeIcon icon={faCheckCircle} className="text-lime-500" />
            </h2>
          </span>

          <div className="mouse-position-tracker">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
