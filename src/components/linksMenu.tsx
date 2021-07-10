import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React, { Fragment } from "react"

export const links = [
  { label: "השירותים שלנו", id: "#about" },
  { label: "חזון", id: "#owners" },
  { label: "אודותנו", id: "#relatedCompanies" },
  { label: "פרויקטים לדוגמה", id: "#contact" },
  { label: "הצהרת נגישות", id: "#contact" },
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
          href="http://www.facebook.com"
          target="__blank"
        >
          <GatsbyImage fluid={data.facebook.childImageSharp.fluid} />
        </a>

        <a
          className="linksMenu_icon"
          href="http://www.facebook.com"
          target="__blank"
        >
          <GatsbyImage fluid={data.whatsapp.childImageSharp.fluid} />
        </a>
      </div>
    </div>
  )
}
