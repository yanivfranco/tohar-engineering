import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import { Container } from "react-bootstrap"
import Fade from "react-reveal/Fade"

export function Hero() {
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
      <div className="hero_bg"></div>

      <Container>
        <div className="hero_text_container">
          <Fade bottom>
            <div className="hero_text">
              <div>פתרונות סינרגטיים ומדויקים</div>
              <div className="hero_text_margin">בתחום התשתית והבניה</div>
            </div>
          </Fade>

          <Fade bottom delay={200}>
            <div className="hero_cube">
              <GatsbyImage fluid={data.cube.childImageSharp.fluid} />
            </div>
          </Fade>
        </div>
      </Container>
    </div>
  )
}
