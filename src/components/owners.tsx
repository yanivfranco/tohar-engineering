import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { Title } from "./ui/title"
import GatsbyImage from "gatsby-image"
import { Image } from "./ui/image"

export function Owners() {
  const data = useStaticQuery(graphql`
    query {
      boaz: file(relativePath: { eq: "founders/boaz.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      benzi: file(relativePath: { eq: "founders/benzi.png" }) {
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
      title: "בועז טוביה",
      image: data.boaz,
      text: `מנכ"ל טוהר ייזום והנדסה, עוסק ומנהל בתחום התשתיות והבניה למעלה משלושה עשורים. הוותק,הניסיון הנצבר בתפקידי ניהול ביצוע, פרויקטים, חטיבות וחברות כדוגמת "רולידר' ו 'אקרשטיין', מאפשר לבועז להוביל במקצוענות את החברה, ולספק מענה לכל צורך תכנוני, הנדסי וביצועי.`,
    },
    {
      title: "בנצי סאו",
      image: data.benzi,
      text: ``,
    },
  ]

  return (
    <section className="owners ptb-40">
      <Container>
        {content.map((item, i) => (
          <Row className="owner_container">
            <Col lg={3} xs={12}>
              <Fade bottom delay={320}>
                <div className="owners_image">
                  <Image
                    image={item.image}
                    horizontalPosition="right"
                    verticalPosition="top"
                  />
                </div>
              </Fade>
            </Col>
            <Col>
              <p>
                <span>{item.title},</span>
                {item.text}
              </p>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  )
}
