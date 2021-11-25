## Mechanical ventilation control

Using hue2mqtt (ledstrip controller hue), zigbee2mqtt (for aqara) and node-red

sensor-graph is for visualization of the aqara sensors. It's a reacts app which runs on httpd. httpd proxies /nodered to node-red container.
https://github.com/DH1994/sensor-chart

Flow in node-red controls mv box, using humidity values from Aqara sensors. If difference in humidity between bedroom and bathroom is more than 15, the speed of the mv box will increase dependent of the humidity percentage.

### hardware
- hue gledopto led controller (https://www.123led.nl/Gledopto-Zigbee-led-strip-controller-Wit-Werkt-met-Philips-Hue-Gledopto-i7788-t7018.html)
- opamp with some resistors. The gledopto led controller has inverted output voltage. 
- Zehnder Combofan S P

example:
```
 --------------------------
| + 12 Controller  12 +    | - Always 12 v
| - 0            0 - 12 -  | - When 100 % 0 v, when 50 % 6 v   
 --------------------------
```

I used a lm741 and a couple of resistors. The ventilation unit I used had a terminal containing a 12 v output and a 0 - 10 v input. The input and outputhas a common ground. I used this scheme to create a inverting amplifier: https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Op-Amp_Inverting_Amplifier.svg/1280px-Op-Amp_Inverting_Amplifier.svg.png

### Requirements
- hue bridge
- zigbee stick
- raspberry pi or other linux device with docker
- docker and docker-compose packages

### Configuration of zigbee2mqtt and Aqara sensors

First ensure mosquitto is running, expose port 1883 temporary. 

Zigbee2mqtt must connect to a mqtt broker. Ensure that the path to the zigbee USB (in my case /dev/ttyACM0) is the right path. Edit data/configuration.yaml and set permit_join to true.

Use mosquitto_sub to subscribe on /zigbee2mqtt/# or check logs of zigbee2mqtt container. 

Connect Xiaomi Aqara temp sensors and get the ids.

Set permit_join to false. 

### Configure hue2mqtt

Create a api token on the hue box and configure in hue2mqtt/hue2mqtt.toml. Build the hue2mqtt using the Dockerfile in hue2mqtt. Used this project from (https://github.com/trickeydan/hue2mqtt-python), works great :)

Check if it's possible to change the brightness of the controller connected to the hue bridge. Check logs or mosquitto_sub for the connected id's on the hue bridge. 

example:
`mosquitto_pub -h pi:1883 -t /hue2mqtt/id/set -m '{"bri": 50}'`

### Configure node-red
Start node-red and configure the id's of the aqara sensors and the led controller in the mqtt nodes. 

### Configure sensor-chart
Clone sensor-chart repo and run `npm run build`. Copy build dir to httpd-container directory. Build this container with the dockerfile in httpd-container.

Sensor-chart queries http://ip-adress-or-hostname/nodered/sensors for it's configuration. httpd proxies the request to the node-red container. Container name must be node-red or the configuration of httpd must be changed. 

Configuration of sensor-chart is create in node-red using yaml. Check node sensor-configuration in sensorcharts. 

The endpoints to get the sensor data are also configured using http nodes in sensorcharts. 
