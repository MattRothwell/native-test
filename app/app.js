import React from 'react'
import {
	TouchableHighlight, 
	Text,
	View, 
	StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import fetchPeopleFromAPI from './actions'

let style

const App = (props) => {
	const {
		container, text, button, buttonText
	} = styles
	const {
		people, isFetching
	} = people
	return (
		<View styles={container}>
			<Text style={text}> Redux App </Text>
			<TouchableHighlight onPress={props.getPeople} style={button}>
				<Text style={buttonText}>Fetch Data</Text>
			</TouchableHighlight>
			{
				isFetching && <Text>Loading</Text>
			}
			{
				people.length ?(
					people.map((person, index) => {
						return (
							<View>
								<Text> Name: {person.name}</Text>
								<Text>Birth Year: {person.birth_year}</Text>
							</View>
						)
					})
				) : null
			}
		</View>

	)
}

styles= StyleSheet.create({
	container: {
		marginTop: 100,
		paddingLeft: 20, 
		paddingTop: 20
	},
	text: {
		textAlign:'center'	
	},
	button:{
		backgroundColor: '#0b7eff',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText:{
		color: 'white'
	}
})
function mapStateToProps(state){
	return {
		people: state.people
	}
}

function mapDispatchToProps(dispatch){
	return {
		getPeople: () => dispatch(fetchPeopleFromAPI())
	}
}

export default(mapStateToProps, mapDispatchToProps)(App)