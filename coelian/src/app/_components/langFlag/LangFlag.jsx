"use client"
// --------------------------Imports --------------------------------------------------------------
import { RootContext } from '@/app/_contexts/RootContext/RootContextProvider';
import React, { useState } from 'react'
import { useContext } from 'react';

const LangFlag = ({ }) => {

  // -------------------------------------------------States-----------------------------------------------    
  const { webLang, setWebLang, langFlagData } = useContext(RootContext);
  const [langFlag, setLangFlag] = useState(webLang);
  const [dropDown, setDropDown] = useState(false);

  return (
    <div>
      <li className="relative list-none ">
        <img onClick={() => { setDropDown((prevState) => !prevState) }} className="h-10" src={langFlag?.flag} alt="" srcset="" />
        {
          dropDown &&
          <div className="absolute flex my-2 flex-col gap-3">
            {

              langFlagData.filter((item) => item.lang !== langFlag.lang).map((item, index) => {
                return <div key={index} onClick={() => { setLangFlag(item); setWebLang(item); setDropDown((prevState) => !prevState); }}><img className="h-10 " src={item?.flag} alt={item.lang} /></div>
              })
            }
          </div>}
      </li></div>
  )
}

export default LangFlag