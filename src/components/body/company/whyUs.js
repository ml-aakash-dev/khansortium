import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import $ from 'jquery'

import '../../../css/body/company/whyUs.css'

class whyUs extends Component {
    componentDidMount = () => {

        var animatorTeaserL = $('.why-us');
        var winHeight = $(window).height();
        if (animatorTeaserL.length) {
            var firEvent = false,
                objectPosTop = $('.why-us').offset().top+400;
                
                //when element shows at bottom
                var elementViewInBottom = objectPosTop - winHeight;
            $(window).on('scroll', function() {
                var currentPosition = $(document).scrollTop();
                //when element position starting in viewport
              if (currentPosition > elementViewInBottom && firEvent === false) {
                firEvent = true;
                progressAnimation();
              }   
            });
        }

        function progressAnimation(){
            document.getElementById('html-line').style.width="100%"
            document.getElementById('css3-line').style.width="94%"
            document.getElementById('jquery-line').style.width="89%"
            document.getElementById('mysql-line').style.width="78%"
            document.getElementById('php-line').style.width="75%"
            document.getElementById('html-percentage').style.opacity="1"
            document.getElementById('css3-percentage').style.opacity="1"
            document.getElementById('jquery-percentage').style.opacity="1"
            document.getElementById('mysql-percentage').style.opacity="1"
            document.getElementById('php-percentage').style.opacity="1"
        } 
    }
    render() {
        return (
            <div className="why-us">
                <Row>
                    <Col className="col left" xs={12} xl={6}>
                        <span>
                        <h5>Know More About Our Company</h5>
                        <h1>WHY CHOOSE US</h1>
                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel</p>
                        <div className="progress-anim">
                            <h2>HTML5</h2>
                            <h3 id="html-percentage">100%</h3>
                        </div>
                        <div className="progress-line" id="html-line"></div>
                        <div className="progress-anim">
                            <h2>CSS3</h2>
                            <h3 id="css3-percentage">94%</h3>
                        </div>
                        <div className="progress-line" id="css3-line"></div>
                        <div className="progress-anim">
                            <h2>JQUERY</h2>
                            <h3 id="jquery-percentage">89%</h3>
                        </div>
                        <div className="progress-line" id="jquery-line"></div>
                        <div className="progress-anim">
                            <h2>MYSQL</h2>
                            <h3 id="mysql-percentage">78%</h3>
                        </div>
                        <div className="progress-line" id="mysql-line"></div>
                        <div className="progress-anim">
                            <h2>PHP</h2>
                            <h3 id="php-percentage">75%</h3>
                        </div>
                        <div className="progress-line" id="php-line"></div>
                        </span>
                    </Col>
                    <Col className="col right" xs={12} xl={6}>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default whyUs
