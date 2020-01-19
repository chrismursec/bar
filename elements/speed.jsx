import { element } from '../lib/style.js';

const render = ({ data }) => {
	let style = {
		...element,
		float: 'left'
	};

	const formatSpeed = () => {
		var regex = /[+-]?\d+(\.\d+)?/g;
		var float = data.match(regex);

		return parseFloat(float);
	};
	const speedLevel = () => {
		let speed = formatSpeed();
		let color = '';
		if (speed >= 80) color = '#97c475';
		else if (speed > 80) color = '#e5c07b';
		else if (speed > 30) color = '#d09a6a';

		return color;
	};

	return (
		<span style={style}>
			<i
				className="fa fa-download"
				style={{ paddingRight: '5px', color: speedLevel() }}
			></i>
			{formatSpeed()}
		</span>
	);
};

export default render;
