import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { deepOrange400 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import HackerNewsApp from './reducers';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';


const client = axios.create({
	baseURL: 'https://hacker-news.firebaseio.com/v0',
	responseType: 'json' 
})


let store = createStore(
	HackerNewsApp, 
	applyMiddleware(
		logger,
		axiosMiddleware(client),
		thunk
		)
	);


const muiTheme = getMuiTheme({
	palette: {
		primary1Color: deepOrange400
	}
})

injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider muiTheme={muiTheme}>
					<Provider store={store}>
						<App />
					</Provider>
				</MuiThemeProvider>
				, document.getElementById('root'));
registerServiceWorker();



