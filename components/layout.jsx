import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
