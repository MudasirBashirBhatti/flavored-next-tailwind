"use client";
import { useState } from "react";

const page = () => {
  const [imageHeight, setimageHeight] = useState("300px");
  const [toggleImage, settoggleImage] = useState(false);
  function imageShow() {
    settoggleImage(!toggleImage);
    toggleImage ? setimageHeight("100%") : setimageHeight("300px");
  }
  return (
    <div className="relative px-[16px]">
      <div>
        <div className="font-bold text-primary text-[1.3rem]">Project Name</div>
        <div className="text-primary text-[.9rem] mb-[1.5em]">Flavored App</div>
      </div>
      <div>
        <div className="font-bold text-primary text-[1.3rem]">
          Web Technologies
        </div>
        <ul className="text-primary text-[.9rem] mb-[1.5em]">
          <li>Next.js</li>
          <li>Tailwind CSS (For Styling)</li>
          <li>Redux Toolkit (For State Management)</li>
        </ul>
      </div>

      <div>
        <div className="font-bold text-primary text-[1.3rem]">
          Project berief Introduction:
        </div>
        <div className="text-primary text-[.9rem] mb-[1.5em]">
          Flavored is a portfolio web project built using Next.js, Tailwind CSS,
          and Redux Toolkit for state management.
          <div className="font-bold text-primary text-[1.2rem]">
            Key Features
          </div>
          <div className="font-bold text-primary text-[1.1rem]">Next.js</div>
          Next.js is utilized as the framework for building the web application.
          It offers server-side rendering, static site generation, and routing
          capabilities, making the website fast, SEO-friendly, and highly
          scalable.
          <div className="font-bold text-primary text-[1.1rem]">
            Tailwind CSS
          </div>
          Tailwind CSS is chosen as the primary CSS framework for styling the
          components. Tailwind CSS provides a utility-first approach, allowing
          for rapid development and customization of styles without writing
          custom CSS. This results in a clean and maintainable codebase.
          <div className="font-bold text-primary text-[1.1rem]">
            Redux Toolkit
          </div>
          Redux Toolkit is used for state management within the application. It
          provides a simple and efficient way to manage the application state,
          allowing for predictable and scalable state management across
          components. Redux Toolkit simplifies common Redux tasks such as
          creating actions, reducers, and middleware.
          <div className="font-bold text-primary text-[1.1rem]">
            Design Inspiration From Pinterest
          </div>
          The design inspiration for Flavored is sourced from Pinterest,
          leveraging the vast collection of design ideas and inspiration
          available on the platform. The design elements are carefully curated
          to create a visually appealing and engaging user experience.
          <div className="font-bold text-primary text-[1.1rem]">
            Interactive User Infterface
          </div>
          Interactive User Interface: The website features an interactive user
          interface with smooth transitions, animations, and dynamic content
          loading. Users can navigate through different sections of the
          portfolio seamlessly, enhancing the overall user experience.
          <div className="font-bold text-primary text-[1.1rem]">
            Responsive Design
          </div>
          Flavored is designed to be responsive across various devices and
          screen sizes. The layout and components adjust dynamically to provide
          an optimal viewing experience on desktops, laptops, tablets, and
          mobile devices.
          <div className="font-bold text-primary text-[1.1rem]">
            Portfolio Showcase
          </div>
          The main focus of Flavored is to showcase the portfolio, highlighting
          projects, skills, achievements, and experiences. The portfolio section
          is carefully crafted to provide detailed insights into my work and
          expertise.
        </div>
      </div>

      <div className="relative">
        <div
          className={`h-[${imageHeight}] w-[100%] md:w-[70%] lg:w-[50%] mx-[auto] overflow-hidden rounded-lg transition-all cursor-pointer`}
        >
          <img src="/images/coffee.png" alt="" onClick={() => imageShow()} />
          {/* <div
            className={`px-[2.8em] my-[2em] py-[.7em] text-[.9em] bg-primary text-secondry mx-[auto] flex rounded-full btnShadow sm:my-[1.5em]`}
          >
            <a
              className="inline-block"
              href="/images/coffee.png"
              download={true}
            >
              Download Image
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
