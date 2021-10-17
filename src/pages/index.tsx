import React, { Fragment } from "react"
import { Vision } from "../components/vision"
import { Clients } from "../components/clients"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Owners } from "../components/owners"
import { Services } from "../components/services"
import SEO from "../components/seo"
import { About } from "../components/about"
import { Projects } from "../components/projects"

import "../styles/main.scss"
import "animate.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const IndexPage = () => (
  <div className="rtl">
    <SEO url="www.tohareng.co.il" title="טוהר ייזום והנדסה" />
    <Header />
    <Hero />
    <Vision />
    <Services />
    <About />
    <Owners />
    <Projects />
    <Clients />
    <Header />
    <Footer />
  </div>
)

export default IndexPage
