import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import { Container } from "react-bootstrap"
import useWindowSize from "../hooks/useWindowSize"

export function Hero() {
  const { width } = useWindowSize()
  const data = useStaticQuery(graphql`
    query {
      floor: file(relativePath: { eq: "floor.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }

      cube: file(relativePath: { eq: "3d-cube.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero">
      <div className="hero_bg">
        <GatsbyImage
          style={{ height: "100%" }}
          imgStyle={{ objectFit: "cover" }}
          fluid={data.floor.childImageSharp.fluid}
        />
      </div>

      <Container>
        <div className="hero_text_container">
          <div className="hero_text">
            <div>פתרונות סינרגטיים ומדויקים</div>
            <div className="hero_text_margin">בתחום התשתית והבניה</div>
          </div>

          <div className="hero_cube">
            <GatsbyImage fluid={data.cube.childImageSharp.fluid} />
          </div>
        </div>
      </Container>
    </div>
  )
}
