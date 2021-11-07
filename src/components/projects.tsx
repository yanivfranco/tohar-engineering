import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import { Title } from "./ui/title"
import Project from "./project"
import Slider from "react-slick"

export function Projects() {
  const data = useStaticQuery(graphql`
    query {
      project11: file(relativePath: { eq: "projects/project1-1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project12: file(relativePath: { eq: "projects/project1-2.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project13: file(relativePath: { eq: "projects/project1-3.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project21: file(relativePath: { eq: "projects/project2-1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project22: file(relativePath: { eq: "projects/project2-2.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project23: file(relativePath: { eq: "projects/project2-3.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project31: file(relativePath: { eq: "projects/project3-1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project32: file(relativePath: { eq: "projects/project3-2.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project33: file(relativePath: { eq: "projects/project3-3.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      project34: file(relativePath: { eq: "projects/project3-4.jpg" }) {
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
      title: "התקנת קירות אקוסטים עבור חברת אקרשטיין",
      text: `חברת אקרשטיין מוכרת ומספקת קירות אקוסטים וקירות מיגון לפרויקטים לאומיים ברחבי מדינת ישראל. חברת טוהר ייזום והנדסה הוסמכה כמתקינה ראשית, מורשית על ידי חברת אקרשטיין להתקנת הקירות.`,
      images: [data.project21, data.project22, data.project23],
    },
    {
      title:
        "ביצוע קו ביוב בכביש 444 נווה ימין-צומת אייל עבור חברת דניה סיבוס עבור חברת דניה סיבוס",
      text: `במסגרת הקמת כביש 444 בקטע שבין נווה ימין לצומת אייל, פרויקט שמבוצע על ידי חברת דניה סיבוס עבור חברת חוצה ישראל(מזמין העבודה). אחד השלבים בביצוע הפרויקט הינו החלפת קו ביוב ראשי, קיים וזורם בקוטר 1250 מ"מ המגיע למט"ש דרום השרון.
      העבודות כוללות: ביצוע מעקפים והזרמת הביוב תוך כדי ייבוש הקטעים שיש להחליף, ביצוע של חלק מהקטעים בעזרת טכנולוגיית MICROTUNNELING, דחיקת צנרת ללא חפירה.`,
      images: [data.project12, data.project11, data.project13],
    },
    {
      title: ' מכולות מיגון לאזור חומ"ס בנמל המפרץ חיפה עבור חברת  s הסינית',
      text: `במסגרת הפעלת הנמל החדש, לצורך קבלת אישור אחסון למכולות המגיעות מחו"ל ומכילות חומרים מסוכנים, נדרשה הנהלת הנמל לייצר מתחם מיגון לאחסון המכולות מחשש לפגיעת טילים. טוהר ייזום והנדסה קיבלה על עצמה לבצע את הפרויקט תוך כדי עמידה בלוחות זמנים צפופים ועמידה בביצוע של מפרט מורכב. לצורך כך הוקצו לחברת טוהר ארבעה חודשי ביצוע לייצור 320 מכולות ממוגנות ואספקת האישורים הנלווים לכך מפיקוד העורף, התהליך הושלם מוקדם מן הצפוי.`,
      images: [data.project31, data.project32, data.project33, data.project34],
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <section id="projects" className="projects ptb-40">
      <Container>
        <Row>
          <Col>
            <Title className="projects_title">פרויקטים לדוגמה</Title>
          </Col>
        </Row>

        {/* <Row> */}
        <Slider {...settings}>
          {content.map((item, i) => (
            <div key={i} className="project_container">
              <Project
                text={item.text}
                title={item.title}
                images={item.images}
              />
            </div>
          ))}
        </Slider>
        {/* </Row> */}
      </Container>
    </section>
  )
}
