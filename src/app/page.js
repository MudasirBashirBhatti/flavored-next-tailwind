import Button from "@/components/Button";
import { TbCoffee } from "react-icons/tb";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { SiCoffeescript } from "react-icons/si";
import PriceCard from "@/components/PriceCard";
export default function Home() {
  return (
    <div className="w-[100%] backdrop-blur-[40px] bg-white/30 p-[4em]">
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
      <div className="my-[4em] w-[100%] flex justify-between gap-6 items-center">
        <div className="flex flex-[0.5] gap-6 items-center">
          <PriceCard
            img="/images/flower2.gif"
            title="Americano"
            description="100% Natural Arabica or Robusta, 30 ml cup"
            price="$2.50"
          />
          <PriceCard
            img="/images/spawn-image.gif"
            title="Cappuccino"
            description="Coffee 50%, milk 50%, 280 ml"
            price="$3.50"
          />
        </div>
        <div className="flex-[0.5]">
          <div className="font-bold text-[2rem] text-primary leading-[1.4em]">
            Lorem Ipsum is <br /> simply dummy text of
          </div>
          <div className="leading-[2em] text-[.8rem] py-[1em]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            voluptatem nihil molestiae dignissimos cumque nostrum voluptas?
          </div>
          <Button btnTitle={"Learn More"} />
        </div>
      </div>

      {/* section with text on left and pic on right */}
      <div className="flex justify-between items-center">
        {/* left div */}
        <div>
          <div className="font-bold text-[2rem] text-primary leading-[1.4em]">
            Lorem Ipsum is simply dummy text <br /> of the printing and
            typesetting <br /> industry.
          </div>
          <div className="leading-[2em] text-[.8rem] py-[1em] tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            <br /> sequi accusamus expedita iure voluptas est veritatis
            assumenda, <br />
            tempore delectus atque sit dignissimos ducimus ea culpa dolores
            <br />
            impedit repellendus! Praesentium, quasi! Blanditiis inventore iusto
          </div>
          <Button btnTitle={"Learn More"} />
        </div>
        {/* right div containing image */}
        <img
          className="w-[350px] text-right"
          src="/images/coffee-heart.gif"
          alt=""
        />
      </div>

      {/* container div ends here */}
    </div>
  );
}
