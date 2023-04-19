# Task Tracker
> Manage daily tasks, set reminders to meet deadlines, always stay productive.

Task Tracker is a personal project that provides a SPA application with CRUD functionality to enable users 
to manage their daily tasks using a clean and interactive UI.

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

> NB: This project uses SFCs and follows the Options API style in Vue.js 3  

## Installing/Getting Started
This sections serves to help setup and run the project locally.  

### Prerequisites
- Node.js
- npm

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

The command above installs the dependencies in the local node_modules folder.

Start the development server and run the application.  
Once started, you can access the application on the default port: http://localhost:8080/  
You can run the application with the following command:

- Run development server
``` shell
    # cd project/root/dir
    $ npm run serve
```

This will execute the `vue-cli-service serve` command defined under `serve` in the `package.json` file.

> NB: You'll need to start the backend server in order for Vue to fetch application data. See details in the [Database](#database)

## Database
The lightweight [JSON Server] was used as quick and easy solution to provide persistent storage for tasks. JSON Server acts a quick back-end for prototyping and mocking. Data can be viewed and easily modified in JSON format, exposed through an API. See, `taskDB.json` to view app data. You can access the mock backend server and database on the defined port: http://localhost:5000/
You can run the backend server with the following command:

- Run backend server
``` shell
    $ npm run backend
```

This will execute the `json-server --watch taskDB.json --port 5000` command defined under `backend` in the `package.json` file.

## Production
This section serves to help setup the project for a production environment by compiling and minifying files.  
You can build for production with the following command:

- Build for production
``` shell
    $ npm run build
```

This will execute the `vue-cli-service build` command defined under `build` in the `package.json` file.

#### Customize configuration
See the official [Configuration Reference] for additional details.

## License
For a repository to indeed be open source, you'll need to _license_ it so that others are free to use, change, and distribute the software. This project ensures this using the [MIT license]. 
Find the full original text version of the license [here]. Follow the 
instructions to apply the right to your repository.


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does 
its job. There is no need to format nicely because it shouldn't be seen. 
Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[article]: <https://www.digitalocean.com/community/tutorial_series/how-to-install-node-js-and-create-a-local-development-environment>
[JSON Server]: <https://www.npmjs.com/package/json-server>
[Configuration Reference]: <https://cli.vuejs.org/config/>
