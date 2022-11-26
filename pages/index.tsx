import { MailIcon, PhoneIcon } from "../components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2 className="uppercase text-[32px]">Hello!</h2>
      <h3 className="text-[24px]">I&apos;m Hieu</h3>
      <p className="text-[16px]">
        I am Tu Minh Hieu, you could call me Kane, a Frontend engineer. I have
        rich experience in building web applications, especially with ReactJS.
      </p>
      <div className="contact mt-[60px]">
        <div className="flex">
          <MailIcon className="w-[28px] h-[28px] mr-[8px]" />
          <span>kanetu731@gmail.com</span>
        </div>
        <div className="flex">
          <PhoneIcon className="w-[28px] h-[28px] mr-[8px]" />
          <span>+84-0336-037-389</span>
        </div>
      </div>

      <div className="socials mt-[90px] flex justify-center">
        <a href="https://www.linkedin.com/in/kanetu731/">
          <Image
            src="/linkedin.png"
            width="165"
            height="165"
            className="w-[35px] h-[35px] mr-[20px]"
            objectFit="cover"
            alt="avatar"
          />
        </a>
        <a href="https://github.com/kanetu">
          <Image
            src="/github.png"
            width="165"
            height="165"
            className="w-[35px] h-[35px]"
            objectFit="cover"
            alt="avatar"
          />
        </a>
      </div>
    </>
  );
}
