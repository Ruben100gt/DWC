import React, { useState } from 'react';
import './ContadorLikes.css';

const ContadorLikes = () => {
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);

	const incrementarLikes = () => {
		setLikes(likes + 1);
	};

	const incrementarDislikes = () => {
		setDislikes(dislikes + 1);
	};

	return (
		<>
			<h2>Contador de Likes</h2>
			<div className="likes-div">
				<button onClick={incrementarLikes}>+1 Like</button>
				Likes: {likes}
			</div>
			<div className="dislikes-div">
				<button onClick={incrementarDislikes}>+1 Dislike</button>
				Dislikes: {dislikes}
			</div>
		</>
	);
};

export default ContadorLikes;
