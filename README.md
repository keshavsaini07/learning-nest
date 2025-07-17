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

6. Folder Structure: We are basically setting up a MVC architecture where things can be handled efficiently with clean code practices and DRY (Dont Repeat Yourself) principle.

7. Express Support Inbuilt: As Nest is built on top of express, you can use the annoattions like req, res, etc. how they work in express to get more freehand in Nest. 
    - You can do this by using Req and Res decorators from nestjs library and Request and Response object from express. 
    ``` 
        getCustomer(@Req() req: Request, @Res() res: Response) {}
    ```

8. GET Request and Response: Implemented both the express and nest versions of fetching an id from the service layer.
    - Nest Way: You can directly return the details if found or throw an HttpException if anything goes wrong. The ParseIntPipe transforms string type to number (int) type.
    ```
    @Get('/search/:id')
    searchCustomerById(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.findCustomerById(id);
        if (customer) {
        return customer;
        } else {
        throw new HttpException('Not Found!', HttpStatus.BAD_REQUEST);
        }
    }
    ```
9. POST Requests: We can do a better way rather than imitating express way of accesing body from req object.
    - DTO (Data Transfer Object) is think of it like a schema, it defines how data is going to be sent over network from client to server. 
    - Its disadvantage is that it doesn't support consistent data.
    - A schema of how the request body is gonna look like. A dto will not actually look like your model.

10. Validation: It is best practice to validate the correctness of any data sent into a web application. To automatically validate incoming requests, Nest provides several pipes available right out-of-the-box:
    - ValidationPipe, ParseIntPipe, ParseBoolPipe, ParseArrayPipe, ParseUUIDPipe
    - The ValidationPipe provides a convenient approach to enforce validation rules for all incoming client payloads, where the specific rules are declared with simple annotations in local class/DTO declarations in each module.
    - We will use class-validator library to enforce the validation rules on the dto.
    - We also looked into nested validation using @IsNotEmptyObject() from class-validator and @ValidationNested() decorator with @Type() decorator. 

11. Dependency Injection : NestJS uses dependency injection (DI) because it offers significant advantages over directly importing and instantiating classes, especially in larger applications. While importing works for simple cases, DI in NestJS provides better testability, flexibility, and maintainability by decoupling components and allowing for dynamic configuration. 
    - We will also see how injection in nest works with an example where a service is to be injected through a provider. This will be done in the form of a token carrying the name of service (provide) and it location (useClass).

12. Serialization (Filtering Passwords) : erialization is a process that happens before objects are returned in a network response. This is an appropriate place to provide rules for transforming and sanitizing the data to be returned to the client. For example, sensitive data like passwords should always be excluded from the response.
    - For this we will setup another controller that will help us exclude certain properties from being sent back.
    - We will leverage plainToClass, which is a function from the class-transformer library used to convert a plain JavaScript object (like a request body or data from a database) into an instance of a specific class (typically a DTO or an entity).
    - The primary purpose of the *@Exclude()* decorator is to omit a specific property of a class from the serialized output when an instance of that class is transformed into a plain JavaScript object or JSON. This is particularly useful for: Security, Data Filtering, Reducing Payload Size
    - *@UseInterceptors()* is a decorator used to bind interceptors to a specific scope within your application. Interceptors are classes that implement the NestInterceptor interface and provide a way to add extra logic before or after method execution, transform responses, or handle errors. 
    - The *ClassSerializerInterceptor* is a built-in interceptor designed to automatically serialize objects returned from route handlers. It leverages the class-transformer package to achieve this, providing a declarative way to transform and filter data before it's sent as a response to the client.

13. Middleware: are useful if you want additional code to be executed right before it reaches the route handler, perform validation, or check if req object has specific header, or modufy request or response objects. It is a good to way separate things that dont belong to the controller logic in a middleware. They also support Dependency Injection.
    - You need to use the configure() function in your module file to apply the middleware to a specific endpoint or the whole controller file.
    - You can use both class-based and function-based middlewares. There is also a thing called global middleware very similar to express using use(). 

14. Exception Filters: Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application. When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an appropriate user-friendly response.

14. Connecting MySQL using TypeORM: You can use any other type of ORM you want like Sequelize/Prisma if you want. Its pretty standard to use ORM in production level apps, lets you focus more on interacting with your database without having to worry about writing sql because it provides an api for interaction thus writing code relevant to your codebase, less likely to occur sql injections and preparing your statements for you, and overall increasing your productivity.
    - Entities: These are classes that are annotated with @Entity decorator. You can use them to describe your mysql schema for tables. And typeorm will translate the entity from a class into a mysql table.
    - Synchronize: allows you to auto create schemas and of you update things such as column names or types the orm will synchronize automatically. Set this to false in production mode bcoz you can lose data.
    - Migrations: In production mode you use something like migrations, which is when you modify table structure or updating anything youn create a migration for it to prevent data loss.

15. Saving Data to Database: Atleast in Nestjs,it is recommended to saving stuff to db that should be handled in service layer. If you come from a springboot background, you are used to do it in the repository layer. We will carry out everything in the service layer and lets just keep the work for repository layer in future.
    - In order to actuallly save the user to database, we need to inject the repository. In typeorm, repository is something that helps you interact with database similarly like sequelize.

16. Repository Layer: The repository pattern in an application provides an abstraction layer between the application's business logic and the data access layer (e.g., a database). This pattern encapsulates the logic for retrieving and storing data, making the application more modular, testable, and maintainable.

17. Authentication: Setup local authentication using passport with own  username and password. To protect your application and grant access to the users who you want i.e. non authenticated users aren't allowed to access restricted apis. User provides their credentials with a token and validate that in the backend with the database.
    - Guards: In NestJS, @UseGuards() is a decorator used to apply one or more Guards to a controller or a specific route handler. Guards are a core feature of NestJS that enable access control and authorization logic. They determine whether a given request should be allowed to proceed to the route handler based on certain conditions. 
    - For authentication, clients will start by authenticating with a username and password. Once authenticated, the server will issue a JWT that can be sent as a bearer token in an authorization header on subsequent requests to prove authentication. We'll also create a protected route that is accessible only to requests that contain a valid JWT. 
    - For each strategy, Passport will call the verify function (implemented with the validate() method in @nestjs/passport) using an appropriate strategy-specific set of parameters. 
    - For the local-strategy, Passport expects a validate() method with the following signature: validate(username: string, password:string): any. You can change the usernameField in LocalStrategy to make any field like *email* below to be used as the username for verification: 
    ``` 
        super({
            usernameField: 'email',
        });
    ```

18. Hashing Passwords: Once you hash something, you cannot get its value back. So, it is a bit different from encryption because you can decrypt something after an encryption using a key. We check by hashing th epassword provided by client and comparing with the hashed password saved in db.
    - hashSync(): for hashing passwords.
    - compareSync(): for comparing raw and hasehed passwords.

19. Sessions: Important for any application to have state because by default http request are stateless and they dont tell anything about previous requests like who logged in, who the user is. Sessions will generate an id for that and it will be used as a cookie.
    - As soon as you modify a session i.e. manually update the session object, that is when its considered as initialized. 

20. Integrating Passport with Sessions:
    - SerializeUser(): it tells passport how to serialize user to the database
    - DeserializeUser(): it will take the session, unpack it and take the id or user whatever that is stored in the session. It will search for the user and then provide the user object so you know who is actually authenticated.
    - We need to use custom Guards by extending the AuthGuard.
    - Guards can be used to protect our routes.