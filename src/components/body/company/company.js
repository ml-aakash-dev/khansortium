import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import '../../../css/body/company/company.css'

class company extends Component {
    render() {
        return (
            <div className="company">
                <Row>
                    <Col className="col left" xs={12} xl={6}></Col>
                    <Col className="col right" xs={12} xl={6}>
                        <span>
                            <h1>THE COMPANY</h1>
                            <span className="heading-border"></span>
                            <p>
                                The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.
                                <br/>
                                <br/>
                                Beautiful nature, and rare feathers!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla
                            </p>
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default company
