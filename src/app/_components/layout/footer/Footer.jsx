import { SiMinutemailer } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaMeta } from "react-icons/fa6";
import logo from "../../../_assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { RootContext } from "@/app/_contexts/RootContext/RootContextProvider";
import { Trans, useTranslation } from "react-i18next";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  const { setSelectedIndex } = useContext(RootContext);
  const { i18n } = useTranslation();

  return (
    <footer className="bg-[#303031] w-full">
      <div className="container mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* "Make the right data-driven decision that move your business." section */}
        <div className="md:flex md:flex-row md:w-full justify-center items-center md:p-1 md:m-4">
          <div className="content flex flex-col justify-center items-center">
            <div className="img md:block md:p-2 cursor-pointer">
              <Link href="/">
                <Image src={logo} alt={"Logo"} className="w-[60px] h-[60px]" />
              </Link>
            </div>
            <p className="text-white text-center p-2 text-sm md:text-xl">
              <Trans i18nKey="footer.title" />
            </p>
          </div>
        </div>

        {/* "About Us" section */}
        <div className="md:flex gap-10 items-center justify-center md:justify-center">
          <div className="text-center md:text-left">
            <p className="text-white">
              <a href="#">
                <Trans i18nKey="footer.body.part2.about" />
              </a>
            </p>

            <p className="text-white">
              <Link href="#">
                <Trans i18nKey="footer.body.part2.jobs" />
              </Link>
            </p>

            <p className="text-white">
              <button
                onClick={() => {
                  router.push("/services");
                  setSelectedIndex(null);
                }}
              >
                <Trans i18nKey="footer.body.part2.services" />
              </button>
            </p>
          </div>

          <div className="text-center md:text-left">
            <p className="text-white">
              <a href="#">
                <Trans i18nKey="footer.body.part2.terms_and_condition" />
              </a>
            </p>
            <p className="text-white">
              <a href="#">
                <Trans i18nKey="footer.body.part2.privacy_policy" />
              </a>{" "}
            </p>
            <p className="text-white">
              <a href="#">
                <Trans i18nKey="footer.body.part2.cookie_policy" />
              </a>
            </p>
          </div>
        </div>

        {/* Facebook logo */}
        <div className="flex justify-center md:justify-center items-center text-white">
          <FaFacebookF size={40} />
        </div>
      </div>

      <div className="text-white text-center py-4 md:py-6">
        © 2022 <Trans i18nKey="footer.body.owned" /> Tokyoimmo.
      </div>
    </footer>
  );
};

export default Footer;
