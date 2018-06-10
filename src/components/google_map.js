import React, { Component } from 'react';


class GoogleMap extends Component {
    static defaultProps = {
        center: { lat: 40.7446790, lng: -73.9485420 },
        zoom: 11
      }
    render(){
        return (
            <div className='google-map'>
              <GoogleMapReact
                defaultCenter={ this.props.center }
                defaultZoom={ this.props.zoom }>
               
              </GoogleMapReact>
            </div>
          )
    }
}

export default GoogleMap;