import React, { Fragment, useState } from "react"

export const links = [
  { label: "אודות", id: "#about" },
  { label: "בעלי הקבוצה", id: "#owners" },
  { label: "חברות בת", id: "#relatedCompanies" },
  { label: "צור קשר", id: "#contact" },
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
