export const TimelineStart: React.FC = () => (
  <div className="flex flex-col items-center w-[0.25em]">
    <div className="rounded-full w-[0.625em] h-[0.625em] bg-project-black-100 shadow-[0_0_0_0.1875em] shadow-project-black-400"></div>
  </div>
);

export const TimelineEnd: React.FC<ITimelineItem> = ({
  companyName,
  period,
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-[-0.375em] left-[1.25em] flex flex-col w-full max-w-[18.75em]">
        <span className="truncate font-bold text-[1em]">{companyName}</span>
        <span className="text-[0.875em] text-project-black-700 dark:text-white">
          {period}
        </span>
      </div>
      <div className="flex flex-col items-center w-[0.25em]">
        <div className="rounded-full w-[0.625em] h-[0.625em] bg-project-primary-100 shadow-[0_0_0_0.1875em] shadow-project-primary-500"></div>
        <div className=" w-[0.25em] h-[5em] bg-project-primary-500"></div>
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
      <div className="absolute top-[-0.375em] left-[1.25em] flex flex-col w-full max-w-[18.75em]">
        <span className="truncate font-bold text-[1em]">{companyName}</span>
        <span className="text-[0.875em] text-project-black-700 dark:text-white">
          {period}
        </span>
      </div>
      <div className="flex flex-col items-center w-[0.25em]">
        <div className="rounded-full w-[0.625em] h-[0.625em] bg-project-primary-100"></div>
        <div className=" w-[0.25em] h-[5em] bg-project-primary-500"></div>
      </div>
    </div>
  );
};

export default TimelineItem;
