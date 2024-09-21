import { Header } from '../components/Header/Header'
import { Banner } from '../components/Banner/Banner'
import { ProjectList } from '../components/ProjectList/ProjectList'
import { Footer } from '../components/Footer/Footer'

export const Project = () => {
  return (
    <>
      <Header />
      <Banner title="Projects" image="projects.png" />
      <div className="container">
        <ProjectList />
      </div>
      <Footer />
    </>
  )
}