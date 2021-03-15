import React from 'react'
import ReactMapGL from 'react-map-gl'
import './map.css'
import config from './config.json'
import 'mapbox-gl/dist/mapbox-gl.css';

export class Map extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
			viewport: {
                width: '100%',
                height: '100%',
                latitude: 46,
                longitude: 2,
                zoom: 4
            } 
		}
    }

    render () {
        return (
            <ReactMapGL 
                {...this.state.viewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxApiAccessToken={config.mapboxApiKey}
                onViewportChange={nextViewport => this.setState({viewport: nextViewport})}>
                    {this.props.children}
            </ReactMapGL>
        )
    }
}