import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { Title } from "./ui/title"
import GatsbyImage from "gatsby-image"
import { Image } from "./ui/image"

export function Projects() {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "project1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project2: file(relativePath: { eq: "project2.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project3: file(relativePath: { eq: "project3.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const content = [
    {
      title: "פרויקט לדוגמה",
      text: `טקסט לדוגמה`,
      image: data.project1,
    },
    {
      title: "פרויקט לדוגמה",
      text: `טקסט לדוגמה`,
      image: data.project2,
    },
    {
      title: "פרויקט לדוגמה",
      text: `טקסט לדוגמה`,
      image: data.project3,
    },
  ]

  return (
    <section className="projects ptb-40">
      <Container>
        <Row>
          <Col>
            <Title className="projects_title">פרויקטים לדוגמה</Title>
          </Col>
        </Row>

        <Row>
          {content.map((item, i) => (
            <Col key={i} className="project_container" lg={4} xs={12}>
              <Fade bottom delay={320}>
                <div className="projects_image">
                  <Image
                    image={item.image}
                    horizontalPosition="right"
                    verticalPosition="top"
                  />
                </div>
                <p>
                  <div className="project_title">{item.title}</div>
                  {item.text}
                </p>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
