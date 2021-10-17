import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import Image from "./ui/image"
import Slider from "react-slick"

type Props = {
  className?: string
  images: any[]
  title: string
  text: string
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
}

function Project({ className, text, title, images }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const classname = `single_project ${className ?? ""} `

  return (
    <Fade bottom delay={320}>
      <Modal
        size={"xl"}
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
      >
        <div className="single_project_modal">
          <Slider {...settings}>
            {images.map((imageItem, i) => (
              <Image image={imageItem} />
            ))}
          </Slider>
          <h2>{title}</h2>
          <div>{text}</div>
          <Button onClick={() => setIsModalOpen(false)}>סגור</Button>
        </div>
      </Modal>
      <div onClick={() => setIsModalOpen(true)} className={classname}>
        <Image
          image={images?.[0]}
          horizontalPosition="right"
          verticalPosition="top"
        />
        <p>
          <h5 className="project_title">{title}</h5>
          {"לחץ לעוד פרטים ותמונות"}
        </p>
      </div>
    </Fade>
  )
}

export default Project
