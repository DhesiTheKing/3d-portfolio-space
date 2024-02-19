import { atom, useAtom } from 'jotai'
import React from 'react'
export const currentPageAtom=atom("intro");
export const IsanimationName=atom("No_animation")
export const meEnable=atom("none");
import { doorAtom } from './Door';
import { textEnable ,skilEnable,projectEnable,contactEnable} from './Home';
const Navi = () => {
  const[isAnimation,setIsAnimation]=useAtom(IsanimationName);
  const[currentPage,setCurrentPage]=useAtom(currentPageAtom);
  const [isEnabled,setIsEnabled]=useAtom(textEnable);
  const[isskilEnable,setIsSkilEnable]=useAtom(skilEnable);
  const[isprojectEnable,setIsProjectEnable]=useAtom(projectEnable);
  const[iscontactEnable,setContactEnable]=useAtom(contactEnable);
  const[doorOpen,setDoorOpen]=useAtom(doorAtom);
  function ChangeToBoy(){
    setDoorOpen(true);
    setTimeout(()=>{
      setCurrentPage("boy"); 
      setIsEnabled(true)
  },2200);

  }

  function changeToPlanet1(){
    setTimeout(()=>{
      setCurrentPage("planet1"); 
      setIsEnabled(false)
      setIsProjectEnable(true)
  },1500);
  }

  function changeToPlanet2(){
    setTimeout(()=>{
      setCurrentPage("planet2"); 
      setIsEnabled(false)
      setIsProjectEnable(false)
      setIsSkilEnable(true)
  },1000);
  }

  function changeToPlanet3(){
    setTimeout(()=>{
      setCurrentPage("planet3"); 
      setIsEnabled(false)
      setIsProjectEnable(false)
      setIsSkilEnable(false)
      setContactEnable(true)
  },1000);
  }
  return (
    <>
    <div className='fixed inset-0 pointer-events-none'>
      <section className={`flex w-full h-full flex-col items-center justify-center duration-500 ${currentPage==="home" ? "":"scale-0"}`}>
        <div className={'h-[30%]'}></div>
        <button onClick={ChangeToBoy}
        className={'pointer-events-auto py-4 px-8 bg-gray-400 text-gray-800 font-black rounded-full'}
        > 
          EXPLORE
        </button>
      </section>
    </div>
    <div className='fixed inset-0 pointer-events-none'>
      <section className={`flex w-full h-full flex-col items-center justify-center duration-500  ${currentPage==="boy" ? "":"scale-0"}`}>
          <div className={'h-[60%]'}></div>
          <button onClick={changeToPlanet1}
          className={'pointer-events-auto py-4 px-8 bg-slate-600 border-l-stone-400 text-white font-black rounded-full'}
          > 
            PROJECTS
          </button>
        </section>
    </div>
    <div className='fixed inset-0 pointer-events-none'>
      <section className={`flex w-full h-full flex-col items-center justify-center duration-500  ${currentPage==="planet1" ? "":"scale-0"}`}>
          <div className={'h-[60%]'}></div>
          <button onClick={changeToPlanet2}
          className={'pointer-events-auto py-4 px-8 bg-zinc-800 border-l-stone-400 text-white font-black rounded-full'}
          > 
            SKILS
          </button>
        </section>
    </div>
    <div className='fixed inset-0 pointer-events-none'>
      <section className={`flex w-full h-full flex-col items-center justify-center duration-500  ${currentPage==="planet2" ? "":"scale-0"}`}>
          <div className={'h-[60%] w-[60%]'}></div>
          <button onClick={changeToPlanet3}
          className={'pointer-events-auto py-4 px-8 bg-slate-100 border-l-stone-400 text-black font-black rounded-full'}
          > 
            CONTACT
          </button>
        </section>
    </div>
      </>
  );
}

export default Navi