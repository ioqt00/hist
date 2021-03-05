import React from 'react'
import './search.css'

export class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            results: []
        }
    }

    search (query) {
		if (query.length === 0) {
			this.setState({
				results: []
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
					results: data
				}) 
			})
	}

    render () {
        return (
            <div className="search-container">
                <div className="search">
                    <input type="text" className="search__input" placeholder="Search for any article" onChange={e => this.search(e.target.value)}></input>
                    <i className="material-icons-round search__icon">search</i>
                </div>
                {this.state.results.length !== 0 &&
                    <div className="result-container">
                        {this.state.results.map(item => {
                            return <div className="result">{item.title}, {item.place}</div>
                        })}
                    </div>
                }
            </div>
        )
    }
}