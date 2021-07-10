import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import { Container } from "react-bootstrap"

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }

      insta: file(relativePath: { eq: "insta.png" }) {
        childImageSharp {
          fixed(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFixed
          }
        }
      }

      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fixed(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section id="footer" className="ptb-40 footer">
      <Container className="footer_container">
        <div className="footer_logo">
          <GatsbyImage fluid={data.logo.childImageSharp.fluid} />
        </div>
        <div className="footer_text">
          <p>החרושת 8 אור יהודה, מיקוד: 6037576</p>
          <div className="seperator" />
          <p>טל. 03-5666403 </p>
          <div className="seperator" />
          <p>פקס 03-5669472</p>
          <div className="seperator" />
          <p> info@tohargroup.com</p>
          <div className="seperator" />
          <a href=" https://www.facebook.com/TGToharGroup/" target="__blank">
            <GatsbyImage fixed={data.facebook.childImageSharp.fixed} />
          </a>
          <a href="https://www.instagram.com/tohargroup/" target="__blank">
            <GatsbyImage fixed={data.insta.childImageSharp.fixed} />
          </a>
        </div>
      </Container>
    </section>
  )
}
