
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	Text 				} 	from 'react-native';
import 		strings 				from '../../properties/strings';
import 		style 					from '../../styles/header';

export default connect (

	state => ({
		currencies : state.currencies
	})

) ( class Header extends React.Component {

	render () {

		if ( this.props.currencies.loading ) {

			return (
				<Text style = { style.default.title }>
					{ strings.actions.loading }
				</Text>
			);
		}

		return ( 
			<Text style = { style.default.title }>
				{ strings.screens.currencies.title.replace ( '{{length}}' , this.props.currencies.items.length )}
			</Text>
		);
	}
});