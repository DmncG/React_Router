import React from 'react';
import ReactDOM from 'react-dom';
import Banana from './component/App';


require('../scss/main.scss')
console.log("I have been bundled!!!")

ReactDOM.render(
	<Banana />,
	document.getElementById('app')
)

