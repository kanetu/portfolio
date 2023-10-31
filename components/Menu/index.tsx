import Link from "next/link";
import { BlogIcon, CloseIcon, MailIcon, UserIcon, WorkIcon } from "../Icons";

interface IMenu {
  isShowMenu: boolean;
  onClickMenu: () => void;
}
const Menu: React.FC<IMenu> = ({ isShowMenu, onClickMenu }) => {
  return (
    <div
      className={`w-full
       h-screen flex
       transition-all
       duration-700   
       items-center 
       justify-center 
       fixed 
       bg-project-bgMenu
       dark:bg-project-black-100
       z-40 
       top-0 
       left-[${isShowMenu ? "0" : "-100%"}]`}
    >
      <button
        onClick={onClickMenu}
        className="absolute top-[2.1875em] right-[2.1875em] rounded-full"
      >
        <CloseIcon />
      </button>
      <div className="wrapper grid grid-rows-2 grid-flow-col w-[15.625em] gap-4">
        <Link href="/about" onClick={onClickMenu}>
          <div className="w-[7.5em] h-[7.5em] shadow-project flex flex-col justify-center items-center rounded-[0.5em]">
            <UserIcon className="w-[4.375em] h-[4.375em]" />
            <span>About</span>
          </div>
        </Link>
        <Link href="/blog" onClick={onClickMenu}>
          <div className="w-[7.5em] h-[7.5em] shadow-project flex flex-col justify-center items-center rounded-[0.5em]">
            <BlogIcon className="w-[4.375em] h-[4.375em]" />
            <span>Blog</span>
          </div>
        </Link>
        <Link href="/works" onClick={onClickMenu}>
          <div className="w-[7.5em] h-[7.5em] shadow-project flex flex-col justify-center items-center rounded-[0.5em]">
            <WorkIcon className="w-[4.375em] h-[4.375em]" />
            <span>Works</span>
          </div>
        </Link>
        <Link href="/contact" onClick={onClickMenu}>
          <div className="w-[7.5em] h-[7.5em] shadow-project flex flex-col justify-center items-center rounded-[0.5em]">
            <MailIcon className="w-[4.375em] h-[4.375em]" />
            <span>Contact</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
