import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import GatsbyImage from "gatsby-image"
import Fade from "react-reveal/Fade"

export function Clients() {
  const data = useStaticQuery(graphql`
    query {
      citylines: file(relativePath: { eq: "citylines.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }

      clients: file(relativePath: { eq: "clients.jpg" }) {
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
    <section className="clients ptb-40">
      <Container>
        <Row>
          <Col>
            <div className="clients_logos">
              <Fade bottom unmountOnExit mountOnEnter>
                <GatsbyImage
                  style={{ height: "100%" }}
                  imgStyle={{ objectFit: "cover" }}
                  fluid={data.clients.childImageSharp.fluid}
                />
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="clients_city">
        <Fade bottom>
          <GatsbyImage
            style={{ height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
            fluid={data.citylines.childImageSharp.fluid}
          />
        </Fade>
      </div>
    </section>
  )
}
