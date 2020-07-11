import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Style from './kv.module.scss'
function Kv(){
    return(
        <div className={Style.wrap}>
            <Container className={Style.content}>
                <Row>
                    <Col sm={12} className="mx-auto">
                        <div className={Style.overlay}></div>
                        <div className={Style.siteHeading}>
                            <h1>Ray Blog</h1>
                            <span>Produce By Aoyama</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Kv