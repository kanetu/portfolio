import Image from "next/image";
import { MailIcon, PhoneIcon, SendIcon } from "../../components/Icons";

const Contact: React.FC = () => {
  return (
    <>
      <h2 className="text-[32px]">Contact</h2>
      <div className="contact mt-[8px]">
        <div className="flex mb-[10px]">
          <MailIcon className="w-[28px] h-[28px] mr-[8px]" />
          <span>kanetu731@gmail.com</span>
        </div>
        <div className="flex">
          <PhoneIcon className="w-[28px] h-[28px] mr-[8px]" />
          <span>+84-0336-037-389</span>
        </div>
      </div>

      <div className="socials mt-[30px]">
        <h4 className="font-bold text-[16px] mb-[15px]">Send message:</h4>
        <form
          action="mailto:kanetu@gmail.com"
          method="POST"
          name="emailForm"
          className="mb-20"
        >
          <fieldset className="flex flex-col">
            <label className="text-[15px] mb-[4px]">Your name:</label>
            <input
              type="text"
              name="yourName"
              className="h-[35px] p-2 border rounded-md"
            />
          </fieldset>
          <fieldset className="flex flex-col mt-[15px]">
            <label className="text-[15px] mb-[4px]">Email:</label>
            <input
              type="text"
              name="email"
              className="h-[35px] p-2 border rounded-md"
            />
          </fieldset>
          <fieldset className="flex flex-col mt-[15px]">
            <label className="text-[15px] mb-[4px]">Subject:</label>
            <input
              type="text"
              name="subject"
              className="h-[35px] p-2 border rounded-md"
            />
          </fieldset>
          <fieldset className="flex flex-col mt-[15px]">
            <label className="text-[15px] mb-[4px]">Message:</label>
            <textarea
              name="message"
              cols={30}
              rows={3}
              className=" p-2 border rounded-md"
            ></textarea>
          </fieldset>

          <button
            type="submit"
            className="h-[35px] mt-[30px] w-full border rounded-md flex items-center justify-center my-[8px] bg-project-primary-100 text-[white]"
          >
            <SendIcon className="text-[white] w-[28px] h-[28px]" />
            <span className="text-[white]">Send</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
