import React from 'react'
import { Marker as ReactMapGLMarker } from 'react-map-gl'
import './marker.css'

export class Marker extends React.Component {

    constructor (props) {
        super(props)

        const { location, latitude, longitude } = props

        this.state = {
            location: location,
            latitude: latitude,
            longitude: longitude
        }

    }

    componentDidMount () {
        if (this.state.location) {
            fetch (`https://nominatim.openstreetmap.org/search/${this.state.location}?format=json`)
                .then(response => { 
                    return response.json()
                })
                .then(result => {
                    this.setState({
                        latitude: parseFloat(result[0].lat),
                        longitude: parseFloat(result[0].lon)
                    })
                })
        }
    }

    render () {
        if (this.state.latitude && this.state.longitude) {
            return (
                <ReactMapGLMarker {...this.props} latitude={this.state.latitude} longitude={this.state.longitude}>
                    <div className="pin"></div>
                </ReactMapGLMarker>
            )
        }
        return null
    }
    
}