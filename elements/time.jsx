import strftime from '../lib/strftime.js';
import { element } from '../lib/style.js';
import { run } from 'uebersicht';

const render = ({ error }) => {
	let time = strftime('%A  %e %b %Y | %l:%M%P', new Date());
	var style = {
		...element,

		float: 'right',
		backgroundColor: 'rgb(44,50,60)',
		padding: '0 15px'
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
