import { connect } from 'react-redux';
import NavComponent from '../components/Navigation.js';
import { fetchData } from '../actions';




const mapStateToProps = (state) => {
	return {
		links: state.List
	}
}


const mapDispatchToProps = dispatch => {
	return {
		onRefreshClick: () => {
			dispatch(fetchData('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty'))
		}
	}
}


const FinalNavigation = connect(null,mapDispatchToProps)(NavComponent);

export default FinalNavigation;