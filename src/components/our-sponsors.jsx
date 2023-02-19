import { partner1, partner2, partner3, partner4, partner5, partner6, vector2 } from "../assets"
import { styles } from "../util/style"

const OurSponsors = () => {
  return ( 
    <div className="w-screen h-[30rem] bg-[#FDD04A]">
        <div className={`${styles.flexCenter}`}>
            <h1 className="text-[48px] p-[5rem]">Our Sponsors</h1>
        </div>
        <div className={`${styles.flexCenter} mt-[-5rem] ml-16`}>
            <img src={vector2} alt="" />
        </div>
        <div className={`${styles.flexCenter} mt-[2rem]`}>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec <br /> donec in morbi pulvinar. Enim non pulvinar neque.</p>
        </div>
        <div className="flex gap-10 justify-center items-end py-9">
            <img src={partner1} alt="" />
            <img src={partner2} alt="" />
            <img src={partner3} alt="" />
            <img src={partner4} alt="" />
            <img src={partner5} alt="" />
            <img src={partner6} alt="" />
        </div>
    </div>
  )
}

export default OurSponsors