import { element } from '../lib/style.js';

const render = ({ config, output, error, side }) => {
	var style = {
		...element,
		...config.style,
		float: side
	};
	return error ? (
		<span style={style}>!</span>
	) : (
		<span style={style}>
			<i className="fa fa-microchip"></i> {output}
		</span>
	);
};

export default render;
