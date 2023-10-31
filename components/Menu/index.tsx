import Link from "next/link";
import { BlogIcon, CloseIcon, UserIcon, WorkIcon } from "../Icons";

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
      <div className="wrapper mt-[2em] grid grid-cols-2 w-[20em] md:w-[25em] gap-[2em] md:gap-[4em]">
        <Link href="/about" onClick={onClickMenu}>
          <div className="w-[8.5em] h-[8.5em] md:w-[10.5em] md:h-[10.5em] shadow-project flex flex-col justify-center items-center rounded-[0.5em]">
            <UserIcon className="w-[4.375em] h-[4.375em]" />
            <span>About</span>
          </div>
        </Link>
        <Link href="/blog" onClick={onClickMenu}>
          <div className="w-[8.5em] h-[8.5em] md:w-[10.5em] md:h-[10.5em] shadow-project flex flex-col justify-center items-center rounded-[0.5em]">
            <BlogIcon className="w-[4.375em] h-[4.375em]" />
            <span>Blog</span>
          </div>
        </Link>
        <Link href="/works-and-contact" onClick={onClickMenu}>
          <div className="w-[8.5em] h-[9.5em] md:w-[10.5em] md:h-[10.5em] shadow-project flex flex-col justify-center items-center rounded-[0.5em]">
            <WorkIcon className="w-[4.375em] h-[4.375em]" />
            <span>Works  & Contact</span>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default Menu;
