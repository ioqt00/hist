import React from 'react'
import Mapbox from 'mapbox-gl'
import mapboxStyle from 'mapbox-gl/dist/mapbox-gl.css'
import './map.css'

export class Map extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
			lng: 5,
			lat: 34,
			zoom: 2
		}
    }

    componentDidMount () {
        Mapbox.accessToken = 'pk.eyJ1IjoiZWNvbGllciIsImEiOiJjazI1NzZ3ZmExM3FjM2JtenV4Mnh3cDRrIn0.mcsGHcjg39qS96guD20ayg'

		const map = new Mapbox.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom,
		})
    }

    render () {
        return (
            <div ref={el => this.mapContainer = el} className="map-container"></div>
        )
    }
}