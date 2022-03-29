import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/layout/Layout';
import './index.scss';

import {Provider} from 'react-redux'

import store from './store/store'

document.title="Dashboard Admin"


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Layout />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


