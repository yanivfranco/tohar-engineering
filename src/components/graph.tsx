import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Fade from "react-reveal/Fade"
import GatsbyImage from "gatsby-image"

export function Graph() {
  const data = useStaticQuery(graphql`
    query {
      lines: file(relativePath: { eq: "lines.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      graph: file(relativePath: { eq: "graph.png" }) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 2000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="graph ptb-40">
      <div className="graph_background">
        <GatsbyImage
          imgStyle={{ objectFit: "cover" }}
          fluid={data.lines.childImageSharp.fluid}
          style={{ height: "100%" }}
        />
      </div>
      <div className="graph_image">
        <Fade bottom>
          <GatsbyImage
            fluid={data.graph.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover" }}
          />
        </Fade>
      </div>
    </section>
  )
}
