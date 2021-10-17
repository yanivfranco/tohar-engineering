import React from "react"

import GatsbyImage from "gatsby-image"

type Props = {
  image: any
  className?: string
  verticalPosition?: "top" | "bottom"
  horizontalPosition?: "left" | "right"
}

function Image({
  horizontalPosition,
  image,
  verticalPosition,
  className,
}: Props) {
  const classname = `image ${
    className ?? ""
  } ${verticalPosition} ${horizontalPosition}`

  return (
    <div className={classname}>
      <GatsbyImage fluid={image?.childImageSharp?.fluid} />
      {!horizontalPosition || !verticalPosition ? null : (
        <div className="image_square" />
      )}
    </div>
  )
}

export default Image
