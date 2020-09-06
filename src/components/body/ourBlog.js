import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import '../../css/body/ourBlog.css'
import Img1 from '../../assets/our-blog/our-blog1.jpg'
import Img2 from '../../assets/our-blog/our-blog2.jpg'
import Img3 from '../../assets/our-blog/our-blog3.jpg'

class ourBlog extends Component {
    render() {
        return (
            <div className="our-blog" id="our-blog">
                <h1>OUR BLOG</h1>
                <span className="heading-border"></span>
                <p>
                    The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, 
                    vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true 
                    story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut
                    venenatis eu, sodales vel dolor.
                </p>
                <Row>
                    <Col xs={12} sm={6} lg={4} className="col">
                        <div className="card">
                            <img src={Img1} alt="lighthouse" />
                            {/* <span className="date">Jan 21, 2017</span> */}
                            <div className="content">
                                <h1>Standard post with a single image</h1>
                                <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. \
                                Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="col">
                        <div className="card">
                            <img src={Img2} alt="teacup" />
                            <div className="content">
                                <h1>Standard post with a single image</h1>
                                <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. \
                                Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="col">
                        <div className="card">
                            <img src={Img3} alt="lights" />
                            <div className="content">
                                <h1>Standard post with a single image</h1>
                                <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. \
                                Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ourBlog
