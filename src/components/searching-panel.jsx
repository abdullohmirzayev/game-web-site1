import { vector3 } from '../assets'
import { styles } from "../util/style.js";

const SearchingPanel = () => {
  return (
    <div className={`w-screen h-[44rem] flex ${styles.flexStart}  bg-search-panel bg-cover bg-center`}>
        <div className='flex flex-col'>
            <div className='mt-[5rem]'>
                <h1 className={`font-normal text-[72px] text-[#141820] text-center`}>Join The Largest <br /> Gaming Community</h1>
            </div>
            <div className='ml-[19rem]'>
                <img src={vector3} alt="" />
            </div>
            <div className='mt-[4rem]'>
                <p className={`${styles.paragraph}`}>Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempuslectus. <br /> Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesu <br /> ada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo</p>
            </div>
            <div className='flex flex-row mt-[4rem] justify-center'>
                <div class="w-[30rem]">
                    <input type="email" name="email" class=" px-5 py-6 bg-white border shadow-sm border-slate-300 placeholder-slate-700 placeholder:text-[18px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@gmail.com" />
                </div>
                <div>
                    <a href="#">
                        <button type='submit' datatype='email' className="rounded-r-lg text-white bg-[#57B8FF] hover:bg-[#999999] font-orbitron font-normal text-[18px] px-[3rem] py-[1.3rem] ">
                            Subscribe Now
                        </button>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SearchingPanel