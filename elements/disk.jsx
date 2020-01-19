import { element } from '../lib/style.js';

const render = ({ data }) => {
	let style = {
		...element,
		float: 'left'
	};

	let diskInt = parseInt(data);

	const diskLevel = () => {
		const fullDisk = 256;
		let color = '';
		if (fullDisk - diskInt <= 100) color = '#97c475';
		else if (fullDisk - diskInt <= 128) color = '#e5c07b';
		else if (fullDisk - diskInt <= 200) color = '#d09a6a';

		return color;
	};

	return (
		<span style={style}>
			<i
				className="fa fa-hdd"
				style={{ paddingRight: '5px', color: diskLevel() }}
			></i>
			{data}
		</span>
	);
};

export default render;
