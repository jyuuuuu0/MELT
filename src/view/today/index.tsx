import Header from '@/components/header/ui';
import TodayBox from '@/components/today/today';

export default function TodayView() {
  return (
    <div className="w-full min-h-screen bg-[#009691]/5 flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-1">
            <div className="flex items-end gap-[7px] items-center">
              <p className="font-semibold text-[40px]">점심</p>
              <p className="text-sm text-[#9C9C9C] mb-2">745.8kcal</p>
            </div>
            <p className="text-[#9C9C9C]">2026년 1월 1일 목요일</p>
          </div>
          <TodayBox />
        </div>
      </div>
    </div>
  );
}
