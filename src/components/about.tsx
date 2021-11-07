import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { Title } from "./ui/title"
import GatsbyImage from "gatsby-image"

export function About() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-big.png" }) {
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
    <section id="about" className="about ptb-40">
      <Container>
        <Row>
          <Col lg={3} xs={12}>
            <div className="about_imageContainer vc">
              <div className="about_image">
                <Fade bottom delay={320}>
                  <GatsbyImage fluid={data.logo.childImageSharp.fluid} />
                </Fade>
              </div>
            </div>
          </Col>

          <Col>
            <div className="about_content">
              <Fade bottom delay={100}>
                <Title className="about title">אודותינו</Title>
                <p>
                  'טוהר ייזום והנדסה' מספקת פתרונות מקצועיים ומדויקים בתחום
                  התשתיות והבניה ועומדת בחזית תחום התשתיות, הבינוי וההנדסה
                  בישראל. אנו מבצעים אבחון ותכנון הנדסי, פתרונות תשתית ובניה מעל
                  ומתחת לפני הקרקע, תוך התחשבות בצרכי סביבה, לקוח וקהל משתמש.
                  סינרגיית מקצוענות, חדשנות ואמינות – מאפשרת ללקוחותינו להשיג את
                  מטרותיהם, תוך שילוב היבטי יעילות והנאה מהדרך.
                </p>
                <p>
                  מנהלי ומהנדסי החברה מתכננים ומבצעים פרויקטים מיוחדים ומורכבים
                  ומספקים פתרונות מקצועיים ויצירתיים המאפשרים קבלת תוצרים
                  לשביעות רצונם המלאה של לקוחותינו. כל אתגר הנדסי, כל פרויקט
                  מורכב – הינם ברי פתרון ויישום! ומעבר לכל, אנו מאמינים ומיישמים
                  שקיפות פנים וחוץ ארגונית, אמינות גבוהה ומקצועיות חסרת פשרות
                  בתחום מתקדם, גלובלי ותחרותי.
                </p>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
