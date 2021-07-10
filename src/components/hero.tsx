import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import { Container } from "react-bootstrap"
import useWindowSize from "../hooks/useWindowSize"

export function Hero() {
  const { width } = useWindowSize()
  const data = useStaticQuery(graphql`
    query {
      city: file(relativePath: { eq: "city.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Dot = (left: number) => (
    <div style={{ left }} className="hero_dot"></div>
  )
  const generateDots = () => {
    const dots = []
    for (let i = 0; i < 30; i++) {
      const left = Math.random() * width
      dots.push(Dot(left))
    }

    return dots
  }

  return (
    <div className="hero">
      <div className="hero_logo">
        <GatsbyImage
          style={{ height: "100%" }}
          imgStyle={{ objectFit: "cover" }}
          fluid={data.city.childImageSharp.fluid}
        />
      </div>
      <Container>
        <div className="hero_text_container">
          <div className="hero_text">
            <p>
              'קבוצת טוהר' מפתחת ומיישמת מודלים ליצירת סביבה בטוחה, נקיה
              ומתקדמת, תוך שימוש בטכנולוגיה ובהעצמת ההון האנושי הנמצא במרכז
              הקבוצה.
            </p>
          </div>
        </div>
      </Container>
      {generateDots()}
    </div>
  )
}
