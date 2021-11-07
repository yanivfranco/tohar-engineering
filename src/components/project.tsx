import React, { useState } from "react"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import Image from "./ui/image"
import Slider from "react-slick"

type Props = {
  className?: string
  images: any[]
  title: string
  text: string
}

function Project({ className, text, title, images }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(images[0])
  const classname = `single_project ${className ?? ""} `

  return (
    <Fade bottom delay={320}>
      <Modal
        size={"xl"}
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
      >
        <Container className="single_project_modal">
          <Row>
            <Col lg={6}>
              <Image image={currentImage} />
            </Col>
            <Col lg={6}>
              <h4>{title}</h4>
              <div>{text}</div>
            </Col>
          </Row>
          <Row className="small_pictures">
            {images.map((imageItem, i) => (
              <Col onClick={() => setCurrentImage(imageItem)}>
                <Image image={imageItem} />
              </Col>
            ))}
          </Row>
          <Button onClick={() => setIsModalOpen(false)}>סגור</Button>
          <div className="citylines" />
        </Container>
      </Modal>
      <div onClick={() => setIsModalOpen(true)} className={classname}>
        <Image
          image={images?.[0]}
          horizontalPosition="right"
          verticalPosition="top"
          className="single_project_image"
        />
        <h6 className="project_title">{title}</h6>
        <p>{"לחץ לעוד פרטים ותמונות"}</p>
      </div>
    </Fade>
  )
}

export default Project
