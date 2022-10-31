import { useEffect, useState } from "react";

interface IProps {
  start: boolean;
}

export default function Interview({ start }: IProps) {
  const [fadein, setFadein] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFadein(start);
    }, 200);
  }, [start]);
  return (
    <span className="interview rounded-sm shadow-xl transition-all select-none flex items-center bg-slate-300 p-3 bg-opacity-30 w-7/12 h-72 sm:h-60 md:h-52 lg:h-44 xl:h-36 absolute mt-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:rotate-3 after:scale-95 after:bg-slate-300 after:w-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-z-10 after:opacity-40 after:rounded-sm after:h-72 after:sm:h-60 after:md:h-52 after:lg:h-44 after:xl:h-36 before:rotate-6 before:scale-90 before:bg-slate-300 before:w-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:opacity-40 before:rounded-sm before:h-72 before:sm:h-60 before:md:h-52 before:lg:h-44 before:xl:h-36">
      <h3
        className={`text-gray-600 text-start transition-all ${
          fadein && "fadein"
        }`}
      >
        학부시절부터 여러가지 경험을 해보았지만 당시에는 흥미를 느끼지 못하고
        해야하니까 했었었는데, 혼자서 공부를 더 해보고 느껴보니 결과물이 눈에 확
        띄는 Web을 만들거나 App을 만들어 보는거에 가장 흥미를 느끼게 되어
        FullStack 개발자로서 성장해 나가는중 입니다. 대학생 이후로는 팀으로
        개발을 하지 않아 취업 후 더 큰 프로젝트에 참여할 수 있다는 생각에 벌써
        설렙니다.
      </h3>
    </span>
  );
}
