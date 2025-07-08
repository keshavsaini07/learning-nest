1. Nestjs is a  web framework that helps you built backend applications in nodejs. Nestjs is built on top of express, so many of the modules such as passportactually works in nestjs. So you dont need to re-learn everything all over again from scratch.

- Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular.

2. Installation: 
    - To scaffold the project with the Nest CLI, run the following commands. This will create a new project directory, and populate the directory with the initial core Nest files and supporting modules, creating a conventional base structure for your project.
    ```
        $ npm i -g @nestjs/cli
        $ nest new project-name
    ```
    -  Creating a new project with the Nest CLI is recommended for first-time users providing you with all the neccessary files and options.
    - Type the command *nest -v* to check for successfull installation. - Use the command *nest* for viewing all the commands 
    
3. Modules: A module is a class that is annotated with the @Module() decorator. This decorator provides metadata that Nest uses to organize and manage the application structure efficiently.
    - use nest cli to create a customer module:
    ``` nest g module <module-name> ```

4. Controllers : Controllers are responsible for handling incoming requests and sending responses back to the client.
    - To create a basic controller, we use classes and decorators. Decorators link classes with the necessary metadata, allowing Nest to create a routing map that connects requests to their corresponding controllers.
    - use nest cli to create a customer controller inside the customer module specifying the directory of the controller to be inserted:
    ``` nest g contoller <directory> ```

5. Services: A service is a layer where all the business logic is handled with, instead of overwhleming and engaging the controller layer with the businesss logic. 
    - use nest cli to create a customer service:
    ``` nest g service <directory> ``
