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
			icon: 'fa fa-terminal',
			running: 'false'
		},
		{
			name: 'Chrome',
			shortcut: 'chrome',
			icon: 'fab fa-chrome',
			running: chrome
		},
		{
			name: 'VSCode',
			shortcut: 'code',
			icon: 'fas fa-code',
			running: code
		},
		{
			name: 'Spotify',
			shortcut: 'spotify',
			icon: 'fab fa-spotify',
			running: spotify
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
		// let borderStyle = '';
		// if (app.running === 'true') {
		// 	borderStyle = '1px solid green';
		// }
		return (
			<span
				style={spaceStyle(2, data)}
				key={app.name}
				onClick={() => run('open ' + shortcutsUrl + app.shortcut)}
			>
				{/* <div style={{ borderBottom: borderStyle }}> */}
				<i className={app.icon}></i>
				{/* </div> */}
			</span>
		);
	});

	let workspaces = <span style={style}>{apps}</span>;

	return workspaces;
};

export default render;
