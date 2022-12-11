import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import Menu from "../Menu";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const onClickMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <>
      <Header onClickMenu={onClickMenu} />
      <Menu onClickMenu={onClickMenu} isShowMenu={isShowMenu} />
      <main
        className="
        px-[1.5625em]
        md:flex
        md:flex-col
        md:mt-[3em]
        md:ml-[15em]
        md:mr-[15em]
        "
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
