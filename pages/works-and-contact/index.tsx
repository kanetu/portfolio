import {
  WorkIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
} from "../../components/Icons";
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
    <div>
      <h2 className="text-[1.5em] md:flex md:items-center">
        <span className="hidden md:inline mr-[0.34375em] md:ml-[-5px]">
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
    </div>
  );
};

const Contact = () => {
  const handleSendMail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      subject: { value: string };
      body: { value: string };
    };
    const subject = target.subject.value;
    const body = target.body.value;

    const link = document.createElement("a");
    link.href = `mailto:kanetu731@gmail.com?subject=${subject}&body=${body}`;
    link.click();
  };
  return (
    <div>
      <h2 className="text-[1.5em] md:flex md:items-center">
        <span className="hidden md:inline mr-[0.34375em] md:ml-[-5px]">
          <MailIcon className="w-[2.1875em] h-[2.1875em]" />
        </span>
        <span>Contact</span>
      </h2>
      <p className="text-[1em]">
        Whether you have a question, a project in mind, or just want to say
        hello, I am here to listen. I look forward to hearing from you and
        starting a conversation about how I can help bring your next web project
        to life.
      </p>
      <div className="contact mt-[0.5em] md:hidden">
        <div className="flex mb-[0.625em]">
          <MailIcon className="w-[1.75em] h-[1.75em] mr-[0.5em]" />
          <span>kanetu731@gmail.com</span>
        </div>
        <div className="flex">
          <PhoneIcon className="w-[1.75em] h-[1.75em] mr-[0.5em]" />
          <span>+84-0336-037-389</span>
        </div>
      </div>

      <div className="socials mt-[1.875em]">
        <h4 className="font-bold text-[1em] mb-[0.9375em]">Send message:</h4>
        <form name="emailForm" className="mb-20" onSubmit={handleSendMail}>
          <div className="md:flex md:items-center">
            <fieldset className="flex flex-col md:flex-1 md:mr-[2.625em]">
              <label className="text-[0.9375em] mb-[0.25em]">Your name:</label>
              <input
                type="text"
                name="yourName"
                className="h-[2.1875em] p-2 border rounded-md"
              />
            </fieldset>
            <fieldset className="flex flex-col mt-[0.9375em] md:mt-0 md:flex-1">
              <label className="text-[0.9375em] mb-[0.25em]">Email:</label>
              <input
                type="text"
                name="email"
                className="h-[2.1875em] p-2 border rounded-md"
              />
            </fieldset>
          </div>

          <fieldset className="flex flex-col mt-[0.9375em]">
            <label className="text-[0.9375em] mb-[0.25em]">Subject:</label>
            <input
              type="text"
              name="subject"
              className="h-[2.1875em] p-2 border rounded-md"
            />
          </fieldset>
          <fieldset className="flex flex-col mt-[0.9375em]">
            <label className="text-[0.9375em] mb-[0.25em]">Message:</label>
            <textarea
              name="body"
              cols={30}
              rows={3}
              className=" p-2 border rounded-md"
            ></textarea>
          </fieldset>
          <div className="md:flex md:items-end md:mt-[1em]">
            <div className="contact mt-[0.5em] hidden md:flex-1 md:block">
              <div className="flex mb-[0.625em]">
                <MailIcon className="w-[1.75em] h-[1.75em] mr-[0.5em]" />
                <span>kanetu731@gmail.com</span>
              </div>
              <div className="flex">
                <PhoneIcon className="w-[1.75em] h-[1.75em] mr-[0.5em]" />
                <span>+84-0336-037-389</span>
              </div>
            </div>
            <button
              type="submit"
              className="h-[3.1875em] mt-[1.875em] md:flex-1 w-full border rounded-md flex items-center justify-center my-[0.5em] bg-project-primary-100 text-[white]"
            >
              <SendIcon className="text-[white] w-[1.75em] h-[1.75em]" />
              <span className="text-[white]">Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const WorksAndContact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[5em]">
      <Contact></Contact>
      <Works></Works>
    </div>
  );
};

export default WorksAndContact;
