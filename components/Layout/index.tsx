import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import Menu from "../Menu";
import { useRouter } from "next/router";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const router = useRouter();

  const onClickMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className="dark">
      <Header onClickMenu={onClickMenu} currentRoute={router.pathname} />
      <Menu onClickMenu={onClickMenu} isShowMenu={isShowMenu} />
      <div className="md:flex md:justify-center md:w-full">
        <main
          className="
        px-[1.5625em]
        md:flex
        md:flex-col
        md:mt-[4em]
        md:w-[43.75em]
        "
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
