import React, { Component } from 'react'

import Header from './header/header'
import Company from './company/company'
import WhyUs from './company/whyUs'
import Banner from './company/banner'
import Services from './services'
import OurBlog from './ourBlog'
import OurClients from './ourClients'

class body extends Component {
    render() {
        return (
            <div>
                <Header />

                <Company />

                <WhyUs />

                <Banner />

                <Services />

                <OurBlog />

                <OurClients />
            </div>
        )
    }
}

export default body
