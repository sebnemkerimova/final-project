import Contact from "@/Components/Footer/Contact";
import Footer from "@@/Footer";
import FindFlowers from "@@/FindFlowers";
import FlowerCare from "@@/Footer/FlowerCare";
import Header from "@@/layout/Header";
import Hero from "@@/pages/home/Hero";
import Main from "@@/pages/home/Main";
import Swiper from "@@/pages/home/Swiper";
import Posts from "@@/Posts";
import FooterEnd from "@/Components/Footer/FooterEnd";

export default function Home() {
  return (
    // <h1 className="text-5xl font-bold underline text-center text-green-main">
    //   Lorem ipsum dolor sit.
    // </h1>
    <>
      <Swiper />
      <Main />
      <FindFlowers />
      <Posts />
      <FlowerCare />
      <Contact />
      <FooterEnd />
      {/* <Footer /> */}
    </>
  );
}
