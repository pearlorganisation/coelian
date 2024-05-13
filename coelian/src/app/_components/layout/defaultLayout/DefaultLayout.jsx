"use client";
// --------------------------------------------------Imports------------------------------------------------
import { useContext, useEffect, useRef } from "react";
import AboutUs from "../../aboutUs/AboutUs";
import Home from "../../home/Home";
import Individuals from "../../individuals/Individuals";
import Corporate from "../../corporate/Corporate";
import ContactUs from "../../contactUs/ContactUs";
import Blogs from "../../blogs/Blogs";
import { RootContext } from "@/app/_contexts/RootContext/RootContextProvider";

// -----------------------------------------------------------------------------------------------------------

export default function DefaultLayout({ params, children }) {
  // -----------------------------------------------States------------------------------------------------

  // ---------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks------------------------------------------------
  const homeRef = useRef();
  const aboutUsRef = useRef();
  const individualsRef = useRef();
  const corporateRef = useRef();
  const blogsRef = useRef();
  const contactUsRef = useRef();

  const navCompArray = [
    homeRef,
    aboutUsRef,
    individualsRef,
    corporateRef,
    blogsRef,
    contactUsRef,
  ];

  const navObj = {
    home: 0,
    aboutUs: 1,
    individuals: 2,
    corporate: 3,
    blogs: 4,
    contactUs: 5,
  };

  const { setSelectedIndex, selectedNavLink } = useContext(RootContext);

  // ---------------------------------------------------------------------------------------------------------
  // ----------------------------------------------Functions------------------------------------------------

  const viewScroller = (elementRef) => {
    return elementRef?.current?.reference?.scrollIntoView({behavior:"smooth"});
  };

  const navLinkSelectorObj = {
    home: () => {
      viewScroller(homeRef);
    },
    aboutUs: () => {
      viewScroller(aboutUsRef);
    },
    individuals: () => {
      viewScroller(individualsRef);
    },
    corporate: () => {
      viewScroller(corporateRef);
    },
    blogs: () => {
      viewScroller(blogsRef);
    },
    contactUs: () => {
      viewScroller(contactUsRef);
    },
  };
  // ---------------------------------------------------------------------------------------------------------
  // ----------------------------------------------useEffects------------------------------------------------

  useEffect(() => {
    (navLinkSelectorObj?.[selectedNavLink])();
  }, [selectedNavLink]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedIndex(navObj[entry.target.classList[0]]);
          }
        });
      },
      { threshold: 0.5 }
    );

    // observer.observe(homeRef.current.homeReference);
    navCompArray.forEach((navComp) => {
      observer.observe(navComp?.current?.reference);
    });
  }, []);

  // ---------------------------------------------------------------------------------------------------------

  // ---------------------------------------------------------------------------------------------------------
  return (
    <>
      <Home ref={homeRef} />
      <AboutUs ref={aboutUsRef} />
      <Individuals ref={individualsRef} />
      <Corporate ref={corporateRef} />
      <Blogs ref={blogsRef} />
      <ContactUs ref={contactUsRef} />
      {/* <main>{children}</main> */}
    </>
  );
}
