import { theme } from './lib/style.js';
import parse from './lib/parse.js';
import dataModel from './lib/data.model.js';
import {
	Battery,
	Cpu,
	Ip,
	Time,
	Workspaces,
	Playing,
	MediaButtons,
	Weather,
	Disk,
	Speed
} from './elements/index.jsx';
export const refreshFrequency = 1000;

const barStyle = {
	bottom: 0,
	right: 0,
	left: 0,
	position: 'fixed',
	background: theme.background,
	overflow: 'hidden',
	color: theme.text,
	height: '27px',
	fontFamily: 'Helvetica',
	fontSize: '14px',
	boxShadow: '0px 2px 5px 0 #000000'
};

export const command = './bar/scripts/shell.sh';

export const render = ({ output, error }) => {
	let data = dataModel;
	let shellData = parse(output);

	if (shellData != undefined) {
		data = shellData;
	}

	let content = (
		<div style={barStyle}>
			<link
				rel="stylesheet"
				type="text/css"
				href="bar/assets/font-awesome/css/all.min.css"
			/>
			{/* Left */}
			<Workspaces />

			<MediaButtons />

			{/* Right */}

			<Disk diskSpaceData={data.device.disk} />
			<Cpu cpuUsageData={data.device.cpu} />

			<Speed downloadSpeedData={data.network.downloadSpeed} />
			{/* <Ip ipAddressData={data.network.ip} /> */}

			<Weather
				temperatureData={data.weather.temperature}
				conditionData={data.weather.weatherCondition}
			/>

			<Playing spotifyPlayingData={data.media.spotify} />
			{/* <Time /> */}
			{/* <Battery
				data={data.battery.percentage}
				charge={data.battery.charging}
			/> */}
		</div>
	);
	return content;
};
