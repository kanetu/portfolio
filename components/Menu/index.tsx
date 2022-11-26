import { BlogIcon, CloseIcon, MailIcon, UserIcon, WorkIcon } from "../Icons";

const Menu: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center absolute bg-project-bgMenu z-40 top-0 left-0">
      <button className="absolute top-[35px] right-[35px] rounded-full">
        <CloseIcon />
      </button>
      <div className="wrapper grid grid-rows-2 grid-flow-col w-[250px] gap-4">
        <div className="w-[120px] h-[120px] shadow-project flex flex-col justify-center items-center rounded-[8px]">
          <UserIcon className="w-[70px] h-[70px]" />
          <span>About</span>
        </div>
        <div className="w-[120px] h-[120px] shadow-project flex flex-col justify-center items-center rounded-[8px]">
          <BlogIcon className="w-[70px] h-[70px]" />
          <span>Blog</span>
        </div>
        <div className="w-[120px] h-[120px] shadow-project flex flex-col justify-center items-center rounded-[8px]">
          <WorkIcon className="w-[70px] h-[70px]" />
          <span>Works</span>
        </div>
        <div className="w-[120px] h-[120px] shadow-project flex flex-col justify-center items-center rounded-[8px]">
          <MailIcon className="w-[70px] h-[70px]" />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
