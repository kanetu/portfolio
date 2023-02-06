import { WorkIcon } from "../../components/Icons";
import { Timeline } from "../../components/Timeline";

const Works = () => {
  const data = [
    {
      id: 4,
      companyName: "Nashtech",
      period: "Apr 2021 - Present",
      isEnd: true,
    },
    {
      id: 3,
      companyName: "Evizi",
      period: "Jul 2020 - Mar 2021",
    },
    {
      id: 2,
      companyName: "Bstar Solutions",
      period: "Jun 2019 - Jun 2020",
    },
  ];
  return (
    <>
      <h2 className="text-[2em] md:flex md:items-center">
        <span className="hidden md:inline mr-[0.34375em]">
          <WorkIcon className="w-[2.1875em] h-[2.1875em]" />
        </span>
        <span>Works</span>
      </h2>
      <p className="text-[1em]">
        This is my professional timeline and highlight my collaborations with a
        range of companies. This page serves as a visual representation of my
        journey as a Front-End Engineer and a testament to my versatility,
        experience, and expertise in delivering innovative and effective web
        solutions.
      </p>
      <Timeline data={data} />
    </>
  );
};

export default Works;
