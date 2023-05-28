import Image from "next/image"
import banner from "../assets/banner.png"

export function InfoSection () {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="p-16 pl-20 flex md:flex-col sm:flex-row flex-col gap-16 border-r border-b border-gray-500 items-center justify-center">
        <div className="md:mt-32 text-center">
          <h2 className="text-5xl font-medium">10K+</h2>
          <small className="text-xl text-textInfo">Artes</small>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-medium">200+</h2>
          <small className="text-xl text-textInfo">Vendas</small>
        </div>
        <div className="md:mb-32 text-center">
          <h2 className="text-5xl font-medium">20</h2>
          <small className="text-xl text-textInfo">Artistas</small>
        </div>
      </div>
      <div className="w-full flex flex-col justify-end">
        <div className="flex mx-16 justify-center gap-32 py-16">
          <div className="max-w-md">
            <p className="mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span className="text-textRed">potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
            <a href="#" className="underline">Lorem ipsum</a>
          </div>
          <div className="max-w-md">
            <p className="mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span className="text-textRed">potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
            <a href="#" className="underline">Lorem ipsum</a>
          </div>
        </div>
        <Image
          className="w-full"
          src={banner}
          alt="Banner homem de óculos"
          priority
        />
      </div>
    </section>
  )
}