import { Timeline } from "../../components/Timeline";

const Works = () => {
  const data = [
    {
      id: 4,
      companyName: "Nashtech",
      period: "April 2021 - Feb 2023",
      isEnd: true,
    },
    {
      id: 3,
      companyName: "Evizi",
      period: "April 2021 - Feb 2023",
    },
    {
      id: 2,
      companyName: "Bstar Solutions",
      period: "April 2021 - Feb 2023",
    },
  ];
  return (
    <>
      <h2 className="text-[2em]">Works</h2>
      <h3 className="text-[1.5em]">I&apos;m Hieu</h3>
      <p className="text-[1em]">
        I am Tu Minh Hieu, you could call me Kane, a Frontend engineer. I have
        rich experience in building web applications, especially with ReactJS.
      </p>
      <Timeline data={data} />
    </>
  );
};

export default Works;
