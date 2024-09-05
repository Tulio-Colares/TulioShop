import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const date = new Date()

  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center'>
                    TulioShop &copy; {date.getFullYear()}
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer