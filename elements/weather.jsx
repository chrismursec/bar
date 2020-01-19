import { element } from '../lib/style.js';

const render = ({ data }) => {
	var style = {
		...element,
		float: 'left'
	};
	return (
		<span style={style}>
			<i className="fa fa-cloud" style={{ paddingRight: '5px' }}></i>
			{data}
		</span>
	);
};

export default render;
