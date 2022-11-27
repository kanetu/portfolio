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
      <main className="px-[25px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
