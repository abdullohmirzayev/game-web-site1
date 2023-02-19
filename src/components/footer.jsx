import FooterItem from "./footerItem"
import {Logo, RESOURCES, socialMedia, SUPPORT,} from '../util/constants'
import { logo } from "../assets"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-screen">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-20 sm:px-8 px-5 py-20 footer-class">
        <div className="w-[17rem] ml-20">
          <img src={logo} alt="" className="py-4 mt-[-1rem]" />
          <FooterItem Links={Logo} />
        </div>
        <div className="ml-[10rem]">
        <FooterItem Links={RESOURCES} title="Menu Items" />
        </div>

        <div className="ml-[7rem]">
          <FooterItem Links={SUPPORT} title="Other Pages" />
        </div>
        <div className="flex flex-col ml-10">
          <h1 className="">Social Icons</h1>
          <div className="flex flex-row mt-5">
            {socialMedia.map((social, idx) => (
              <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${idx !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="rectangle w-[1540px] h-1 bg-[#3E3E3E] bottom-10"></div>
      <div className="grid gap-10 mt-7
      text-center pt-2 text-gray-400 text-sm pb-8">
        <span>Copyright by 2021 Flowzai</span>
      </div>
      
    </footer>
  )
}

export default Footer