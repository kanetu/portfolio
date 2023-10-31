import Head from "next/head";
import Image from "next/image";
import { HomeIcon, MenuIcon } from "../Icons";
import Link from "next/link";
import imageLoader from "../../utils/imgLoader";

interface IHeader {
  currentRoute: string;
  onClickMenu: () => void;
}
const Header: React.FC<IHeader> = ({ currentRoute, onClickMenu }) => {
  return (
    <>
      <Head>
        <title>Tu Minh Hieu</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://raw.githubusercontent.com/kanetu/portfolio/main/public/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://raw.githubusercontent.com/kanetu/portfolio/main/public/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://raw.githubusercontent.com/kanetu/portfolio/main/public/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://raw.githubusercontent.com/kanetu/portfolio/main/public/favicon/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://raw.githubusercontent.com/kanetu/portfolio/main/public/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://raw.githubusercontent.com/kanetu/portfolio/main/public/favicon/favicon.ico"
        />
      </Head>

      <div>
        <div className="hidden lg:flex lg:items-center lg:pt-[1em] lg:px-[20em] xl:px-[10em] px-[25em] justify-between">
          <div className="flex flex-nowrap">
            <Image
              loader={imageLoader}
              src="avatar.jpg"
              width="50"
              height="50"
              className="rounded mr-2 md:w-[30px] md:h-[30px] xl:w-[50px] xl:h-[50px] 2xl:w-[50px] 2xl:h-[50px]"
              alt="avatar"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-3">Tu Minh Hieu</span>
              <span className="font-light text-2 text-gray">
                Software Engineer
              </span>
            </div>
          </div>
          <ul className="text-[1.25em] font-light flex justify-between md:max-w-[25em]">
            <li
              className={`${
                currentRoute == "/" ? "font-normal" : ""
              } md:mx-[1em] md:my-[1em]`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${
                currentRoute == "/about" ? "font-normal" : ""
              } md:mx-[1em] md:my-[1em]`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`${
                currentRoute == "/works" ? "font-normal" : ""
              } md:mx-[1em] md:my-[1em]`}
            >
              <Link href="/works-and-contact">Works & Contact</Link>
            </li>
            <li
              className={`${
                currentRoute == "/blog" ? "font-normal" : ""
              } md:mx-[1em] md:my-[1em]`}
            >
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex p-[1.5625em] justify-between md:px-[15em] lg:hidden">
          <Link href="/">
            <div className="flex flex-nowrap">
              <Image
                loader={imageLoader}
                src="avatar.jpg"
                width="30"
                height="30"
                className="rounded mr-2 h-[50px] w-[50px] md:w-[30px] md:h-[30px] sm:w-[50px] sm:h-[50px]"
                alt="avatar"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-3">Tu Minh Hieu</span>
                <span className="font-light text-2 text-project-grey">
                  Software Engineer
                </span>
              </div>
            </div>
          </Link>
          <button
            onClick={onClickMenu}
            className="w-[3.125em] h-[3.125em] rounded-full flex items-center justify-center shadow-project"
          >
            <MenuIcon className="w-[1.875em] h-[1.875em]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
