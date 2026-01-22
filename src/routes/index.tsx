import { createFileRoute } from '@tanstack/react-router'
import Navbar from './components--/navbar/navbar'
import Footer from './components--/footer/footer'
import HeroSection from './components--/sections/hero_section'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <main>
          <HeroSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
