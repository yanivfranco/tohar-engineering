import React from "react"
import { MenuButton } from "./header"
import { links } from "./linksMenu"

interface Props {
  isMobileMenuOpen: boolean
  closeMenu()
}
const MobileMenu = ({ isMobileMenuOpen, closeMenu }: Props) => {
  const className = "mobileMenu" + (isMobileMenuOpen ? " open" : "")

  return (
    <div className={className}>
      <div className="mobileMenu_container">
        <MenuButton isMobileMenuOpen={isMobileMenuOpen} onClick={closeMenu} />
        {links.map((link, i) => (
          <a
            className="mobileMenu_item"
            href={link.id}
            key={i}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu
