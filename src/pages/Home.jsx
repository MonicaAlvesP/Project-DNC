import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Hero } from "../components/Hero/Hero"
import { ProjectList } from "../components/ProjectList/ProjectList"

export const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <ProjectList />
      </div>
      <Footer />
    </>
  )
}