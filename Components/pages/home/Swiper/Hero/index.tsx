import MainImage from "@/Components/shared/MainImage";

const Hero = () => {
  return (
    <section className="py-8 flex items-center">
      <div className="flex flex-col items-start w-[70%] gap-3">
        <h4>Welcome to GreenShop</h4>

        <h1 className="font-bold text-8xl">
          Let’s Make a <br />
          Better <span className="text-[#46A358]">Planet</span>
        </h1>

        <h5>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use <br /> our plants to create an unique Urban Jungle. Order
          your favorite plants!
        </h5>

        <button className=" bg-[#46A358] gap-2 text-white py-3 px-4 rounded-lg">
          SHOP NOW
        </button>
      </div>

      <div className="relative flex items-end">
        <MainImage src={"/images/HeaderImages/big.svg"} />

        <MainImage
          className="absolute bottom-[30px] left-50px max-w-[160px]"
          src={"/images/HeaderImages/small.svg"}
        />
      </div>
    </section>
  );
};

export default Hero;
