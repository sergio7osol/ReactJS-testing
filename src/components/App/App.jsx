import React from 'react';
import './App.css';

import CommentBox from 'components/CommentBox/CommentBox';
import CommentList from 'components/CommentList/CommentList';

const App = () => {
	return (
		<div className="app App--margin-top-md container">
			<h2 className="text-center">I am the App component.</h2>
			<CommentBox />
			<CommentList />
		</div>
	);
};

export default App;
