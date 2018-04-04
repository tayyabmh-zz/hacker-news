import { connect } from 'react-redux';
import ListComponent from '../components/newsList/list_component.js';
import { changeURL } from '../actions';


const mapStateToProps = (state) => {
	return {
		posts: state.List.posts,
		loading: state.List.loading
	}
}


const mapDispatchToProps = dispatch => {
	return {
		onLinkClick: (id,text) => {
			dispatch(changeURL(text))
		}
	}
}


const FinalNewsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListComponent);

export default FinalNewsList;