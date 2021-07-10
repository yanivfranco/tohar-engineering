import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

interface Props {
  title: string
  description?: string
  url: string
  image?: string
  article?: string
}
const SEO = ({ title, description, image, article, url }: Props) => {
  const { pathname } = useLocation()

  // Facebook pixel
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("track", "'PageView'")
      }
    }
  }, [])

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {pathname && <meta property="og:url" content={`${url}${pathname}`} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {image && <meta property="og:image" content={image} />}
      </Helmet>
    </div>
  )
}

export default SEO
