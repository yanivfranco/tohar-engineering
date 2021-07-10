import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import GatsbyImage from "gatsby-image"
import Fade from "react-reveal/Fade"

export function About() {
  const data = useStaticQuery(graphql`
    query {
      citylines: file(relativePath: { eq: "citylines.jpg" }) {
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
    <section className="about ptb-40">
      <Container>
        <Row>
          <Col>
            <Fade bottom>
              <p>
                'קבוצת טוהר' הוקמה בשנת 1990 ומספקת שירותים משלימים מתקדמים
                כדוגמת פתרונות העיר החכמה, מתח גבוה ונמוך, הנדסה ותשתיות,
                פתרונות אבטחה וביטחון, פתרונות ניקיון ואחזקה, פתרונות כוח אדם
                ופתרונות תעופה קלה. שירותי הקבוצה מאופיינים באיכות מקצועית,
                שירות ומעל הכל – אמינות! הגב החזק, היציבות, ניסיון, בשילוב הון
                אנושי מקצועי המספק יחס אישי, מאפשרים לנו להתאים פתרונות וללוות
                לקוח משלב האבחון והתכנון ועד לשלב הביצוע וההיזון החוזר.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>

      <div className="about_city">
        <GatsbyImage
          style={{ height: "100%" }}
          imgStyle={{ objectFit: "cover" }}
          fluid={data.citylines.childImageSharp.fluid}
        />
      </div>
    </section>
  )
}
