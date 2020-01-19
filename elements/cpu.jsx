import { element } from '../lib/style.js';

const render = ({ data, error }) => {
	var style = {
		...element,
		float: 'left'
	};
	return error ? (
		<span style={style}>!</span>
	) : (
		<span style={style}>
			<i className="fa fa-microchip"></i> {data}
		</span>
	);
};

export default render;
