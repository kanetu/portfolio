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
       z-40 
       top-0 
       left-0 
       left-[${isShowMenu ? "0" : "-100%"}]`}
    >
      <button
        onClick={onClickMenu}
        className="absolute top-[35px] right-[35px] rounded-full"
      >
        <CloseIcon />
      </button>
      <div className="wrapper grid grid-rows-2 grid-flow-col w-[250px] gap-4">
        <Link href="/about" onClick={onClickMenu}>
          <div className="w-[120px] h-[120px] shadow-project flex flex-col justify-center items-center rounded-[8px]">
            <UserIcon className="w-[70px] h-[70px]" />
            <span>About</span>
          </div>
        </Link>
        <div className="w-[120px] h-[120px] shadow-project flex flex-col justify-center items-center rounded-[8px]">
          <BlogIcon className="w-[70px] h-[70px]" />
          <span>Blog</span>
        </div>
        <Link href="/works" onClick={onClickMenu}>
          <div className="w-[120px] h-[120px] shadow-project flex flex-col justify-center items-center rounded-[8px]">
            <WorkIcon className="w-[70px] h-[70px]" />
            <span>Works</span>
          </div>
        </Link>
        <Link href="/contact" onClick={onClickMenu}>
          <div className="w-[120px] h-[120px] shadow-project flex flex-col justify-center items-center rounded-[8px]">
            <MailIcon className="w-[70px] h-[70px]" />
            <span>Contact</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
