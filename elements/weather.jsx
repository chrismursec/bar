import { element } from '../lib/style.js';

const render = ({ config, data, side }) => {
	var style = {
		...element,
		...config.style,
		float: side
	};
	return (
		<span style={style}>
			<i className="fa fa-cloud" style={{ paddingRight: '5px' }}></i>
			{data}
		</span>
	);
};

export default render;
