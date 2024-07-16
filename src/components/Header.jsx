// import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="flex items-center justify-between h-36 px-12 sticky top-0 z-50 bg-white">
      <div className="flex items-center w-[114px] h-[90px]">
        <img src="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/source/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2021/10/ndr_logo.svg" alt="" />
      </div>
      <ul className="flex justify-center sticky top-0">
        <li>
          <a href="/" alt="" className="px-7 py-20 items-stretch hover:bg-[#0693e3] hover:text-white font-bold">Home</a>
        </li>
        <li>
          <a href="/about" className="px-7 py-20 items-stretch hover:bg-[#0693e3] hover:text-white font-bold">Apply</a>
        </li>
        <li>
          <a href="/contact" className="px-7 py-20 items-stretch hover:bg-[#0693e3] hover:text-white font-bold">How It Works</a>
        </li>
        <li>
          <a href="/contact" className="px-7 py-20 items-stretch hover:bg-[#0693e3] hover:text-white font-bold">About Us</a>
        </li>
        <li>
          <a href="/contact" className="px-7 py-20 items-stretch hover:bg-[#0693e3] hover:text-white font-bold">Resources</a>
        </li>
        <li>
          <a href="/contact" className="px-7 py-20 items-stretch hover:bg-[#0693e3] hover:text-white font-bold">Client Stories</a>
        </li>
        <li>
          <a href="/contact" className="px-7 py-20 items-stretch hover:bg-[#0693e3] hover:text-white font-bold">Blog</a>
        </li>
      </ul>
      <div className="flex items-center justify-center gap-5">
        <a href="/account" className="text-blue-700 hover:text-[#1f2147] font-bold">My Account</a>
        <a href="tel:800-300-9550" className="px-7 py-2 rounded-full border-2 border-gray-700 hover:bg-[#1f2147] hover:text-white">800-300-9550</a>
      </div>
    </nav>
  )
}

export default Header