import React, { Fragment } from "react"
import { About } from "../components/about"
import { Clients } from "../components/clients"
import { Companies } from "../components/companies"
import { Footer } from "../components/footer"
import { Graph } from "../components/graph"
import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Owners } from "../components/owners"
import SEO from "../components/seo"
import ScrollArrow from "../components/scrollArrow"

import "../styles/main.scss"
import "animate.css"

const IndexPage = () => (
  <div className="rtl">
    <SEO url="www.tohareng.co.il" title="טוהר ייזום והנדסה" />
    <Header />
    {/* <Hero />
    <About />
    <Owners />
    <Companies />
    <Graph />
    <Clients /> */}
    <Footer />
  </div>
)

export default IndexPage
