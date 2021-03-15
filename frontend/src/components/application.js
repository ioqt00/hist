import React from 'react'
import './application.css'

import { Search } from './search'
import { Map } from './map'
import { Timeline } from './timeline'
import { Marker } from './marker'

export class Application extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			selectedArticles: []
		}
	}

	selectArticle (article) {
		this.setState({ selectedArticles: [...this.state.selectedArticles, article ]})
	}

	render () {
		return (
			<>
				<div className="content-container">
					<Search onArticleSelect={article => this.selectArticle(article)} />
					<div className="timeline-container">
						<Timeline />
					</div>
				</div>
				<Map>
					{this.state.selectedArticles.map(article => {
						return <Marker location={article.place}></Marker>
					})}
				</Map>
			</>
		)
	}
}