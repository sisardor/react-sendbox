import React, { Component } from 'react';
import { bindActionCreators,
		combineReducers } 	from 'redux';
import { connect } 			from 'react-redux';

// local
import { TASK_ASSETS } 		from '../constants/ActionTypes';
import { fetchAssets } 		from '../actions/entityActions';



function loadData(props) {

	props.fetchAssets('fantastic', props.category);
}


class PanelOne extends Component {
	fetch() {
		console.log('fetch', this.props)
		loadData(this.props);
	}

	render() {
		var stub5 = this.props
		// debugger

		const { category, entities, subAssets } = this.props;

		console.log(entities, subAssets)
		return (
			<div className='project-library library-panel'>
				<p>Type: {category}</p>
				<ul>
					{
						entities.map(function(entity) {
							console.log(entity)
							return <li key={entity.id}>{entity.name} - type: {entity.category}</li>
						})
					}
				</ul>
				{subAssets}
				<button onClick={::this.fetch}>Load More</button>
			</div>
		);
	}

	handleLoadMoreClick() {
  		console.log('handleLoadMoreClick')
    	this.props.loadLibraryEntity('fantastic', this.props.category);
  	}
}


function select (state) {
	var stub4 = TASK_ASSETS

	const { assets: { entities, subAssets } } = state

	var result  = {
		category: TASK_ASSETS,
		entities: entities,
		subAssets: subAssets
	};

	// debugger
	return result;
}

export default connect(select, {fetchAssets})(PanelOne);