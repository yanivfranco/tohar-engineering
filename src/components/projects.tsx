import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import { Title } from "./ui/title"
import Project from "./project"

export function Projects() {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "projects/project1-1.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project2: file(relativePath: { eq: "projects/project2-1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project3: file(relativePath: { eq: "projects/project3-1.jpeg" }) {
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
      title: "הקמת קירות אקוסטים עם חברת אקרשטיין",
      text: `טקסט לדוגמה`,
      images: [data.project1, data.project1, data.project1],
    },
    {
      title: "ביצוע קו ביוב בכביש 444 נווה ימין-צומת אייל עם חברת דניה סיבוס",
      text: `טקסט לדוגמה`,
      images: [data.project2, data.project2, data.project2],
    },
    {
      title:
        "קונטיינרים ממוגנים לאזור חומרים מסוכנים בנמל המפרץ (נמל חיפה החדש) לחברת SIPG",
      text: `טקסט לדוגמה`,
      images: [data.project3, data.project3, data.project3],
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
              <Project
                text={item.text}
                title={item.title}
                images={item.images}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
