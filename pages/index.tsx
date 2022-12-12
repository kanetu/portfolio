import { MailIcon, PhoneIcon } from "../components/Icons";
import Image from "next/image";
import imageLoader from "../utils/imgLoader";

export default function Home() {
  return (
    <>
      <div className="whitelist left-[0] left-[-100%] hidden"></div>
      <h2 className="uppercase text-[2em] md:text-[2.5em]">Hello!</h2>
      <h3 className="text-[1.5em] md:text-[1.5em]">I&apos;m Hieu</h3>
      <p className="text-[1em] md:text-[1.25em]">
        I am Tu Minh Hieu, you could call me Kane, a Frontend engineer. I have
        rich experience in building web applications, especially with ReactJS.
      </p>

      <div className="contact__wapper md:flex md:mt-[3.75em] md:items-center md:justify-between max-w-[77em]">
        <div className="contact mt-[3.75em] md:mt-0">
          <div className="flex mb-[0.625em] md:text-[1.25em]">
            <MailIcon className="w-[1.75em] h-[1.75em] mr-[0.5em]" />
            <span>kanetu731@gmail.com</span>
          </div>
          <div className="flex md:text-[1.25em]">
            <PhoneIcon className="w-[1.75em] h-[1.75em] mr-[0.5em]" />
            <span>+84-0336-037-389</span>
          </div>
        </div>

        <div className="socials mt-[5.625em] md:mt-0 flex justify-center ">
          <a href="https://www.linkedin.com/in/kanetu731/">
            <Image
              loader={imageLoader}
              src="linkedin.png"
              width="165"
              height="165"
              className="w-[2.1875em] h-[2.1875em] mr-[1.25em]"
              objectFit="cover"
              alt="avatar"
            />
          </a>
          <a href="https://github.com/kanetu">
            <Image
              loader={imageLoader}
              src="github.png"
              width="165"
              height="165"
              className="w-[2.1875em] h-[2.1875em]"
              objectFit="cover"
              alt="avatar"
            />
          </a>
        </div>
      </div>
    </>
  );
}
