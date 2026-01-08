export default function TimeButton() {
  return (
    <div className="flex gap-[10px]">
      <button className="flex items-center justify-center w-[60px] h-[37px] rounded-[6px] bg-[#F1F3F5] cursor-pointer focus:bg-[#009691] text-[#6B7280] focus:text-white font-medium focus:font-semibold">
        <p>아침</p>
      </button>
      <button className="flex items-center justify-center w-[60px] h-[37px] rounded-[6px] bg-[#F1F3F5] cursor-pointer focus:bg-[#009691] text-[#6B7280] focus:text-white font-medium focus:font-semibold">
        <p>점심</p>
      </button>
      <button className="flex items-center justify-center w-[60px] h-[37px] rounded-[6px] bg-[#F1F3F5] cursor-pointer focus:bg-[#009691] text-[#6B7280] focus:text-white font-medium focus:font-semibold">
        <p>저녁</p>
      </button>
    </div>
  );
}
