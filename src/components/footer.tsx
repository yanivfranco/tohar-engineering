import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import { Container } from "react-bootstrap"

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      citylines: file(relativePath: { eq: "city-lines.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section id="footer" className="ptb-40 footer">
      <Container className="footer_container">
        <div className="footer_text">
          <p>החרושת 8 אור יהודה, מיקוד: 6037576</p>
          <div className="seperator" />
          <p>טל. 03-5666403 </p>
          <div className="seperator" />
          <p>פקס 03-5669472</p>
          <div className="seperator" />
          <p> info@tohargroup.com</p>
          <div className="seperator" />
        </div>
      </Container>
      <div className="footer_citylines" />
    </section>
  )
}
