import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";

export default function Home() {
  return (
    <Layout className="">
      <Navbar className=""></Navbar>
      <Body></Body>
      <Footer></Footer>
    </Layout>
  );
}
