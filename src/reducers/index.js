import { combineReducers } from 'redux';
import List from './newsList';
import browserURL from './browserURL';

const HackerNewsApp = combineReducers({
	List,
	browserURL
})



export default HackerNewsApp;