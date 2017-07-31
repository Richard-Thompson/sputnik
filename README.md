# Sputnik Tech Test

This project is a static website mocking up the jpg image of a website page provided by sputnik.

The first task was to construct the navigation bar of the website. I used bulma and the columns feature to make the tabs of the navigation bar and used a max width for the logo and tabs, this allowed me to float the entire nav bar in the middle.

I created the hero image by setting the image provided as a background image and the placing all the text within a div which had the css background image set. Again i used a max width for the text and floated it in the middle by setting margin to 0 auto.

The services and products section was created by setting the image to 100% width and 100% height and making the text section 60% width until the screen resolution hits 1100px; due to the image being disorted below this i then set the image to 50% width and the same with the text until it reached a mobile screen resolution where i set the flex direction to column.

I would approach the next section by using position absolute and z-index of 2 and position with left, right, top ,bottom. The gardients i would achieve by using linear css gradients and color pick from the image provided.

I spent approximately 3 days on the project and would predict i would need another 2-3 days to complete it.

## Getting Started

To obtain a copy of this project you will need to follow the instructions below:

-Clone the project

-Install the Dependencies 

and then carry out the following command:

    npm run dev

and then go to localhost:9080 to view the project
    

## Prerequisites

### Node:

Ensure node is installed on your machine

For compatability issues please note that this project used node version 7.5.0

### NPM:

Ensure that npm is installed on your machine

## Built With

* [Node](https://nodejs.org/en/docs/) - Javascript runtime 
* [NPM](https://docs.npmjs.com/) - Dependency Management
* [Webpack](http://webpack.github.io/docs/) - Module bundler
* [React](https://facebook.github.io/react/) - Javascript library for user-interfaces
* And others.

## Authors

* **Richard Thompson** - *Initial work* - [Richard Thompson](https://github.com/Richard-Thompson)
