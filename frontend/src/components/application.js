import React from 'react'
import './application.css'
import { Search } from './search'
import { Map } from './map'
import { Timeline } from './timeline'

export class Application extends React.Component {
	render () {
		return (
			<>
				<div className="content-container">
					<Search />
				</div>
				<Map />
				<div className="timeline-container">
					<Timeline />
				</div>
			</>
		)
	}
} 