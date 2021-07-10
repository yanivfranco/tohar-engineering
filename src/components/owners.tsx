import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import GatsbyImage from "gatsby-image"
import Fade from "react-reveal/Fade"

export function Owners() {
  const data = useStaticQuery(graphql`
    query {
      citylines: file(relativePath: { eq: "team/citylines.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      benzi: file(relativePath: { eq: "team/benzi.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      haim: file(relativePath: { eq: "team/haim.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      menashe: file(relativePath: { eq: "team/menashe.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      udi: file(relativePath: { eq: "team/udi.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const persons = [
    {
      name: "ניצב בדימוס",
      title: 'בנצי סאו, יו"ר',
      image: (
        <GatsbyImage
          fluid={data?.benzi?.childImageSharp.fluid}
          alt="תמונת פנים של יושב ראש החברה"
        />
      ),
    },
    {
      name: "חיים מורד",
      image: (
        <GatsbyImage
          fluid={data?.haim?.childImageSharp.fluid}
          alt="תמונת פנים של המנכל"
        />
      ),
    },
    {
      name: "מנשה מורד",
      image: (
        <GatsbyImage
          fluid={data?.menashe?.childImageSharp.fluid}
          alt="תמונת פנים של מנהל פיתוח עסקי"
        />
      ),
    },
    {
      name: "אודי יונה",
      image: (
        <GatsbyImage
          fluid={data?.udi?.childImageSharp.fluid}
          alt="תמונת פנים של מנהל פרוקטים"
        />
      ),
    },
  ]

  return (
    <section id="owners" className="ptb-40 owners">
      <Container>
        <Row className="owners_personsContainer">
          {persons.map((person, i) => (
            <Col xs={12} sm={4} lg className="owners_person">
              <Fade bottom>
                <div className="owners_personImage">{person.image}</div>
                <p>{person.name}</p>
                <p>{person.title}</p>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
