# Work-Day-Scheduler
An application to plan daily activities using an automatic clock 

## Description
This application utilizes JavaScript, Jquerry, and moment() to create a task manager application. The user can write any task and the data will be saved in local storage. There is also a custom css style that will also use moment to let the user know if the task was in a current, past, or future hour. The application also displays the current date in the heading. Bootstrap was used for layout and styling, Fontawesome was used for the save icons.

## Usage
As you open the page you will be presented with the empty scheduler, you will write your task in the text space provided between the hour, and the save icon. Click on save and the task will be saved to local storage, retrieval, and display every time you load the page. To delete a task, delete the text and click on save.

## Algorithm/Tools
The moment library was implemented to execute most of the time-based task. Local storage was used to save each task.

### JQuery Selectors
Multiple instances of selectors were used either to listen for an event or to dynamically generate elements in the DOM of the website.

### Events
Event listeners were implemented to listen to clicks and to retrieve attributes from certain elements used. 


### CSS/Bootstrap
Styling was also applied to the document to have a more aesthetic view for the project.

## Page URL
https://endres2.github.io/Work-Day-Scheduler/