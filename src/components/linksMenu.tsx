import React, { Fragment, useState } from "react"

export const links = [
  { label: "השירותים שלנו", id: "#about" },
  { label: "חזון", id: "#owners" },
  { label: "אודותנו", id: "#relatedCompanies" },
  { label: "פרויקטים לדוגמה", id: "#contact" },
  { label: "הצהרת נגישות", id: "#contact" },
]

export function LinksMenu() {
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
      </div>
    </div>
  )
}
