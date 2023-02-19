import { customize, customize1, customize2, customize3, olovIcon } from '../assets'

const Pages = () => {
  return (
    <div className='flex w-screen h-[43.5rem] bg-[#2A313C]' id='pages'>
        <div className='flex w-1/2'>
            <div className='flex justify-center items-center ml-[4rem]'>
                <img src={customize} alt="" />
            </div>
        </div>
        <div className='flex w-1/2'>
            <div className='flex justify-start items-start flex-col'>
                <div className='flex flex-row items-center mt-[7rem]'>
                    <div className='flex'>
                        <img src={olovIcon} alt="fire-icon" />
                    </div>
                    <div className='flex'>
                        <h3 className=' font-orbitron font-normal text-[#57B8FF] uppercase'>FUTURE OF eSPORTS</h3>
                    </div>
                </div>
                <div className=''>
                    <h1 className=' font-orbitron font-normal text-[63px] text-white mt-[1rem]'>Customize Your <br /> Own Character</h1>
                </div>
                <div className='flex'>
                    <p className='font-orbitron font-normal text-[20px] text-[#DFDFDF] mt-[2rem]'>
                        Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa quae ab illo <br /> inventore veritatis et quasi architecto beatae.
                    </p>
                </div>
                <div class="grid grid-cols-3 gap-5 mt-10">
                    <div>
                        <img src={customize1} alt="" />
                    </div>
                    <div class="visible">
                        <img src={customize2} alt="" />
                    </div>
                    <div>
                        <img src={customize3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pages