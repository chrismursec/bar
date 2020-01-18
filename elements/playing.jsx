import { element } from '../lib/style.js';

const render = ({ config, output, error, data }) => {
	let style = song => {
		if (song) {
			return {
				...element,
				...config.style,
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
