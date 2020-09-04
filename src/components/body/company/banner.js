import React, { Component } from 'react'

import '../../../css/body/company/banner.css'

class banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="image-wrapper">
                    <div className="content">
                        <h1>Join by April 27 and Win $200 in Programs and Services</h1>
                        <p>This is a simple hero unit, a simple call-to-action-style component for calling extra attention to featured content.</p>
                        <button className="btn btn-outline-light">CALL US NOW!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default banner
