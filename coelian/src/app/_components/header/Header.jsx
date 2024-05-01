// ------------------------------------------------Imports----------------------------------------------------
import Image from "next/image";
import logo from "../../_assets/images/logo.png";
// ----------------------------------------------------------------------------------------------------------

export default function Header() {
  return (
    <header className="relative ">
      <div className="fixed top:0 left-0 right-0 h-[100px] bg-white flex items-center justify-around">
        <div>
          <Image src={logo} alt="logo" width={100} />
        </div>
        <nav className="flex gap-4 ">
          <li className="list-none font-semibold">Home</li>
          <li className="list-none font-semibold">About Us</li>
          <li className="list-none font-semibold">Individuals</li>
          <li className="list-none font-semibold">Corporate</li>
          <li className="list-none font-semibold">Contact Us</li>
          <li className="list-none font-semibold">Blogs</li>
        </nav>
      </div>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="headerImg"
          className="object-cover h-[50vh] sm:h-[97vh] w-full"
        />
      </div>
    </header>
  );
}
