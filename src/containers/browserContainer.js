import { connect } from 'react-redux';
import Browser from '../components/browser/browserFrame.js';


const mapStateToProps = (state) => {
	return {
		url: state.browserURL
	}
}


const FinalBrowser = connect(mapStateToProps)(Browser);


export default FinalBrowser;