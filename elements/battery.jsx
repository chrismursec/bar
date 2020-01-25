import { element } from '../lib/style.js';

const render = ({ data, charge, error }) => {
	let batColor = level => {
		let batLevel = parseInt(level);

		if (batLevel > 80) return '#97c475';
		else if (batLevel > 55) return '#e5c07b';
		else if (batLevel > 30) return '#d09a6a';
		return '#e06c75';
	};

	let style = level => {
		return {
			...element,
			float: 'right',
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
			{/* <span>{data}</span> */}

			{/* <span> {<i className={'far fa-' + charging(charge)}></i>}</span> */}
			{/* <span style={iconStyle}>
				<i className={'far fa-' + iconName(data)}></i>
			</span> */}
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
