import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import HomePage from "./components/templates/HomePage";

export default function Home() {
  return (
    <>
      <Header placeholder="Start your search" />
      <HomePage />
      <Footer />
    </>
  );
}
