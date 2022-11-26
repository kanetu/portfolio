import Header from "../header";
import Footer from "../footer";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-[25px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
