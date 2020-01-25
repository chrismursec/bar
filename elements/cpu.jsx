import { element } from '../lib/style.js';

const render = ({ cpuUsageData }) => {
	let cpuUsage = parseFloat(cpuUsageData);

	const cpuColor = () => {
		let color = '';
		if (cpuUsage < 75) color = '#5cb85c';
		if (cpuUsage >= 75) color = '#f0ad4e';
		if (cpuUsage >= 100) color = '#d9534f';

		return color;
	};

	let style = {
		...element,
		float: 'right',
		borderBottom: `1px solid ${cpuColor()}`,
		borderWidth: '50%'
	};

	return (
		<span style={style}>
			<i className="fa fa-microchip"></i> {cpuUsageData}
		</span>
	);
};

export default render;
