import { olovIcon, rome } from "../assets"
import { styles } from "../util/style"

const About = () => {
  return (
    <div className={`w-screen h-[63rem] bg-cover bg-center bg-image`} id='about'>
        {/* Subtitel */}
        <div className={`${styles.flexCenter} flex-row gap-1`}>
            <div className="flex mt-[4rem]">
                <img src={olovIcon} alt="" />
            </div>
            <div className="flex mt-[4rem]">   
                <h3 className={`${styles.subTitle}`}>FUTURE OF eSPORTS</h3>
            </div>
        </div>

        <div className={`${styles.flexCenter} mt-[2rem]`}>
            <h1 className="text-[64px] text-white text-center">Your One Stop Shop <br /> Gaming Needs!</h1>
        </div>

        <div className={`${styles.flexCenter} mt-10`}>
            <p className="text-center text-[20px] text-[#DFDFDF]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam
            </p>
        </div>

        <div class="grid gap-8 grid-cols-2 mr-[1rem]  mt-[3rem]">
            <div className="bg-opocitys p-10 w-[30rem] ml-[17rem]">
                <div className="flex flex-row">
                    <div className="mt-2 mr-2">
                        <img src={rome} alt="rome" />
                    </div>
                    <div className="">
                        <h1 className="text-[32px] text-white">All New Gameplay</h1>
                    </div>
                </div>
                <div className="ml-7">
                    <p className="text-[18px] text-[#DFDFDF]">Vivamus magna justo, lacinia eget coecetur <br /> sed, convallis at tellus. Curabitur non nulla sit <br /> Vestibum ante ipsum primis in faucibus orci</p>
                </div>
            </div>
            <div className="bg-opocitys p-9 w-[30rem] ">
                <div className="flex flex-row">
                    <div className="mt-2 mr-2">
                        <img src={rome} alt="rome" />
                    </div>
                    <div className="">
                        <h1 className="text-[32px] text-white">All New Gameplay</h1>
                    </div>
                </div>
                <div className="ml-7">
                    <p className="text-[18px] text-[#DFDFDF]">Vivamus magna justo, lacinia eget coecetur <br /> sed, convallis at tellus. Curabitur non nulla sit <br /> Vestibum ante ipsum primis in faucibus orci</p>
                </div>
            </div> 
            <div className="bg-opocitys p-9 w-[30rem] ml-[17rem]">
                <div className="flex flex-row">
                    <div className="mt-2 mr-2">
                        <img src={rome} alt="rome" />
                    </div>
                    <div className="">
                        <h1 className="text-[32px] text-white">All New Gameplay</h1>
                    </div>
                </div>
                <div className="ml-7">
                    <p className="text-[18px] text-[#DFDFDF]">Vivamus magna justo, lacinia eget coecetur <br /> sed, convallis at tellus. Curabitur non nulla sit <br /> Vestibum ante ipsum primis in faucibus orci</p>
                </div>
            </div> 
            <div className="bg-opocitys p-9 w-[30rem] ">
                <div className="flex flex-row">
                    <div className="mt-2 mr-2">
                        <img src={rome} alt="rome" />
                    </div>
                    <div className="">
                        <h1 className="text-[32px] text-white">All New Gameplay</h1>
                    </div>
                </div>
                <div className="ml-7">
                    <p className="text-[18px] text-[#DFDFDF]">Vivamus magna justo, lacinia eget coecetur <br /> sed, convallis at tellus. Curabitur non nulla sit <br /> Vestibum ante ipsum primis in faucibus orci</p>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default About