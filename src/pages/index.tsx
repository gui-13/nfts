import { Main } from "@/components/Main"
import { Header } from "@/components/Header"
import { InfoSection } from "@/components/InfoSection"
import { PopularSection } from "@/components/PopularesSection"
import { ArtistasSection } from "@/components/ArtistasSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="bg-bodyBackground font-sans overflow-hidden text-white">
      <div className="max-h-max w-full bg-[url('../assets/background.png')] bg-no-repeat bg-center bg-cover">
        <Header />
        <Main />
      </div>
      <InfoSection />
      <PopularSection />
      <ArtistasSection />
      <Footer />
    </div>
  )
}
