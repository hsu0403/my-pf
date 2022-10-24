interface IProps {
  portfolio: Array<any>;
  name: String;
  onNameClick: (name: String) => void;
  fadein: boolean;
}

export default function Portfolio({
  name,
  onNameClick,
  portfolio,
  fadein,
}: IProps) {
  return (
    <div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
      {portfolio.map((item, index) => (
        <div className="" key={index}>
          <div className="w-full shadow-xl relative h-56 transition-all bg-black rounded-md">
            <div
              onClick={() => onNameClick(item.name)}
              style={{
                backgroundImage: `url("${item.img}")`,
              }}
              className={`w-full rounded-md cursor-pointer grayscale bg-center bg-cover bg-no-repeat h-full absolute transition-all duration-1000 bg-gray-500 ${
                name === item.name && "w-3/5 grayscale-0"
              }`}
            ></div>
            <div
              className={`w-full text-white space-y-6 flex flex-col justify-start items-end absolute transition-all h-10 pointer-events-none ${
                name === item.name && "pointer-events-auto"
              }`}
            >
              <div
                className={`delay-150 bg-cyan-500 font-semibold py-1 px-4 absolute -top-7 rounded-tr-sm rounded-tl-3xl rounded-br-3xl rounded-bl-sm mt-2 mr-2 transition-all opacity-0 ${
                  name === item.name && "opacity-100 duration-1000"
                }`}
              >
                {item.content}
              </div>
              <div
                className={`hover:bg-emerald-400 rounded-md hover:delay-75 hover:p-2 mr-2 transition-all opacity-0 ${
                  name === item.name && "opacity-100 delay-500 duration-1000"
                }`}
              >
                <a href={`${item.Url}`} target="_blank" rel="noreferrer">
                  Go {item.name}
                </a>
              </div>
              <div
                className={`mr-2 transition-all opacity-0 ${
                  name === item.name && "opacity-100 delay-500 duration-1000"
                }`}
              >
                <a href={`${item.frontUrl}`} target="_blank" rel="noreferrer">
                  &rarr; Github Front
                </a>
              </div>
              {item.backendUrl && (
                <div
                  className={`mr-2 transition-all opacity-0 ${
                    name === item.name && "opacity-100 delay-500 duration-1000"
                  }`}
                >
                  <a href={`${item.frontUrl}`} target="_blank" rel="noreferrer">
                    &rarr; Github Back
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
