import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import Flip from "react-reveal/Flip"

export function Companies() {
  const data = useStaticQuery(graphql`
    query {
      toharTech: file(relativePath: { eq: "logos/tohartech.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }

      toharfly: file(relativePath: { eq: "logos/toharfly.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }

      toharHr: file(relativePath: { eq: "logos/toharHr.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }

      shield: file(relativePath: { eq: "logos/shield.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }

      tzalool: file(relativePath: { eq: "logos/tzalool.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }

      toharEng: file(relativePath: { eq: "logos/toharEng.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }

      toharGroup: file(relativePath: { eq: "logos/toharGroup.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 5000) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const rightLogos = [
    {
      link: "https://www.tohartech.com",
      component: <GatsbyImage fluid={data.toharTech.childImageSharp.fluid} />,
    },
    {
      link: "https://www.tohargroup.com",
      component: (
        <GatsbyImage
          fluid={data.toharfly.childImageSharp.fluid}
          imgStyle={{}}
        />
      ),
    },
    {
      link: "https://www.tohargroup.com",
      component: <GatsbyImage fluid={data.toharHr.childImageSharp.fluid} />,
    },
  ]

  const leftLogos = [
    {
      link: "https://www.tzalool.co.il",
      component: <GatsbyImage fluid={data.tzalool.childImageSharp.fluid} />,
    },
    {
      link: "https://www.tohargroup.com",
      component: <GatsbyImage fluid={data.toharEng.childImageSharp.fluid} />,
    },
    {
      link: "https://www.shield.co.il",
      component: <GatsbyImage fluid={data.shield.childImageSharp.fluid} />,
    },
  ]

  const logoCard = (logo: JSX.Element, link: string, isSmall: boolean) => (
    <a className="companies_logoAnimation" href={link} target="__blank">
      <div className={`companies_logo ${isSmall ? "small" : "big"}`}>
        <div className="companies_logoImage">{logo}</div>
      </div>
    </a>
  )

  return (
    <section className="companies ptb-40">
      <div className="companies_logosContainer">
        <div className="companies_logos_right">
          {rightLogos.map((logo, i) =>
            logoCard(logo.component, logo.link, /*isSmall*/ true)
          )}
          <div className="companies_lines" />
        </div>

        <div className="companies_logos_center">
          {logoCard(
            <GatsbyImage fluid={data.toharGroup.childImageSharp.fluid} />,
            "",
            /*isSmall*/ false
          )}
        </div>

        <div className="companies_logos_left">
          {leftLogos.map((logo, i) =>
            logoCard(logo.component, logo.link, /*isSmall*/ true)
          )}
          <div className="companies_lines" />
        </div>
      </div>
    </section>
  )
}
