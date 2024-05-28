'useClient'

import React, { useContext, useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useTranslation } from 'react-i18next';
import { RootContext } from '@/app/_contexts/RootContext/RootContextProvider';
import Partners from '../../partners/Partners';

const GlobalLayout = ({children}) => {

    const {webLang} = useContext(RootContext);



    const {i18n} = useTranslation();

    

    useEffect(()=>{
      i18n?.changeLanguage(webLang.lang);
  
    },[webLang]);
  return (
    <div>
        <Header />
        {children}
        <Partners/>
        <Footer/>
    </div>
  )
}

export default GlobalLayout