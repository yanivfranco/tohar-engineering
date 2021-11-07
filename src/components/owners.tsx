import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { Title } from "./ui/title"
import GatsbyImage from "gatsby-image"
import Image from "./ui/image"

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
      text: `ניצב בדימוס, בן ציון (בנצי) סאו, הינו יו"ר 'TOHAR GROUP'.
      בנצי כיהן בית היתר כממלא מקום מפכ"ל משטרת ישראל, סגן המפכ"ל, מפקד מחוז תל אביב ומפקד מחוז ירושלים.
      בנצי הצטרף ל- TOHAR GROUP' בשנת 2019 ומאז מוביל עם מנהלות ומנהלי החברה את הקבוצה לצמיחה תוך שמירה על ערכיה ובראשם יושרה ואמינות, מקצוענות וחדשנות!
      בנצי מביא עימו חשיבה וראיה אסטרטגית מובילה וממנף את היתרונות הסינרגטיים של חברות הקבוצה לטובת לקוחותינו.`,
    },
  ]

  return (
    <section id="owners" className="owners ptb-40">
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
