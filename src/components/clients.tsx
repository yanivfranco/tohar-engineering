import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { Title } from "./ui/title"
import { Image } from "./ui/image"

export function Clients() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "clients" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
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
            <Title className="clients_title">לקוחות</Title>
          </Col>
        </Row>
        <Row>
          {data.allFile.edges.map((image, i) => (
            <Col xs={12} lg>
              <div className="clients_image vc">
                <Image image={image.node} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
