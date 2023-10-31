import TimelineItem, { TimelineEnd, TimelineStart } from "../TimelineItem";

interface ITimeline {
  data: {
    id: number;
    companyName: string;
    period: string;
    isEnd?: boolean;
  }[];
}
export const Timeline: React.FC<ITimeline> = ({ data }) => {
  const renderTimelineItems = () =>
    data &&
    data.map((t) => {
      if (t.isEnd) {
        return (
          <TimelineEnd
            key={t.id}
            companyName={t.companyName}
            period={t.period}
          />
        );
      }
      return (
        <TimelineItem
          key={t.id}
          companyName={t.companyName}
          period={t.period}
        />
      );
    });

  return (
    <div className="mb-20">
      <h3 className="text-[1.25em] mt-[1.625em] mb-[0.625em]">Timeline</h3>
      <div className="flex flex-col items-start ml-[0.3125em]">
        {renderTimelineItems()}
        <TimelineStart />
      </div>
    </div>
  );
};
