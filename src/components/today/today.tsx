export default function TodayBox() {
  return (
    <div
      className="flex flex-col items-start justify-center w-full max-w-[397px]
 pl-5 pr-40 py-6 lg:pl-[31px] sm:pr-10 lg:pr-[220px] lg:py-[40px]
 bg-white border border-[#9C9C9C] rounded-2xl gap-4 lg:gap-5"
    >
      <div className="flex items-center gap-5">
        <div className="w-2 h-2 rounded-full bg-[#009691]" />
        <p className="text-sm md:text-base">친환경쌀밥</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-2 h-2 rounded-full bg-[#009691]" />
        <p className="text-sm md:text-base">열무된장국</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-2 h-2 rounded-full bg-[#009691]" />
        <p className="text-sm md:text-base">시금치유부무침</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-2 h-2 rounded-full bg-[#009691]" />
        <p className="text-sm md:text-base">돼지갈비구이</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-2 h-2 rounded-full bg-[#009691]" />
        <p className="text-sm md:text-base">군고구마</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-2 h-2 rounded-full bg-[#009691]" />
        <p className="text-sm md:text-base">깍두기</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-2 h-2 rounded-full bg-[#009691]" />
        <p className="text-sm md:text-base">흰우유</p>
      </div>
    </div>
  );
}
