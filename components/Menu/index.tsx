import Link from "next/link";
import { BlogIcon, HomeIcon, CloseIcon, UserIcon, WorkIcon } from "../Icons";

interface IMenu {
  isShowMenu: boolean;
  onClickMenu: () => void;
}

type MenuItemProps = {
  onClickMenu: () => void;
  icon: React.ElementType;
  label: string;
  link: string;
};
const MenuItem: React.FC<MenuItemProps> = ({
  onClickMenu,
  label,
  link,
  icon: Icon,
}) => {
  return (
    <Link href={link} onClick={onClickMenu}>
      <div className="w-[8.5em] h-[8.5em] md:w-[10.5em] md:h-[10.5em] shadow-project flex flex-col justify-center items-center rounded-[0.5em]">
        <Icon className="w-[4.375em] h-[4.375em]" />
        <span>{label}</span>
      </div>
    </Link>
  );
};

const Menu: React.FC<IMenu> = ({ isShowMenu, onClickMenu }) => {
  const listMenu = [
    {
      link: "/",
      onClickMenu: onClickMenu,
      label: "Home",
      icon: HomeIcon,
    },
    {
      link: "/about",
      onClickMenu: onClickMenu,
      label: "About",
      icon: UserIcon,
    },
    {
      link: "/works-and-contact",
      onClickMenu: onClickMenu,
      label: "Works & Contact",
      icon: WorkIcon,
    },
    {
      link: "/blog",
      onClickMenu: onClickMenu,
      label: "Blog",
      icon: BlogIcon,
    },
  ];
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
        {listMenu.map((item) => (
          <MenuItem key={item.link} {...item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default Menu;
