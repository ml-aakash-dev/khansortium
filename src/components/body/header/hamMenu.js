import React, { Component } from 'react'

import '../../../css/body/header/hamMenu.css'

class hamMenu extends Component {
    render() {
        return (
            <div className="ham-menu">
                <ul>
                    <li>
                        HOME
                    </li>
                    <li>
                        LAYOUT
                    </li>
                    <li>
                        FEATURES
                    </li>
                    <li>
                        ELEMENTS
                    </li>
                    <li>
                        PAGES
                    </li>
                    <li>
                        PORTFOLIO
                    </li>
                    <li>
                        BLOG
                    </li>
                    <li>
                        SHOP
                    </li>
                </ul>
            </div>
        )
    }
}

export default hamMenu
