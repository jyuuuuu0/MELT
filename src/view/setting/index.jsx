import Header from '@/components/header/ui';
import SchoolInput from '@/components/setting/schoolinput';

export default function SettingView() {
  return (
    <div className="w-full min-h-screen bg-[#009691]/5 flex flex-col">
      <Header />
      <div className="min-h-[calc(100vh-70px)] flex flex-col items-start pt-45 px-[605px]">
        <p className="font-semibold text-[40px] mb-[20px]">학교 설정</p>
        <p className="text-[20px] text-[#9C9C9C] mb-15">학교를 검색하고 선택해주세요</p>
        <SchoolInput />
      </div>
    </div>
  );
}
