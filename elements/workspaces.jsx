import { element } from '../lib/style.js';
import { run } from 'uebersicht';
const shortcutsUrl = '$HOME/.config/ubersicht/shortcuts/';
const render = ({ data, chrome, code, spotify }) => {
	let style = {
		...element,
		float: 'left'
	};

	let appData = [
		{
			name: 'iTerm',
			shortcut: 'iterm',
			icon: 'fa fa-terminal'
		},
		{
			name: 'Chrome',
			shortcut: 'chrome',
			icon: 'fab fa-chrome'
		},
		{
			name: 'VSCode',
			shortcut: 'code',
			icon: 'fas fa-code'
		},
		{
			name: 'Spotify',
			shortcut: 'spotify',
			icon: 'fab fa-spotify'
		}
	];

	let spaceStyle = (position, space) => {
		let style = {
			height: '23px',
			display: 'inline-block',
			padding: '0 8px'
		};

		return style;
	};

	let apps = appData.map(app => {
		return (
			<span
				style={spaceStyle(2, data)}
				key={app.name}
				onClick={() => run('open ' + shortcutsUrl + app.shortcut)}
			>
				<i className={app.icon}></i>
			</span>
		);
	});

	return <span style={style}>{apps}</span>;
};

export default render;
