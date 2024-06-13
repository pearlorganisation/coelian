"use client";

// -------------------------------------------------Imports----------------------------------------------------
import { createContext, useEffect, useState } from "react";



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

  // -------------------------------------------------States----------------------------------------------------
 
  const [isNavigator, setNavigator]=useState(null)

  const supportedLanguages = ['en', 'ja', 'fr'];
  const navigatorLang = isNavigator;
  const userDefaultLang = supportedLanguages.includes(navigatorLang) ? navigatorLang : 'en';  
  
  
  const initialLangData = {
    lang: userDefaultLang,
    flag: langFlagData?.find((item) => item?.lang === userDefaultLang)?.flag,
  };



console.log(initialLangData)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedNavLink, setSelectedNavLink] = useState("home");
  const [webLang, setWebLang] = useState(initialLangData);
  console.log(webLang)

  // ----------------------------------------------------------------------------------------------------------
  // -------------------------------------------------Hooks----------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions---------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------
  // -----------------------------------------------useEffect---------------------------------------------------
console.log("dfkajsdfkjasdlkfja",isNavigator,navigatorLang)
  useEffect(()=>{
setNavigator(navigator.language)

  },[])

  useEffect(()=>{
setWebLang(initialLangData)
  },[isNavigator])
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
