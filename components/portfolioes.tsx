import { useEffect, useState } from "react";
import Portfolio from "./portfolio";

interface IFullStack {
  name: String;
  Url: String;
  frontUrl: String;
  backendUrl?: String;
  img: String;
  content: String;
}

const fullStack: Array<IFullStack> = [
  {
    name: "Wetube",
    Url: "https://wetube-hsu.herokuapp.com/",
    frontUrl: "https://github.com/hsu0403/wetube",
    img: "/img/wetube.png",
    content: "YouTube Clone",
  },
  {
    name: "CarrotMarket",
    Url: "https://nextjs-carrot.vercel.app/",
    frontUrl: "https://github.com/hsu0403/nextjs-carrot",
    img: "/img/carrot.png",
    content: "당근마켓 Clone",
  },
  {
    name: "UberEats",
    Url: "https://dreamy-pasca-d6dc2c.netlify.app/",
    frontUrl: "https://github.com/hsu0403/uber-eats-frontend",
    backendUrl: "https://github.com/hsu0403/uber-eats-backend",
    img: "/img/uberEats.png",
    content: "Uber Eats Clone",
  },
  {
    name: "Hcast",
    Url: "https://nimble-torte-413c62.netlify.app/",
    frontUrl: "https://github.com/hsu0403/hcast-frontend",
    backendUrl: "https://github.com/hsu0403/hcast-backend",
    img: "/img/hcast.png",
    content: "Hear different sounds",
  },
];

interface IFront {
  name: String;
  Url: String;
  frontUrl: String;
  img: String;
  content: String;
}

const front: Array<IFront> = [
  {
    name: "Netflix",
    Url: "https://hsu0403.github.io/react-master-netflix/",
    frontUrl: "https://github.com/hsu0403/react-master-netflix",
    img: "/img/netflix.png",
    content: "Netflix Clone",
  },
  {
    name: "Trello",
    Url: "https://hsu0403.github.io/react-master-trello/",
    frontUrl: "https://github.com/hsu0403/react-master-trello",
    img: "/img/trello.png",
    content: "Trello To Do",
  },
];

interface IProps {
  page: boolean;
  name: String;
  onNameClick: (name: String) => void;
}

export default function Portfolioes({ page, name, onNameClick }: IProps) {
  const [fadein, setFadein] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFadein(page);
    }, 200);
  }, [page]);
  return (
    <div className="portfolio-container">
      <h1
        className={`tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-cyan-300 text-center transition-all pt-6 pb-1 mb-4 xl:mb-16 text-4xl ${
          fadein && "fadein"
        }`}
      >
        Portfolio
      </h1>
      <div className="absolute w-full h-80 transition-all">
        <div className="w-3/4 sm:ml-48 ml-36 transition-all">
          <h2
            className={`text-2xl font-semibold mb-2 ml-6 ${fadein && "fadein"}`}
          >
            Frontend
          </h2>
          <Portfolio
            fadein
            name={name}
            onNameClick={onNameClick}
            portfolio={front}
          />
        </div>
        <div className="w-3/4 sm:ml-48 ml-36 transition-all">
          <h2
            className={`text-2xl font-semibold mb-2 ml-6 mt-4 ${
              fadein && "fadein"
            }`}
          >
            Fullstack
          </h2>
          <Portfolio
            fadein
            name={name}
            onNameClick={onNameClick}
            portfolio={fullStack}
          />
        </div>
      </div>
    </div>
  );
}
