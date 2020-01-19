import { element } from '../lib/style.js';

const render = ({ data, error }) => {
	let style = song => {
		if (song) {
			return {
				...element,
				width: '100%',
				textAlign: 'center',
				position: 'fixed',
				bottom: '0',
				left: '0',
				width: '100%'
			};
		} else {
			return { display: 'none' };
		}
	};

	let iconStyle = {
		color: '#1fd662',
		padding: '0 10px'
	};

	return error ? (
		<span style={style('err')}>!</span>
	) : (
		<span style={style(data)}>
			<i className="fab fa-spotify" style={iconStyle}></i>
			{data}
		</span>
	);
};

export default render;
