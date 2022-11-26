import Header from "../Header";
import Footer from "../Footer";

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
