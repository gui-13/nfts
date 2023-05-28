import Image from "next/image"
import badge from "../assets/badge.svg"

import groupAvatars from "../assets/group-avarts.png"
import { Gallery } from "./Gallery"

export function Main () {
  return ( 
    <main>
      <div className="w-full h-full flex flex-col-reverse gap-10 md:items-start items-center md:grid md:grid-cols-3 md:justify-items-center py-20">
        <div className="xl:max-w-sm w-1/2">
          <p className="text-lg">Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). Compre, venda e descubra ativos digitais exclusivos para você.</p>
          <div className="flex items-end justify-center gap-3 mt-14">
            <Image 
              src={groupAvatars}
              alt="Grupo imagens artistas"
            />
            <p>10+ <br/> Artistas selecionados</p>
          </div>
        </div>
        <h1 className="font-bold xl:text-5xl text-3xl xl:max-w-xl w-1/2 leading-tight md:order-none order-last">Descubra a verdadeira arte digital e <br/> colecione diversas <span className="text-textRed">NFTs</span></h1>
        <Image
          src={badge}
          alt="Imagem Badge"
        />
      </div>
        <Gallery/>
    </main>
  )
}