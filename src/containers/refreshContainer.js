import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import RefreshButton from '../components/newsList/refreshButton';





const mapDispatchToProps = dispatch => {
	return {
		onRefreshClick: () => {
			dispatch(fetchPosts())
		}
	}
}

const FinalRefreshButton = connect(null,mapDispatchToProps)(RefreshButton);

export default FinalRefreshButton;