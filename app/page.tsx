import FindFlowers from "@/Components/pages/home/FindFlowers";
import Main from "@@/pages/home/Main";
import Swiper from "@@/pages/home/Swiper";
import Posts from "@/Components/pages/home/Posts";

export default function Home() {
  return (
    <>
      <Swiper />
      <Main />
      <FindFlowers />
      <Posts />
    </>
  );
}
