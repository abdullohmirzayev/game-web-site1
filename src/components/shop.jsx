import { latest, latest1, latest2, latest3, latest4, olovIcon } from '../assets';
import { styles } from "../util/style.js";

const Shop = () => {
  return (
    <div className='w-screen h-[72rem] flex bg-black' id='shop'>
        <div className='w-1/2'>
            <div className={`${styles.flexStart} flex-col mt-[6rem] ml-[4rem]`}>
                <div className='flex flex-row'>
                    <div className='flex'>
                        <img src={olovIcon} alt="fire-icon" />
                    </div>
                    <div>
                        <h3 className={`${styles.subTitle}`}>FUTURE OF eSPORTS</h3>
                    </div>
                </div>
                <div>
                    <h1 className='text-[64px] text-white'>Latest News & <br /> Articles</h1>
                </div>
                <div className='mt-[2rem]'>
                    <img src={latest} alt="latest" />
                </div>
                <div className='mt-[2rem]'>
                    <p className={`${styles.subTitle}`}>April 2, 2021</p>
                </div>
                <div className='mt-[1.5rem]'>
                    <h2 className='text-[36px] text-white '>Esports Group Teams Up With <br /> The Indianapolis Colts</h2>
                </div>
            </div>
        </div>
        <div className='w-1/2 flex flex-col'>
            <div className='flex justify-end items-start mr-[8rem] mt-[13rem]'>
                <button className="text-white bg-[#57B8FF] hover:bg-[#999999] font-orbitron font-normal text-[18px] px-[2.3rem] py-[1rem] " type="button">
                    Read More
                </button>
            </div>
            <div className='grid gap-10 grid-cols-2 mt-[5rem]'>

                <div className='flex flex-col'>
                    <div className='flex'>
                        <img src={latest1} alt="" />
                    </div>
                    <div className='mt-[1.5rem]'>
                        <p className={`${styles.subTitle}`}>April 2, 2021</p>
                    </div>
                    <div className='mt-[1.5rem]'>
                        <h2 className=' font-orbitron font-normal text-[23px] text-white '>NAVI Reveals S1mple <br /> Fifth Anniversary</h2>
                    </div>
                </div>

                <div className='flex flex-col ml-[-4rem]'>
                    <div className='flex'>
                        <img src={latest2} alt="" />
                    </div>
                    <div className='mt-[1.5rem]'>
                        <p className={`${styles.subTitle}`}>April 2, 2021</p>
                    </div>
                    <div className='mt-[1.5rem]'>
                        <h2 className=' font-orbitron font-normal text-[23px] text-white '>A1esports Shares <br /> new picture</h2>
                    </div>
                </div>
                
                <div className='flex flex-col'>
                    <div className='flex'>
                        <img src={latest3} alt="" />
                    </div>
                    <div className='mt-[1.5rem]'>
                        <p className={`${styles.subTitle}`}>April 2, 2021</p>
                    </div>
                    <div className='mt-[1.5rem]'>
                        <h2 className=' font-orbitron font-normal text-[23px] text-white '>T1 Unveil Partnership <br /> With Razer</h2>
                    </div>
                </div>

                <div className='flex flex-col ml-[-4rem]'>
                    <div className='flex'>
                        <img src={latest4} alt="" />
                    </div>
                    <div className='mt-[1.5rem]'>
                        <p className={`${styles.subTitle}`}>April 2, 2021</p>
                    </div>
                    <div className='mt-[1.5rem]'>
                        <h2 className=' font-orbitron font-normal text-[23px] text-white '>RX Secures Content <br /> Partnership With</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop