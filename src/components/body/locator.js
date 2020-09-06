import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

import '../../css/body/locator.css'

class locator extends Component {
    render() {
        const style = {
            position: 'relative',
            width: '100%',
            height: '60vh'
            }
        return (
            <div className="locator" id="locator">
                <Map 
                google={this.props.google} 
                zoom={10}
                initialCenter={{
                lat: -37.8136,
                lng: 144.9631
                }}
                style={style}>
                    <Marker />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBmFOOpGfwDilHaxqgiOqoOCuCcBVXgSis')
   })(locator)
