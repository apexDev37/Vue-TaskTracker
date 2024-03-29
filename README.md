# Task Tracker
> Manage daily tasks, set reminders to meet deadlines, always stay productive.

Task Tracker is a SPA application with CRUD functionality to enable users to manage their daily tasks using a clean and interactive UI. The motivation behind it was to delve into Vue.js 3.

<img src="./resources/mockups/default.PNG" alt="Index" width="20%"><img src="./resources/mockups/add-task.PNG" alt="Add task" width="25%"><img src="./resources/mockups/update-task.PNG" alt="Update task" width="22%"><img src="./resources/mockups/about.PNG" alt="About page" width="20%">

### Features:
- Create new tasks to accomplish
- View the current list of tasks ordered by date created
- Update existing tasks as completed
- Delete old tasks
- Set reminders for a task's due date

### Technologies
- [HTML5]
- [CSS3]
- [JavaScript]
- [Vue.js]
- [Babel]
- [JSON server]

> ℹ This project uses SFCs and follows the [Options API] style in Vue.js 3  

## Installing/Getting Started
> This sections serves to help setup and run the project locally.  

### Prerequisites
- [Node.js]
- [npm]

Here's a great [article] from Digital Ocean to install Node.js incase you don't have it. 


### Local Setup
Currently, this repo has a single branch, `master`.  
You can clone this repo with the following command.

- Clone repository
``` shell
    # cd your/desired/target/dir
    $ git clone https://github.com/apexDev37/Vue-TaskTracker.git
    $ cd Vue-TaskTracker
```

This will clone a copy of the repository to a given location on your local machine and navigate to the repo's root dir.

### Development
Install the required packages and application dependencies.  
Run the command below to initiate the install.

- Install dependencies
``` shell
    # cd project/root/dir
    $ npm install
```

The command above installs the dependencies in the local `node_modules` folder.

Start the development server and run the application.  
Once started, you can access the application on the default port: http://localhost:8080/  
You can run the application with the following command:

- Run development server
``` shell
    # cd project/root/dir
    $ npm run serve
```

This will execute the `vue-cli-service serve` command defined under `serve` in the [package.json](./package.json) file.

<img src="./resources/terminal/vuejs.PNG" alt="Index" width="80%">

> ⚠ You'll need to start the backend server for Vue to fetch application data via an api interface. See details in the [Database](#database) section.

## Database
The lightweight [JSON Server] was used as quick and easy solution to provide persistent storage for tasks. JSON Server acts a quick back-end for prototyping and mocking. Data can be viewed and easily modified in JSON format, exposed through an API. See, [taskDB.json](./taskDB.json) to view app data.  
Access the mock backend server on the defined port: http://localhost:5000/tasks  
You can run the backend server with the following command:

- Run backend server
``` shell
    $ npm run backend
```

This will execute the `json-server --watch taskDB.json --port 5000` command defined under `backend` in the [package.json](./package.json) file.

<img src="./resources/terminal/backend.PNG" alt="Index" width="80%">

## Production
> This section serves to help setup the project for a production environment by compiling and minifying files.  

You can build for production with the following command:

- Build for production
``` shell
    $ npm run build
```

This will execute the `vue-cli-service build` command defined under `build` in the [package.json](./package.json) file.

<img src="./resources/terminal/build.PNG" alt="Index" width="80%">

#### Customize configuration
See the official [Configuration Reference] for additional details.

## License
For a repository to indeed be open source, you'll need to _license_ it so that others are free to use, change, and distribute the software. This project ensures this using the [MIT license]. 
Find the full original text version of the license [here](./LICENSE). Follow the 
instructions to apply the right to your repository.


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does 
its job. There is no need to format nicely because it shouldn't be seen. 
Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[HTML5]: <https://developer.mozilla.org/en-US/docs/Glossary/HTML5>
[CSS3]: <https://developer.mozilla.org/en-US/docs/Web/CSS>
[JavaScript]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript>
[Vue.js]: <https://vuejs.org/>
[Babel]: <https://babeljs.io/>
[JSON Server]: <https://www.npmjs.com/package/json-server>
[Options API]: <https://vuejs.org/guide/introduction.html#api-styles>

[Node.js]: <https://nodejs.org/en>
[npm]: <https://www.npmjs.com/>


[article]: <https://www.digitalocean.com/community/tutorial_series/how-to-install-node-js-and-create-a-local-development-environment>
[Configuration Reference]: <https://cli.vuejs.org/config/>

[MIT license]: <https://en.wikipedia.org/wiki/MIT_License>