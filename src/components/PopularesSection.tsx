import Image from "next/image";
import astronauta1 from "../assets/astronauta-1.png"
import astronauta2 from "../assets/astronauta-2.png"
import astronauta3 from "../assets/astronauta-3.png"
import astronauta4 from "../assets/astronauta-4.png"
import arrowWhite from "../assets/arrow-white.svg"

export function PopularSection () {
  return (
    <div className="mt-40 px-20"> 
      <h1 className=" text-5xl font-bold mb-40 md:text-start text-center"><span className="text-textRed">Populares</span> da semana</h1>

      <div className="grid grid-cols-1 justify-items-center md:flex justify-between gap-5">

        <div>
          <div className="max-w-xs mb-12">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-medium text-3xl">Astronauta 1</h2>
              <Image src={arrowWhite} alt="flecha"/>
            </div>
            <div className="flex items-center justify-between mb-7">
              <small className="text-textInfo text-xl">Mayk Brito</small>
              <span className="uppercase text-textRed">1.50 rkt</span>
            </div>
            <Image src={astronauta3} alt="astronauta 3"/>
          </div>
          <div className="max-w-xs">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-medium text-3xl">Astronauta 3</h2>
              <Image src={arrowWhite} alt="flecha"/>
            </div>
            <div className="flex items-center justify-between mb-7">
              <small className="text-textInfo text-xl">Jakeliny Gracielly</small>
              <span className="uppercase text-textRed">2.0 rkt</span>
            </div>
            <Image src={astronauta1} alt="astronauta 1"/>
          </div>
        </div>

        <div className="xl:border xl:border-textInfo"/>

        <div>
          <div className="max-w-xs mb-12">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-medium text-3xl">Astronauta 2</h2>
              <Image src={arrowWhite} alt="flecha"/>
            </div>
            <div className="flex items-center justify-between mb-7">
              <small className="text-textInfo text-xl">Mayk Brito</small>
              <span className="uppercase text-textRed">1.50 rkt</span>
            </div>
            <Image src={astronauta2} alt="astronauta 2"/>
          </div>
          <div className="max-w-xs">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-medium text-3xl">Astronauta 4</h2>
              <Image src={arrowWhite} alt="flecha"/>
            </div>
            <div className="flex items-center justify-between mb-7">
              <small className="text-textInfo text-xl">Jakeliny Gracielly</small>
              <span className="uppercase text-textRed">2.0 rkt</span>
            </div>
            <Image src={astronauta4} alt="astronauta 4"/>
          </div>
        </div>
      
      </div>

    </div>
  )
}