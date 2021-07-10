import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React, { useState } from "react"
import { LinksMenu } from "./linksMenu"
import MobileMenu from "./mobileMenu"

export const MenuButton = ({
  isMobileMenuOpen,
  onClick,
}: {
  isMobileMenuOpen: boolean
  onClick: () => any
}) => (
  <button
    onClick={onClick}
    id={"menuButton"}
    className={isMobileMenuOpen ? " open" : ""}
  >
    <div>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
)

export function Header() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="header">
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
      />

      <div className="header_container">
        <div className="header_logo">
          <GatsbyImage fluid={data.logo.childImageSharp.fluid} />
        </div>

        <div className="header_menuButton_container">
          <MenuButton
            isMobileMenuOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        <LinksMenu />
      </div>
    </div>
  )
}
