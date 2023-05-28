import Image from "next/image"

const imagens = [
  "/galeria-1.png",
  "/galeria-2.png",
  "/galeria-3.png",
  "/galeria-4.png",
  "/galeria-5.png",
  "/galeria-6.png",
  "/galeria-7.png",
  "/galeria-8.png"
]

export function Gallery () {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 px-20">
      {
        imagens.slice(0, 4).map((image, index) => (
          <Image
            width={305}
            height={198}
            src={image}
            key={image} 
            alt="galeria de imagens astronautas"
            className={`w-full ${index < 4 ? 'md:mb-14' : ''}`}
          />
        ))
      }
      {
        imagens.slice(4).map((image) => (
          <Image
          width={305}
          height={198}
          src={image}
          key={image} 
          alt="galeria de imagens astronautas"
          className="w-full"
        />
        ))
      }
    </div>
  )
}