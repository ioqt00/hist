import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map, accessToken } from 'mapbox-gl'

import styles from './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			lng: 5,
			lat: 34,
			zoom: 2
		}
	}

	componentDidMount() {

		accessToken = 'pk.eyJ1IjoiZWNvbGllciIsImEiOiJjazI1NzZ3ZmExM3FjM2JtenV4Mnh3cDRrIn0.mcsGHcjg39qS96guD20ayg'

		const map = new Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom,
		})
	}

	search (query) {
		if (query.length === 0) {
			this.setState({
				data: []
			})
			return
		}

		fetch(`api/docs?search=${query}`)
			.then(response => {
				if(response.status > 400) {
					return this.setState(() => {
						return { placeholder: 'Something went wrong!' } 
					})
				}
				return response.json()
			})
			.then(data => {
				this.setState({
					data: data
				}) 
			})
	}

	render() {
		return (
			<>
				<div className="content-container">
					<div className="search-container">
						<div className="search">
							<input type="text" className="search__input" placeholder="Search for any article" onChange={e => this.search(e.target.value)}></input>
							<i className="material-icons-round search__icon">search</i>
						</div>
						{this.state.data.length !== 0 &&
							<div className="result-container">
								{this.state.data.map(item => {
									return <div className="result">{item.title}, {item.place}</div>
								})}
							</div>
						}
					</div>
				</div>
				<div ref={el => this.mapContainer = el} className="mapContainer"></div>
			</>
		)
	}
} 

export default App

const container = document.getElementById('app')
render(<App />, container)
