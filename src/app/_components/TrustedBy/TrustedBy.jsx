// ------------------------------Imports----------------------------------------------------
import img1 from "../../_assets/images/trustedBy/decathelon.jpeg";
import img2 from "../../_assets/images/trustedBy/360.jpeg";
import img3 from "../../_assets/images/trustedBy/exotic.jpeg";
import img4 from "../../_assets/images/trustedBy/groupAtlantic.png";
import img5 from "../../_assets/images/trustedBy/suez.jpeg";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";






export default function TrustedBy() {


// ------------------------------States----------------------------------------------------

// ------------------------------Hooks----------------------------------------------------
  const { i18n} = useTranslation();
  
  
  
  
  
  return <section >
    
    <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}} className="h- border-t-0 rounded-2xl  w-full border bg-white ">
      
     <div className="flex flex-col  justify-between gap-4  ">
        <i className="flex justify-center my-3 items-center font-bold text-4xl">
          {i18n.t("trustedBy.title")}
        </i>

        <div className="flex flex-col  sm:flex-row gap-4 m-1 mb-4 justify-center items-center">
            <Image  src = {img1} alt="decathelon" className=" w-[150px] sm:w-[15vw]"/>
            <Image src = {img2} alt="360" className=" w-[150px] sm:w-[15vw]"/>
            <Image src = {img3} alt="exotic" className=" w-[150px] sm:w-[15vw]"/>
            <Image className="w-[150px] sm:w-[15vw]" src = {img4} alt="groupAtlantic" />
            <Image src = {img5} alt="suez" className=" w-[150px] sm:w-[15vw]"/>
        </div>
         

     </div>

    </div>
  </section>;
}
