export const TimelineStart: React.FC = () => (
  <div className="flex flex-col items-center w-[4px]">
    <div className="rounded-full w-[10px] h-[10px] outline-2 bg-project-black-100 outline outline-project-black-400"></div>
  </div>
);

export const TimelineEnd: React.FC<ITimelineItem> = ({
  companyName,
  period,
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-[-6px] left-[20px] flex flex-col w-full max-w-[300px]">
        <span className="truncate font-bold text-[16px]">{companyName}</span>
        <span className="text-[14px] text-project-black-700">{period}</span>
      </div>
      <div className="flex flex-col items-center w-[4px]">
        <div className="rounded-full w-[10px] h-[10px] bg-project-primary outline outline-2 outline-project-lightPrimary"></div>
        <div className=" w-[4px] h-[80px] bg-project-lightPrimary"></div>
      </div>
    </div>
  );
};

interface ITimelineItem {
  companyName: string;
  period: string;
}
const TimelineItem: React.FC<ITimelineItem> = ({ companyName, period }) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-[-6px] left-[20px] flex flex-col w-full max-w-[300px]">
        <span className="truncate font-bold text-[16px]">{companyName}</span>
        <span className="text-[14px] text-project-black-700">{period}</span>
      </div>
      <div className="flex flex-col items-center w-[4px]">
        <div className="rounded-full w-[10px] h-[10px] bg-project-primary"></div>
        <div className=" w-[4px] h-[80px] bg-project-lightPrimary"></div>
      </div>
    </div>
  );
};

export default TimelineItem;
