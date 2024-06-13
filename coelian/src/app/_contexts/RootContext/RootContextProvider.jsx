"use client";

// -------------------------------------------------Imports----------------------------------------------------
import { createContext, useState } from "react";



// ------------------------------------------------------------------------------------------------------------
export const RootContext = createContext();
const langFlagData = [
  {
    lang: "en",
    flag: "https://cdn-icons-png.flaticon.com/128/197/197484.png",
  },
  {
    lang: "ja",
    flag: "https://cdn-icons-png.flaticon.com/128/197/197604.png",
  },
  {
    lang: "fr",
    flag: "https://cdn-icons-png.flaticon.com/128/197/197560.png",
  },
];
// ------------------------------------------------------------------------------------------------------------
const RootContextProvider = ({ children }) => {
  const supportedLanguages = ['en', 'ja', 'fr'];
  const navigatorLang = navigator?.language || 'en';
  const userDefaultLang = supportedLanguages.includes(navigatorLang) ? navigatorLang : 'en';  console.log(userDefaultLang);
  const initialLangData = {
    lang: userDefaultLang,
    flag: langFlagData?.find((item) => item?.lang === userDefaultLang)?.flag,
  };
  // -------------------------------------------------States----------------------------------------------------
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedNavLink, setSelectedNavLink] = useState("home");
  const [webLang, setWebLang] = useState(initialLangData);

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
        langFlagData,
        
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
