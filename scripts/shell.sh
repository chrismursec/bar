#!/bin/sh

BATTERY=$(pmset -g batt | egrep '([0-9]+\%).*' -o --colour=auto | cut -f1 -d';')
CHARGE=$(pmset -g batt | egrep "'([^']+).*'" -o --colour=auto |cut -f1 -d';')

CPU=$(ps -A -o %cpu | awk '{s+=$1} END {print s "%"}')
DISK=$(df -H | grep '/dev/disk1s1' | awk '{ print $4 }')

IP=$(curl -s checkip.dyndns.org|sed -e 's/.*Current IP Address: //' -e 's/<.*$//')
SPEED=$(/usr/local/bin/speedtest --simple --no-upload | awk 'NR==2{ print; }')
WIFI_STATUS=$(ifconfig en0 | grep status | cut -c 10-)
WIFI_SSID=$(networksetup -getairportnetwork en0 | cut -c 24-)

TEMPERATURE=$(curl -s wttr.in/Stockport?format=%t)
WEATHERCONDITION=$(curl -s wttr.in/London?format="%C")

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

if pgrep -x "Google Chrome" > /dev/null
then
    CHROME_RUNNING=true
else
    CHROME_RUNNING=false
fi

if pgrep -f "Code" > /dev/null
then
    CODE_RUNNING=true
else
    CODE_RUNNING=false
fi

if pgrep -x "Spotify" > /dev/null
then
    SPOTIFY_RUNNING=true
else
    SPOTIFY_RUNNING=false
fi


echo $(cat <<-EOF
  {
	  "battery": {
		  "percentage": "$BATTERY",
		  "charging": "$CHARGE"
	  },
	  "network": {
		  "ip": "$IP",
		  "downloadSpeed": "$SPEED",
		  "wifiStatus": "$WIFI_STATUS",
		  "wifiSSID": "$WIFI_SSID"
	  },
	  "device": {
		  "disk": "$DISK",
		  "cpu": "$CPU"
	  },
	  "weather": {
		  "temperature": "$TEMPERATURE",
		  "weatherCondition": "$WEATHERCONDITION"
	  },
	  "media": {
		  "spotify": "$SPOTIFY"
	  },
	  "openApps": {
		  "chrome": "$CHROME_RUNNING",
		  "vscode": "$CODE_RUNNING",
		  "spotify": "$SPOTIFY_RUNNING"
	  }
  }
EOF
)