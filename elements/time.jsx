import strftime from '../lib/strftime.js';
import { element, theme } from '../lib/style.js';
import { run } from 'uebersicht';

const render = ({ config, output, error, side, theme }) => {
	let time = strftime(config.format, new Date());
	var style = {
		...element,
		...config.style,
		float: side
	};

	return error ? (
		<span style={style}>!</span>
	) : (
		<span style={style}>
			<i
				className="far fa-calendar"
				style={{ padding: '0 10px 0 0' }}
				onClick={() =>
					run('open $HOME/.config/ubersicht/shortcuts/Calendar')
				}
			></i>
			{time}
			<i className="far fa-clock" style={{ padding: '0 0 0 10px' }}></i>
		</span>
	);
};

export default render;
