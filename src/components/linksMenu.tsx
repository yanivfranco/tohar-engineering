import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React, { Fragment } from "react"

export const links = [
  { label: "השירותים שלנו", id: "#services" },
  { label: "חזון", id: "#vision" },
  { label: "אודותנו", id: "#about" },
  { label: "פרויקטים לדוגמה", id: "#projects" },
  { label: "הצהרת נגישות", id: "#accesability" },
]

export function LinksMenu() {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      whatsapp: file(relativePath: { eq: "whatsapp.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="linksMenu">
      <div className="linksMenu_container">
        {links.map((link, i) => (
          <Fragment>
            <a className="linksMenu_item" href={link.id} key={i}>
              {link.label}
            </a>
            <div className="linksMenu_seperator" />
          </Fragment>
        ))}

        <a
          className="linksMenu_icon"
          href="https://www.facebook.com/TGToharGroup/"
          target="__blank"
        >
          <GatsbyImage fluid={data.facebook.childImageSharp.fluid} />
        </a>

        <a
          className="linksMenu_icon"
          href="https://wa.me/0542034595"
          target="__blank"
        >
          <GatsbyImage fluid={data.whatsapp.childImageSharp.fluid} />
        </a>
      </div>
    </div>
  )
}
