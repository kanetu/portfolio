import { useEffect } from "react";
import { MailIcon, PhoneIcon, SendIcon } from "../../components/Icons";

const Contact: React.FC = () => {
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
    <>
      <h2 className="text-[2em] md:flex md:items-center">
        <span className="hidden md:inline mr-[0.34375em]">
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
    </>
  );
};

export default Contact;
