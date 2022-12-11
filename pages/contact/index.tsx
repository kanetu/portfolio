import { MailIcon, PhoneIcon, SendIcon } from "../../components/Icons";

const Contact: React.FC = () => {
  return (
    <>
      <h2 className="text-[2em]">Contact</h2>
      <div className="contact mt-[0.5em]">
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
        <form
          action="mailto:kanetu@gmail.com"
          method="POST"
          name="emailForm"
          className="mb-20"
        >
          <fieldset className="flex flex-col">
            <label className="text-[0.9375em] mb-[0.25em]">Your name:</label>
            <input
              type="text"
              name="yourName"
              className="h-[2.1875em] p-2 border rounded-md"
            />
          </fieldset>
          <fieldset className="flex flex-col mt-[0.9375em]">
            <label className="text-[0.9375em] mb-[0.25em]">Email:</label>
            <input
              type="text"
              name="email"
              className="h-[2.1875em] p-2 border rounded-md"
            />
          </fieldset>
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
              name="message"
              cols={30}
              rows={3}
              className=" p-2 border rounded-md"
            ></textarea>
          </fieldset>

          <button
            type="submit"
            className="h-[2.1875em] mt-[1.875em] w-full border rounded-md flex items-center justify-center my-[0.5em] bg-project-primary-100 text-[white]"
          >
            <SendIcon className="text-[white] w-[1.75em] h-[1.75em]" />
            <span className="text-[white]">Send</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
