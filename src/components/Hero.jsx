import Button from "./Button"
import EcomHeroImg2 from "../assets/EcomHeroImg2.png"
function Hero() {
  return (
    <section className=" mt-[56px] flex justify-around w-[97%] pb-5 sm:pb-0">
        <div className="flex flex-col w-full justify-center sm:w-[50%] gap-7 pt-5 sm:pt-0">
            <div className="flex flex-col justify-between gap-3">
                <h1 className="text-heading-bold-black text-[4.3rem] sm:text-[5rem] font-extrabold leading-none sm:leading-tight text-center sm:text-left z-10 tracking-tight">Find Cloths That Matches Your Style</h1>
                <p className="text-paragraph-primary">Browse through our diverse range of miticulously craftede garments, designed to bring out your indidviduality and cated to your sense of style.</p>
                <Button className="rounded-[50px] bg-button-black text-slate-100 p-[15px] sm:w-[180px] ">Shop Now</Button>
            </div>
            <div>
                <p className="text-gray-700 font-semibold text-3xl text-center sm:text-left">200+ Brands | 2000+ Products</p>
            </div>
        </div>
        <div className="hidden sm:block md:w-[30%]">
          <img src={EcomHeroImg2} alt="" className="z-0 h-[100%] w-[90%] "/>
        </div>
    </section>
  )
}
export default Hero
