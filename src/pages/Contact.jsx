import { Banner } from "../components/Banner/Banner"
import { ContactForm } from "../components/ContactForm/ContactForm"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"

export const Contact = () => {
  return (
    <>
      <Header />
      <Banner title="ContactUs" image="contactUs.png" />
      <div className="container">
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}