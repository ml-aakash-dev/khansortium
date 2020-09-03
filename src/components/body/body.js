import React, { Component } from 'react'

import Header from './header/header'
import Company from './company/company'
import WhyUs from './company/whyUs'

class body extends Component {
    render() {
        return (
            <div>
                <Header />

                <Company />

                <WhyUs />
            </div>
        )
    }
}

export default body
