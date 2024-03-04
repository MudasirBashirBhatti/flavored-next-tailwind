import Button from "@/components/Button";
import { TbCoffee } from "react-icons/tb";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { SiCoffeescript } from "react-icons/si";
import PriceCard from "@/components/PriceCard";
import { FaAngleLeft } from "react-icons/fa6";
import { RiHomeSmileLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { PiUserLight } from "react-icons/pi";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { CgCoffee } from "react-icons/cg";

export default function Home() {
  return (
    <div className="p-[1em] w-[100%] backdrop-blur-[40px] bg-gradient-to-b from-[white]/30 to-[black]/40 bg-white/30 lg:p-[4em] pb-[0em] md:p-[2em]">
      {/* navigation bar */}
      <nav className="w-[100%] justify-between items-center hidden">
        <div className="text-primary text-[1.4rem] ">
          <div className="flex gap-2 items-center font-bold">
            Flavored <CgCoffee />
          </div>
          <div className="text-[.8rem]">Wake up to something special.</div>
        </div>
        <ul className="flex justify-between items-center w-[500px] list-none text-primary">
          <li>Home</li>
          <li>Coffee Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <button
            className={`px-[.8em] py-[.46em] text-[.9em] bg-primary text-secondry rounded-full`}
          >
            Coffee Shop
          </button>
        </ul>
      </nav>
      {/* double heart coffe (menu) section */}
      <div className="flex flex-col-reverse justify-between  items-center sm:flex-row  lg:mt-[2.4rem]">
        {/* left section  */}
        <div className="text-center sm:text-left">
          <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] lg:mb-[.5em] font-bold text-primary">
            Coffee <br className="hidden sm:block" /> The Best For You
          </div>
          <button
            className={`px-[2.8em] my-[2em] py-[.7em] text-[.9em] bg-primary text-secondry rounded-full btnShadow sm:my-[1.5em]`}
          >
            View Menu
          </button>
          {/*four menu-items icons */}
          <div className="flex gap-3 justify-between items-center my-[1.5em] sm:my-[0em] sm:justify-normal">
            <TbCoffee className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary hover:scale-[1.1] cursor-pointer elmTransition" />
            <SiBuymeacoffee className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary hover:scale-[1.1] cursor-pointer elmTransition" />
            <SiCoffeescript className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary hover:scale-[1.1] cursor-pointer elmTransition" />
            <GiCoffeeBeans className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary hover:scale-[1.1] cursor-pointer elmTransition" />
          </div>
        </div>
        {/* right section */}
        <div>
          <img
            className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] rotatingAnim"
            src="/images/two-hearts.gif"
            alt=""
          />
        </div>
      </div>

      {/* price cards section */}
      <div className="mt-[1em] my-[2em] w-[100%] flex flex-col-reverse justify-between gap-6 items-center sm:my-[4em] sm:flex-col-reverse lg:flex-row">
        <div className="flex flex-col gap-[8rem] flex-[0.5] items-center sm:flex-row sm:gap-6 sm:mb-[0em] sm:mt-[4em]">
          <PriceCard
            img="/images/flower2.gif"
            title="Americano"
            description="100% Natural Arabica or Robusta, 30 ml cup"
            price="$2.50"
          />
          <PriceCard
            img="/images/spawn-image.gif"
            title="Cappuccino"
            description="Healthy Coffee 50%, milk 50%, 280 ml"
            price="$3.50"
          />
        </div>
        <div className="flex-[0.5] mb-[7em] sm:mb-[2em] md:text-center lg:text-left">
          <div className="font-bold text-[1.5rem] text-primary leading-[1.4em] md:text-[1.8rem] lg:text-[2rem]">
            Lorem Ipsum is <br className="hidden sm:block" /> simply dummy text
            of
          </div>
          <div className="leading-[2em] text-[.8rem] py-[1em]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            voluptatem nihil molestiae dignissimos cumque nostrum voluptas?
          </div>
          <Button btnTitle={"Learn More"} />
        </div>
      </div>

      {/* section with text on left and pic on right */}
      <div className="flex flex-col-reverse mb-[2em] sm:justify-between sm:items-center sm:flex-row">
        {/* left div */}
        <div>
          <div className="font-bold text-[1.5rem] text-primary leading-[1.4em] md:text-[1.8rem] lg:text-[2rem]">
            Lorem Ipsum is simply dummy text <br className="hidden sm:block" />{" "}
            of the printing and typesetting <br className="hidden sm:block" />{" "}
            industry.
          </div>
          <div className="leading-[2em] text-[.8rem] py-[1em] tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            <br className="hidden sm:block" /> sequi accusamus expedita iure
            voluptas est veritatis assumenda, <br className="hidden sm:block" />
            tempore delectus atque sit dignissimos ducimus ea culpa dolores
            <br className="hidden sm:block" />
            impedit repellendus! Praesentium, quasi! Blanditiis inventore iusto
          </div>
          <Button btnTitle={"Learn More"} />
        </div>
        {/* right div containing image */}
        <img
          className="w-[200px] block mx-[auto] py-[1em] text-center lg:w-[350px] lg:text-right"
          src="/images/coffee-heart.gif"
          alt=""
        />
      </div>

      {/* available apps section */}
      <div className="flex flex-col my-[0em] items-center gap-[2.5em] lg:my-[4em] sm:flex-wrap sm:flex-row sm:justify-center">
        {/* first container  */}
        <div className=" rounded-[15px] w-[300px] p-[1em] backdrop-blur-[50px] bg-gradient-to-tl from-[white] to-[#ffc0cb1c]">
          <FaAngleLeft className="text-primary" />
          <div className="text-primary font-bold py-[1em] text-[1.3rem]">
            Coffee
          </div>
          <button
            className={`px-[1.3em] py-[.3em] text-[.9em] w-[50%] bg-primary text-secondry rounded-full`}
          >
            View Menu
          </button>
          <div className="flex justify-between items-center my-[1.5em]">
            <TbCoffee className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary hover:scale-[1.1] cursor-pointer elmTransition" />
            <SiBuymeacoffee className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary hover:scale-[1.1] cursor-pointer elmTransition" />
            <SiCoffeescript className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary hover:scale-[1.1] cursor-pointer elmTransition" />
            <GiCoffeeBeans className="w-[40px] h-[40px] p-[6px] bg-secondry rounded-[15px] text-primary hover:scale-[1.1] cursor-pointer elmTransition" />
          </div>
          <div className="flex justify-between items-center mt-[-1em] w-[100%]">
            <div className="scale-[0.5] mx-[-50%] ml-[-64px]">
              <PriceCard
                img="/images/spawn-image.gif"
                title="Cappuccino"
                description="Coffee 50%, milk 50%, 280 ml"
                price="$3.50"
              />
            </div>
            <div className="scale-[0.5] mx-[-50%] mr-[-64px]">
              <PriceCard
                img="/images/spawn-image.gif"
                title="Cappuccino"
                description="Coffee 50%, milk 50%, 280 ml"
                price="$3.50"
              />
            </div>
          </div>
          <div className="text-primary mt-[-1em] mb-[2em] w-[80%] backdrop-blur-[50px] bg-gradient-to-tr from-[#b8b8b814] to-[#ffffff5c] p-[1em] rounded-[15px]">
            <div className="font-bold">Moccaccino</div>
            <div className="text-[12px] pt-2">
              Mix with Coffee 30%, milk 50%, 280 ml + foam
            </div>
          </div>
          {/* coffee card menus */}

          <div className="flex justify-evenly items-center text-secondry bg-primary rounded-[50px] py-[.3em] text-[2rem]">
            <RiHomeSmileLine />
            <BsCart2 />
            <PiUserLight />
            <RiBarChartHorizontalLine className="rotate-180" />
          </div>
        </div>
        {/* second container  */}
        <div className="rounded-[15px] w-[300px] p-[1em] backdrop-blur-[50px] bg-gradient-to-tl from-[white] to-[#ffc0cb1c] flex justify-between flex-col">
          <FaAngleLeft className="text-primary" />

          <img
            className="lg:scale-[1.3] mt-[51px]"
            src="/images/single-heart.gif"
            alt=""
          />

          <div className="text-primary mt-[4em] mb-[.5em]">
            <div className="font-bold">Latte Grand</div>
            <div className="text-[12px] pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </div>

            <div className="font-bold text-[.8rem] py-[1em]">Total Price</div>
            {/* bottom price */}
            <div className="flex items-center w-[112%] lg:w-[122%] justify-between">
              <div className="flex items-center justify-between gap-[20px]">
                <div className="text-[.8rem] font-bold px-[25px] py-[8px] bg-secondry/60 inline-block rounded-[50px]">
                  $3.50
                </div>

                <IoIosHeartEmpty className="w-[30px] h-[30px] p-[6px] bg-primary/15 scale-[1.3] rounded-[10px] text-primary" />
              </div>
              <button className="flex items-center text-secondry justify-between bg-primary py-[10px] pl-[20px] pr-[10px] text-[.8rem] w-[150px] rounded-[50px]">
                Add to Cart{" "}
                <FaPlus className="w-[20px] h-[20px] p-[6px] bg-secondry/20 scale-[1.3] rounded-[10px] text-secondry" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-[3em] self-end md:text-center lg:mb-[6em] md:items-center">
          <div className="font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] text-primary leading-[1.4em]">
            App is Available
          </div>
          <div className="leading-[2em] text-[.8rem] py-[1em]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when and unknown printer took a gallery of
            type and scramble it to make a type specimen book.
          </div>
          <div className="flex items-center gap-[1.6em]">
            <FaApple className="w-[36px] h-[36px] p-[6px] bg-secondry/40 scale-[1.3] rounded-[10px] text-primary" />
            <IoLogoGooglePlaystore className="w-[36px] h-[36px] p-[6px] bg-secondry/40 scale-[1.3] rounded-[10px] text-primary" />
          </div>
        </div>
      </div>

      <div>
        <div className="text-[white] text-[.7rem]">LET'S TALK</div>
        <div className="flex flex-col sm:items-center sm:flex-row sm:justify-between">
          <div className="font-bold pt-[0.5em] pb-[.5em] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] text-primary leading-[1.4em]">
            Want to Reserve a Table?
          </div>
          <button
            className={`px-[2.8em] self-start py-[.7em] text-[.9em] bg-primary text-secondry rounded-full btnShadow sm:self-center`}
          >
            View Menu
          </button>
        </div>
      </div>

      {/* border rule  */}
      <div className="w-[100%] h-[2px] bg-[#ffffff66] mt-[2em] mb-[1em]"></div>

      <div className="w-[100%] lg:w-[70%] text-[.7rem] md:text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nisi
        quas distinctio esse tempore fuga iste magnam autem commodi natus
        quaerat ducimus optio blanditiis culpa aut ut, quia minus. Dolores porro
        excepturi iusto alias doloremque magni soluta volupt Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Iure, accusantium! atum neque
        velit?
      </div>

      {/* footer section */}
      <div className="footer flex pl-[0em] flex-col justify-between mt-[4em] px-[2em]">
        <div className="mb-[1em] text-[white] text-[1.4rem]">
          <div className="flex gap-2 items-center font-bold">
            Flavored <CgCoffee />
          </div>
          <div className="text-[.8rem]">Wake up to something special.</div>
        </div>
        <div className="flex flex-col justify-between sm:flex-row">
          {/* services  */}
          <div>
            <div className="text-[1.4rem] text-primary font-bold">
              Our Services
            </div>
            <ul className="text-primary text-[.8rem]">
              <li>Pricing</li>
              <li>Tracking</li>
              <li>Report a Bug</li>
              <li>Terms of Services</li>
            </ul>
          </div>
          {/* Coumpany  */}
          <div>
            <div className="text-[1.4rem] text-primary font-bold">
              Our Company
            </div>
            <ul className="text-primary text-[.8rem]">
              <li>Pricing</li>
              <li>Tracking</li>
              <li>Report a Bug</li>
              <li>Terms of Services</li>
            </ul>
          </div>
          {/* services  */}
          <div>
            <div className="text-[1.4rem] text-primary font-bold">Address</div>
            <ul className="text-primary text-[.8rem]">
              <li>Pricing</li>
              <li>Tracking</li>
              <li>Report a Bug</li>
              <li>Terms of Services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* footer  */}
      <footer className="py-[2em] text-center text-primary text-s">
        UI developed by <span className="font-bold">Mudasir Web Solutions</span>
      </footer>
      {/* container div ends here */}
    </div>
  );
}
