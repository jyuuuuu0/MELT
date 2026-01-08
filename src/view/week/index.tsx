import Header from '@/components/header/ui';
import TimeButton from '@/components/week/timebutton';
import WeekBox from '@/components/week/weekbox';

export default function WeekView() {
  return (
    <div className="w-full min-h-screen bg-[#009691]/5 flex flex-col">
      <Header />
      <div className="min-h-[calc(100vh-70px)] flex flex-col items-start justify-center pt-[153px] pb-[327px] px-[292px]">
        <div className="flex flex-col gap-[30px] mb-[60px]">
          <p className="font-semibold text-[40px]">주간 급식</p>
          <TimeButton />
        </div>
        <WeekBox />
      </div>
    </div>
  );
}
