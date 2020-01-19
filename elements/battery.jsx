import { element } from '../lib/style.js';

const render = ({ output, error, side, config, data, charge }) => {
	let batColor = level => {
		var level = parseInt(level);

		if (level > 80) return '#97c475';
		// Green
		else if (level > 55) return '#e5c07b';
		// Yellow
		else if (level > 30) return '#d09a6a'; // Orange
		return '#e06c75'; // Red
	};

	let style = level => {
		return {
			...element,
			...config.style,
			float: side,
			color: batColor(level)
		};
	};

	let iconStyle = {
		padding: '0 0 0 10px',
		fontSize: '16px'
	};

	let charging = charge => {
		let isCharging = false;
		if (charge === "'AC Power'") {
			isCharging = true;
		}
		return isCharging;
	};

	let showBolt = () => {
		if (charging(charge)) return 'bolt';
	};

	let iconName = level => {
		var level = parseInt(level);
		if (level > 80) return 'battery-full';
		if (level > 60) return 'battery-three-quarters';
		if (level > 40) return 'battery-half';
		if (level > 20) return 'battery-quarter';
		return 'battery-empty';
	};

	return error || data == 0 ? (
		<span style={style(0)}></span>
	) : (
		<span style={style(data)}>
			<span>{data}</span>

			<span> {<i className={'far fa-' + charging(charge)}></i>}</span>
			<span style={iconStyle}>
				<i className={'far fa-' + iconName(data)}></i>
			</span>
			<span style={iconStyle}>
				<i
					className={'far fa-' + showBolt()}
					style={{ color: '#97c475' }}
				></i>
			</span>
		</span>
	);
};

export default render;
