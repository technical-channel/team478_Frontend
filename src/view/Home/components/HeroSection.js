import { Button } from "../../../components/Button/Primary";

export const HeroSection = () => {
  return (
    <div>
      <section className="hero-sec bg-hero-img bg-no-repeat bg-cover w-full mx-auto py-[2rem] px-[40px] cover ">
        <div className="max-w-[1500px] w-full mx-auto">
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <div className="flex-1 ">
              <div className=" max-w-[500px] w-full">
                <h1 className="text-black font-bold text-4xl leading-[3rem]">
                  Create, Sell & <br />
                  Collect Your Own <br /> Creative NFT
                </h1>
                <p className="text-violet pt-2 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit.
                </p>
              </div>

              <div className="flex gap-5  pt-5  ">
                <Button title={"explore now "} />
                <Button title={"create NFT"} />
              </div>
              <div className="flex flex-row md:gap-[70px] gap-[40px] pt-5 mt-5 justify-center items-center md:justify-start md:items-start ">
                <div className="">
                  <h4 className="text-black font-bold text-xl  ">37k+</h4>
                  <p className="capitalize text-lightgrey text-lg">artworks</p>
                </div>
                <div className="">
                  <h4 className="text-black font-bold text-xl ">20k+</h4>
                  <p className="capitalize text-lightgrey  text-lg">artists</p>
                </div>
                <div className="">
                  <h4 className="text-black font-bold text-xl  ">99k+</h4>
                  <p className="capitalize text-lightgrey  text-lg">auctions</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={process.env.PUBLIC_URL + "./assets/heroimage.png"}
                alt=""
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
