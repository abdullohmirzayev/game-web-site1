import { olovIcon, thenewera } from '../assets'
import { styles } from '../util/style'

const Team = () => {
  return (
    <div className='flex w-screen h-screen bg-black' id='team'>
        <div className='w-3/5'>
            <div className={`flex-row ${styles.flexCenter}`}>
                <div className='mt-[9rem]'>
                    <img src={olovIcon} alt="" />
                </div>
                <div className='mt-[9rem] mr-[17rem]'>
                    <h3 className='text-[#57B8FF]'>FUTURE OF eSPORTS</h3>
                </div>
            </div>
            <div className='flex ml-[15rem]'>
                <h1 className='text-[64px] text-white'>The New Era Of <br /> Cloud Gaming Here</h1>
            </div>
            <div className='flex ml-[15rem]'>
                <p className='text-[20px] text-[#DFDFDF] mt-10'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, eaque <br /> ipsa quae ab illo inventore veritatis et quasi architecto beatae <br /> vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                </p>
            </div>
            <div>
                <button className="text-white bg-[#57B8FF] hover:bg-[#999999] text-[18px] px-[2.3rem] py-[1rem] mt-16 ml-[15rem]" type="button">
                    Explore More
                </button>
            </div>
        </div>
        <div className='w-2/5'>
            <div className={`${styles.flexCenter} mt-[8rem] mr-[20rem]`}>
                <img src={thenewera} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Team