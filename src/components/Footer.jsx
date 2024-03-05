import React from "react";
import { CgCoffee } from "react-icons/cg";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* border rule  */}
      <div className="w-[100%] h-[2px] bg-[#ffffff66] mt-[2em] mb-[1em]"></div>

      <div className="w-[100%] lg:w-[70%] text-[.7rem] md:text-center lg:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nisi
        quas distinctio esse tempore fuga iste magnam autem commodi natus
        quaerat ducimus optio blanditiis culpa aut ut, quia minus. Dolores porro
        excepturi iusto alias doloremque magni soluta volupt Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Iure, accusantium! atum neque
        velit?
      </div>

      {/* footer section */}
      <div className="footer flex pl-[0em] flex-col justify-between mt-[4em] px-[2em] lg:flex-row lg:pl-[2em]">
        <div className="mb-[1em] text-[white] text-[1.4rem]">
          <div className="flex gap-2 items-center font-bold">
            Flavored <CgCoffee />
          </div>
          <div className="text-[.8rem]">Wake up to something special.</div>
        </div>
        <div className="flex flex-col justify-between sm:flex-row lg:w-[70%] lg:items-center">
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
      <footer className="py-[2em] text-center text-primary">
        UI developed by{" "}
        <span className="font-bold">
          <Link
            href="https://www.linkedin.com/in/mudasir-bashir-43b4651b3"
            target="_blank"
          >
            Mudasir Web Solutions
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
