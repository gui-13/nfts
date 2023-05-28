import Image from "next/image";
import artistaUm from "../assets/artista-1.png"
import artistaDois from "../assets/artista-2.png"
import artistaTres from "../assets/artista-3.png"
import artistaQuatro from "../assets/artista-4.png"
import artistaCinco from "../assets/artista-5.png"
import artistaSeis from "../assets/artista-6.png"
import arrowOrange from "../assets/arrow-orange.svg"

export function ArtistasSection() {
  return (
    <div className="p-20">
      <h1 className=" text-5xl font-bold mb-32 text-center">Melhores <span className="text-textRed">artistas</span></h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 justify-items-center gap-28">

        <div className=" flex items-center gap-10 bg-backgroundCard min-w-max px-9 py-6">
          <Image src={artistaUm} alt="artista"/>
          <div className="flex flex-col gap-3">
            <small className="text-xl">Maik Brito</small>
            <span>80 Fotografias</span>
          </div>
        </div>

        <div className=" flex items-center gap-10 bg-textRed min-w-max px-9 py-6">
          <Image src={artistaDois} alt="artista"/>
          <div className="flex flex-col gap-3">
            <small className="text-xl">Jakeliny G.</small>
            <span>99 Fotografias</span>
          </div>
        </div>

        <div className=" flex items-center gap-10 bg-backgroundCard min-w-max px-9 py-6">
          <Image src={artistaTres} alt="artista"/>
          <div className="flex flex-col gap-3">
            <small className="text-xl">João I. (Biro)</small>
            <span>50 Fotografias</span>
          </div>
        </div>

        <div className=" flex items-center gap-10 bg-backgroundCard min-w-max px-9 py-6">
          <Image src={artistaQuatro} alt="artista"/>
          <div className="flex flex-col gap-3">
            <small className="text-xl">Tamires S.</small>
            <span>43 Fotografias</span>
          </div>
        </div>

        <div className=" flex items-center gap-10 bg-backgroundCard min-w-max px-9 py-6">
          <Image src={artistaCinco} alt="artista"/>
          <div className="flex flex-col gap-3">
            <small className="text-xl">Ana Silva</small>
            <span>28 Fotografias</span>
          </div>
        </div>

        <div className=" flex items-center gap-10 bg-backgroundCard min-w-max px-9 py-6">
          <Image src={artistaSeis} alt="artista"/>
          <div className="flex flex-col gap-3">
            <small className="text-xl">Diego F.</small>
            <span>20 Fotografias</span>
          </div>
        </div>
      </div>

      <a href="#" className="flex justify-center gap-3 mt-14">Ver todos os artirtas <Image src={arrowOrange} alt="flecha laranja"/></a>

    </div>
  )
}