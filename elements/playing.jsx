import { element } from '../lib/style.js';

const render = ({ spotifyPlayingData }) => {
	let style = song => {
		if (song) {
			return {
				...element,
				width: '100%',
				textAlign: 'center',
				position: 'fixed',
				bottom: '0',
				left: '0'
			};
		} else {
			return { display: 'none' };
		}
	};

	let iconStyle = {
		color: '#1fd662',
		padding: '0 10px'
	};

	return (
		<span style={style(spotifyPlayingData)}>
			<div>
				<i className="fab fa-spotify" style={iconStyle}></i>
				{spotifyPlayingData}
			</div>
		</span>
	);
};

export default render;
