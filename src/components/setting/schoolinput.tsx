import Search from '@/asset/icon/search';

export default function SchoolInput() {
  return (
    <div className="flex items-center justify-center gap-[20px]">
      <input
        type="text"
        placeholder="학교 이름을 검색하세요"
        className="w-150 h-[50px] bg-white rounded-[8px] p-4 placeholder:text-[#9C9C9C] border border-[#E3E3E3] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] focus:outline-none"
      />
      <button className="w-[87px] h-[50px] rounded-[8px] bg-[#009691] p-4 flex items-center justify-center  gap-2">
        <Search />
        <span className="font-medium text-white">검색</span>
      </button>
    </div>
  );
}
