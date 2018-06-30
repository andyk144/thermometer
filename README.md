# JavaScript Thermostat

Makers week 5 project, an introduction to JavaScript. The task was to build a simple thermostat, and learn to hook it up to a dynamic visual interface using jQuery - all within the browser. Once we had a UI built, we were asked to use JavaScript to fetch data from external sources and display that on the page.

In addition to JavaScript and jQuery, I used Node.js for my web server and the Express web framework. I also used the Bootstrap CSS framework to help with styling the thermostat UI.  


## Getting Started

To get started, clone a copy of this repository using:

```JavaScript
https://github.com/andyk144/thermostat.git
```

### Installing

Once you have cloned the repository, navigate to it using

```JavaScript
cd thermostat
```

You'll need to ensure you have downloaded Node, you can do so by:

Download the required installer:
1. Go to https://nodejs.org/en/
2. Select the button to download the LTS build that is "Recommended for most users".
3. Install Node by double-clicking on the downloaded file and following the installation prompts.

Then run
```
npm install
```
This will install all of the necessary dependencies required to run the application.

### Usage

To run the application using your local server, enter the following command in the terminal (ensure you are in the root folder of the directory):

```JavaScript
DEBUG=thermometer:* npm start
```

This will start the Node server

![Alt test](/images/npm_install.png?raw=true "Node Server")

Navigate to http://localhost:3000 (or whichever port your server is running on) and the app will be up and running.

## Running the tests

To run the tests, open **SpecRunner.html** in your chosen browser.

![Alt test](/images/tests.png?raw=true "Jasmine tests")  


## Built With

* [JavaScript](https://www.javascript.com/) - programming language
* [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express](https://expressjs.com/) - Node.js web application framework
* [jQuery](https://jquery.com/) - JavaScript library
* [OpenWeatherMap](https://openweathermap.org/) - Weather API


## Screenshot

![Alt test](/images/screenshot.png?raw=true "Thermostat Web Interface")
