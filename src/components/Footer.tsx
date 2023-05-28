import Image from "next/image"
import logo from "../assets/logo.svg"
import arrowBlack from "../assets/arrow-black.svg"
import instagram from   "../assets/instagram.svg"
import youtube from   "../assets/youtube.svg"
import twitter from   "../assets/twitter.svg"
import email from   "../assets/email.svg"

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

export default function Footer() {
  return (
   <footer className="mt-36 flex flex-col bg-zinc-800">
      <div className="flex justify-between pt-24 pb-20 md:px-20 px-2">
        <Image 
          src={logo}
          alt="logo Rocket NFTs"
        />
        <button  onClick={scrollToTop} className="bg-textRed p-7 mx-w-max">
          <Image 
            src={arrowBlack}
            alt="flecha para cima"
             className="w-4 h-4"
          />
        </button>
      </div>

      <div className="flex flex-col w-full border-y-2 border-textInfo md:flex-row items-center">
        <div className="max-w-max flex flex-col justify-center gap-6 p-20 md:border-r-2 md:border-textInfo">
          <h2 className="text-3xl text-center">Fique por dentro de <br/><span className="text-textRed">todas as novidades</span></h2>
          <div className="h-20 grid xl:flex">
            <input className="h-full px-5 bg-black placeholder:text-textInfo outline-none" type="text" name="text" id="text" placeholder="nft@rocketseat.com.br"/>
            <button className="h-full px-5 text-black bg-white font-bold text-xl" type="submit">Enviar</button>
          </div>
        </div>

        <nav className="grid grid-cols-3 w-full self-center justify-items-center text-xl mb-5">
          <ul>
            <li className="font-bold">Empresa</li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Sobre</a></li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Serviços</a></li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Time</a></li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Carreira</a></li>
          </ul>
          <ul>
            <li className="font-bold">Mapa</li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Galeria</a></li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Populares</a></li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Vendas</a></li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Contatos</a></li>
          </ul>
          <ul>
            <li className="font-bold">Links</li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">FAQs</a></li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Termos</a></li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Políticas</a></li>
            <li className="text-textInfo hover:text-zinc-400"><a href="">Ajuda</a></li>
          </ul>
        </nav>
      </div>

      <div className="px-20 py-14 flex flex-col justify-between md:flex-row items-center gap-5">
        <a href="www.rocketseat.com.br" target="_blank" rel="noopener noreferrer" className="text-textInfo hover:text-zinc-400">www.rocketseat.com.br</a>
        <ul className="flex gap-4">
          <li>
            <Image
              src={instagram}
              alt="instagram"
            />
          </li>
          <li>
            <Image
              src={youtube}
              alt="youtube"
            />
          </li>
          <li>
            <Image
              src={twitter}
              alt="twitter"
            />
          </li>
          <li>
            <Image
              src={email}
              alt="email"
            />
          </li>
        </ul>
      </div>
   </footer>
  )
}