import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { Title } from "./ui/title"

export function Vision() {
  return (
    <section id="vision" className="vision ptb-40">
      <Container>
        <Row>
          <Col>
            <Fade bottom deslay={100}>
              <Title className="vision title">חזון</Title>
              <p>
                'טוהר יזום והנסדה' מספקת פתרונות מקצועיים ומדויקים בתחום התשתית
                והבניה, תוך התחשבות בצרכי סביבה ולקוח. סנרגיית מקצוענות, חדשות
                ואמינות - מאפשרת ללקוחותינו להשיג את מטרותיהם, תוך שילוב היבטי
                יעיל והנאה מהדרך.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
