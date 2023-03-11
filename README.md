# Github Project Timeline
This project is a small responsive web application that consumes an API created in NodeJs and SailsJS to render all the commits done in an especific project.

## Features  

- Load all the commits related done in `github-timeline-api`
- E2E Tests

# Table of contents  
1. [Tech Stack](https://github.com/joxedanielc/github-project-timeline#tech-stack)  
2. Code Explanation
    1. [API](https://github.com/joxedanielc/github-project-timeline#api)
    2. [Utils](https://github.com/joxedanielc/github-project-timeline#utils)
4. [Run Locally](https://github.com/joxedanielc/github-project-timeline#run-locally)  
5. [Feedback](https://github.com/joxedanielc/github-project-timeline#feedback)
6. [License](https://github.com/joxedanielc/github-project-timeline#license)

## Tech Stack  

**Client:** React, Nextjs, Typescript, Boostrap, MUI

## Code Explanation  

### API

The file `github-api.ts` contains the logic to both call the url provided concatenated with the username and repository name and also normalize the data to an interface to use the response in order to render the data.

### Utils

The file `utils.ts` contains the interfaces to create the expected objects with its properties, and the functions that handle the set of data.

## Run Locally  

### Important: 

Run the project [github-timeline-api](https://github.com/joxedanielc/github-timeline-api) first.

Clone the project  

~~~bash  
  git clone https://github.com/joxedanielc/github-project-timeline.git
~~~

Go to the project directory  

~~~bash  
cd github-project-timeline
~~~

Install dependencies  

~~~bash  
npm install
~~~

Start the server  

~~~bash  
npm run dev
~~~

To run e2e test (you NEED to start the backend before)

~~~bash  
npx playwright test
~~~
or if you'd like to see the test on the browser:
~~~bash  
npx playwright test --debug
~~~

## Feedback  

If you have any feedback, please leave a comment.

## License  

[MIT](https://choosealicense.com/licenses/mit/)
