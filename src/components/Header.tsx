import Image from "next/image"
import logo from "../assets/logo.svg"
import metaMask from "../assets/logo_MetaMask.svg"
import { stylesMenu } from "../styles/stylesMenu"

import {slide as Menu } from "react-burger-menu"


export function Header () {
  return (
    <header className="flex justify-between items-center md:px-20 px-5 py-12">
      <div className="lg:hidden block">
        <Menu styles={stylesMenu}>
          <ul>
            <li>
              <a href="#">Comprar NFT</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>                 
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div>
            <button className="flex items-center gap-2 bg-white text-black px-5 py-2 min-w-max">
              <Image
                src={metaMask}
                alt="logo meta Mask"
              />
              Conectar carteira
            </button>
          </div>
        </Menu>
      </div>
      
      <Image
        src={logo}
        alt="logo nfts"
      />
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-16">
          <li>
            <a href="#">Comprar NFT</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
      <button className="md:flex hidden items-center gap-4 bg-white text-black px-5 py-2 min-w-max">
        <Image
          src={metaMask}
          alt="logo meta Mask"
        />
        Conectar carteira
      </button>
    </header>
  )
}