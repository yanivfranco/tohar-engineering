import ScrollToTop from "react-scroll-up"
import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const ScrollArrow = () => {
  const data = useStaticQuery(graphql`
    query {
      arrow: file(relativePath: { eq: "arrow.png" }) {
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
    <ScrollToTop showUnder={100}>
      <div className="scrollArrow">
        <GatsbyImage fluid={data.arrow.childImageSharp.fluid} />
      </div>
    </ScrollToTop>
  )
}

export default ScrollArrow
