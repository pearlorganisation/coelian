// --------------------------------------------Imports---------------------------------------------------
import currenciesImg from "../../_assets/images/currendirect.png";
import Image from "next/image";
import Link from "next/link";
import i18n from "@/app/_utils/globalization/i18n/i18n";
// ------------------------------------------------------------------------------------------------------

const Partners = () => {
  return (
    <>
      <div className="partners relative p-10 flex justify-center items-center">
        <div className="leftContent flex justify-center">
          <h1 className="font-bold text-3xl sm:text-4xl p-10 italic">{i18n.t("partner.title")}</h1>
        </div>
        <div className="rightContent p-10 border-2 sm:border-4 border-l-red-500 border-transparent">
          <div className="partnerImg  w-[180px] sm:w-[250px] ">
            <Link
              href="https://www.currenciesdirect.com/en/es?afflno=0201110000754485&assetid=0000036"
              className=""
              target="_blank"
            >
              <Image src={currenciesImg} alt="partners" className="w-full" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
