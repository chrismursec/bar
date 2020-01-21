import { theme } from './lib/style.js';
import {
	Battery,
	Cpu,
	Ip,
	Time,
	Workspaces,
	Playing,
	Weather,
	Disk,
	Speed
} from './elements/index.jsx';
export const refreshFrequency = 5000;

const barStyle = {
	bottom: 0,
	right: 0,
	left: 0,
	position: 'fixed',
	background: theme.background,
	overflow: 'hidden',
	color: theme.text,
	height: '25px',
	fontFamily: 'Cascadia Code',
	fontSize: '.9rem',
	boxShadow: '0px 2px 5px 0 #000000'
};

const result = (data, key) => {
	try {
		return JSON.parse(data)[key];
	} catch (e) {
		return '';
	}
};

export const command = `
BAT=$(pmset -g batt | egrep '([0-9]+\%).*' -o --colour=auto | cut -f1 -d';')
CHARGE=$(pmset -g batt | egrep "'([^']+).*'" -o --colour=auto |cut -f1 -d';')
CPU=$(ps -A -o %cpu | awk '{s+=$1} END {print s "%"}')
DISK=$(df -H | grep '/dev/disk1s1' | awk '{ print $4 }')
SPEED=$(/usr/local/bin/speedtest --simple --no-upload | awk 'NR==2{ print; }')
WEATHER=$(curl -s wttr.in/Stockport?format=%t)
IP=$(curl -s checkip.dyndns.org|sed -e 's/.*Current IP Address: //' -e 's/<.*$//')
SPOTIFY=$(osascript -e 'tell application "System Events"
set processList to (name of every process)
end tell
if (processList contains "Spotify") is true then
tell application "Spotify"
if player state is playing then
set artistName to artist of current track
set trackName to name of current track
return artistName & " - " & trackName
else
return ""
end if
end tell
end if')


echo $(cat <<-EOF
  {
	"battery": "$BAT",
	"cpu": "$CPU",
	"ip": "$IP",
	"disk": "$DISK",
	"speed": "$SPEED",
	"weather": "$WEATHER",
	"charging": "$CHARGE",
    "playing": "$SPOTIFY"
  }
EOF
);
`;

export const render = ({ output, error }) => {
	if (error) {
		console.log(new Date());
		console.log(error);
		console.log(String(error));
	}
	let content = (
		<div style={barStyle}>
			<link
				rel="stylesheet"
				type="text/css"
				href="bar/assets/font-awesome/css/all.min.css"
			/>
			<Workspaces side="left" />

			<Cpu data={result(output, 'cpu')} />
			<Disk data={result(output, 'disk')} />

			{/* <Ip data={result(output, 'ip')} /> */}
			<Speed data={result(output, 'speed')} />
			<Weather data={result(output, 'weather')} />

			<Playing data={result(output, 'playing')} />
			<Time />
			<Battery
				data={result(output, 'battery')}
				charge={result(output, 'charging')}
			/>
		</div>
	);
	return content;
};
