# Code-Quiz- Javascript, HTML & CSS

## Description
This is a timed coding quiz with multiple-choice questions. This app runs in the browser and dynamically updates HTML and CSS powere by Javascript.

* [Github Repository](https://github.com/ValFin96/Code-Quiz-Javascript)

* [Deployed Application Link](https://valfin96.github.io/Code-Quiz-Javascript/)

## Prerequisites
To install the application, you will need any text editor.

## How it works
A user presented with 5 multiple choice questions that he/she needs to answer within 75 seconds. 

![Screenshot-1](./assets/images/Screenshot%201.jpg)

The user is prompted whether their choice was wrong or correct.

![Screenshot-2](./assets/images/Screenshot%202.jpg)

Every wrong answered question penalises the player by 10 seconds. 

![Screenshot-3](./assets/images/Screenshot%203.jpg)

Final score is calculated by the remaining time. A player is prompted to enter initials after all questions to display the score on the leaderboard. 

![Screenshot-4](./assets/images/Screenshot%204.jpg)

Then the user can eithe rplay again or clear the record.

![Screenshot-5](./assets/images/Screenshot%205.jpg)

## How is it built

The project consists of 2 javascript files, 2 html files and 1 css file.
Inside the script.js file 5 functions that control full functionality of the quiz and the scores.js file is responsible for retrieving values from local storage and displaying it on the leaderboard.