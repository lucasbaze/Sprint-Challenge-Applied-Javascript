# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

##Answer
The DOM is the Document Object Model. As the name implies, it is a object that presents the Model (data) of the Document that is rendered in the browser. The DOM takes the HTML and CSS that it is given and converts it into an object the browser and other programs can manipulate and understand. The DOM is represented by a "node tree" and is combined with a CSSOM (styles) to create the render tree that is painted onto the screen.

2. What is an event?

##Answer
An event is any type of interaction with the browser from the user. This includes and is not limited to: loading a document, clicking on an element, scrolling, resizing the window, moving the mouse, loading a resource, failing to load a resource, etc...

3. What is an event listener?

##Answer
And event listener is a function that "listens" for "events". It binds an event to the object and then takes a callback function to execute when the listener event has been triggered.

4. Why would we convert a NodeList into an Array?

##Answer
A NodeList has a limited number of functions that can be used, but because it is an iterable item, it can be converted to an Array and thus give us the ability to use more powerful Array methods.

5. What is a component?

##Answer
A component is a function that is designed to be reused in multiple locations. Typically a component is a self-contained set of html, css, and js that can be used to create semi-customizable and reusable elements. This includes things like cards, buttons, headers, paragraphs, list items, etc...

### Git Set up

-   [ ] Fork the project into your GitHub user account
-   [ ] Clone the forked project into a directory on your machine
-   [ ] Create a pull request before you start working on the project requirements. You will continuously push your updates throughout the project.
-   [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

-   [ ] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

-   [ ] Following the instructions in the `Header/index.js` file, create the Header component.

-   [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

-   [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

-   [ ] Complete the carousel functionality in `Carousel.js`

-   [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

-   [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

-   [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
