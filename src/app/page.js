import Button from "@/components/Button";
import { TbCoffee } from "react-icons/tb";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { SiCoffeescript } from "react-icons/si";
import PriceCard from "@/components/PriceCard";
export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] backdrop-blur-[60px] bg-white/30 p-[4em]">
      {/* navigation bar */}
      <nav className="w-[100%] flex justify-between items-center">
        <div className="text-primary font-bold text-xl">Flavored</div>
        <ul className="flex justify-between items-center w-[500px] list-none text-primary">
          <li>Home</li>
          <li>Coffee Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <button
            className={`px-[.8em] py-[.3em] text-[.9em] bg-primary text-secondry rounded-full`}
          >
            Coffee Shop
          </button>
        </ul>
      </nav>
      {/* double heart coffe (menu) section */}
      <div className="flex justify-between items-center mt-[2.4rem]">
        {/* left section  */}
        <div className="">
          <div className="text-[3rem] mb-[.5em] font-bold text-primary">
            Coffee <br /> The Best For You
          </div>
          <button
            className={`px-[2.8em] py-[.7em] text-[.9em] bg-primary text-secondry rounded-full btnShadow`}
          >
            View Menu
          </button>
          {/*four menu-items icons */}
          <div className="flex gap-3 items-center my-[1.5em]">
            <TbCoffee className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary" />
            <SiBuymeacoffee className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary" />
            <SiCoffeescript className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary" />
            <GiCoffeeBeans className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary" />
          </div>
        </div>
        {/* right section */}
        <div>
          <img className="w-[400px]" src="/images/two-hearts.gif" alt="" />
        </div>
      </div>

      {/* price cards section  */}
      <PriceCard />

      {/* container div ends here */}
    </div>
  );
}
