import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { Title } from "./ui/title"
import Image from "./ui/image"

export function Services() {
  const data = useStaticQuery(graphql`
    query {
      about2: file(relativePath: { eq: "about2.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      about1: file(relativePath: { eq: "about1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }

      about3: file(relativePath: { eq: "about3.png" }) {
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
      title: "תשתיות",
      image: data.about2,
      text:
        "הנחת קווים תת קרקעיים לצרכי זרימה והובלת תשתיות, עבודות פיתוח ובניה, תכנון והקמת קירות אקוסטיים וקרקע משוריינת",
    },
    {
      title: "הנדסה ובינוי",
      image: data.about1,
      text:
        "הנחת קווים תת קרקעיים לצרכי זרימה והובלת תשתיות, עבודות פיתוח ובניה, תכנון והקמת קירות אקוסטיים וקרקע משוריינת",
    },
    {
      title: "ניהול פרויקטים",
      image: data.about3,
      text: "ניהול תחום תשתיות, כולל תכנון ובקרת פרויקטים",
    },
  ]

  return (
    <section className="services ptb-40">
      <Container>
        <Fade bottom delay={100}>
          <Row>
            <Col>
              <Title>שירותים</Title>
            </Col>
          </Row>
        </Fade>

        <Fade bottom delay={150}>
          <Row>
            {content.map((item, i) => (
              <Col key={i} xs={12} lg={4}>
                <div className="service_container">
                  <Image
                    image={item.image}
                    verticalPosition={i % 2 == 0 ? "top" : "bottom"}
                    horizontalPosition={i % 2 == 0 ? "left" : "right"}
                    className="services_image"
                  />
                  <div className="services_title">{item.title}</div>
                  <div className="services_text">{item.text}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  )
}
