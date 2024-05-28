"use client";
import i18n from "@/app/_utils/globalization/i18n/i18n";
// -------------------------------------------------Imports----------------------------------------------------
import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

// ------------------------------------------------------------------------------------------------------------
export const RootContext = createContext();
const langFlagData = [
  {
    lang:'en',
    flag:'https://cdn-icons-png.flaticon.com/128/197/197484.png'
  },
  {
    lang:'ja',
    flag:'https://cdn-icons-png.flaticon.com/128/197/197604.png'
  },
  {
    lang:'fr',
    flag:'https://cdn-icons-png.flaticon.com/128/197/197560.png'
  }
]
// ------------------------------------------------------------------------------------------------------------
const RootContextProvider = ({ children }) => {
  
  const userDefaultLang = navigator?.language;
  const initialLangData = {
    lang: userDefaultLang,
    flag: langFlagData?.find((item)=> item?.lang === userDefaultLang)?.flag
  }
  // -------------------------------------------------States----------------------------------------------------
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedNavLink, setSelectedNavLink] = useState("home");
  const [webLang,setWebLang]  = useState(initialLangData);
    console.log(webLang);


  // ----------------------------------------------------------------------------------------------------------
  // -------------------------------------------------Hooks----------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions---------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------
  // -----------------------------------------------useEffect---------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------
  return (
    <RootContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
        selectedNavLink,
        setSelectedNavLink,
        setWebLang,
        webLang,
        langFlagData
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
