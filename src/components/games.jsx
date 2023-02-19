import { gamePlay, komps, pritsel } from '../assets'

const Games = () => {
  return (
    <div className='w-screen h-screen flex flex-row bg-slate-500 justify-center'>
        <div className='w-1/3 smooth1 bg-no-repeat bg-cover bg-center'>
            <div className='flex flex-col items-center mt-[18rem]'>
                <div className=''>
                    <img src={pritsel} alt="" />
                </div>
                <div>
                    <h1 className=' font-orbitron font-normal text-[58px] text-center text-white'>Smooth FPS</h1>
                </div>
            </div>
        </div>
        <div className='w-1/3 smooth2 bg-no-repeat bg-cover bg-center'>
            <div className='flex flex-col items-center mt-[18rem]'>
                <div className=''>
                    <img src={gamePlay} alt="" />
                </div>
                <div>
                    <h1 className=' font-orbitron font-normal text-[58px] text-center text-white'>Multiplayer</h1>
                </div>
            </div>
        </div>
        <div className='w-1/3 smooth3 bg-no-repeat bg-cover bg-center'>
            <div className='flex flex-col items-center mt-[18rem]'>
                <div className=''>
                    <img src={komps} alt="" />
                </div>
                <div>
                    <h1 className=' font-orbitron font-normal text-[58px] text-center text-white'>Open World</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Games