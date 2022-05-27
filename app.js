// Section 10 - Lesson 72 - SERVER

/*

//////////////// Section 10 - Lesson 72 - Project Directories Setup ////////////////

Step 1: On the terminal, install npm => npm init

//////////////// Section 10 - Lesson 73 - Initializng our Server ////////////////

Step 2: Install Express module => nmp install express
Step 3: Require Express
Step 4: Create an app from Express function
Step 5: Create a listener
Step 6: Execute the file on the terminal with nodemon
    => It says "listening on port 4500"

//////////////// Section 10 - Lesson 74 - Setting up Home Page ////////////////

Step 7: Make sure that our application accepts static files because we will use some CSS, Javascript...
    - Do the middleware with "use" function and bring the Express static methode "express.static"
    - Let's include a the path module that we are going to be needing here, let's do path
        => this is a built in module, so we don't need to download it and remember that it comes with node out of the box
    - Now that we have our path included here, let's go ahead and create this "path.join" to include our directory
        =>  I want to make sure that my application is a little bit more dynamic and I want to make sure that wherever I am, is going to basically joined together with the public.
    
Step 8: Create a route
    => it says " it works" on http://localhost:4500/

Step 9: In the "views" folder create other folders called: 
    - "home"
    - "layouts", because we are going to be using another module called "Handlebars" that is going to look by default for a layout folder where we are going to be keeping our layouts.
        => inside "layouts", create a file called "home.handlebars"
            - inside "home.handlebars", copy the content from "index.html" in "BLOG-HOME" folder in the templates folder

Step 10: Install the module Express Handlebars => npm install express-handlebars

Step 11: Require Express Handlebars => const exphbs = require('express-handlebars');

Step 12: Set the Template Engine "Handlebars" to see the HTML data inside "home.handlebars"
    - First parameter, the location => 'handlebars'
    - Second parameter, the Handlebars module
        => Inside, we pass an object with a built-in key called "defaultLayout"
        => And we give the name of the layout that we want it to look for called "home"

Step 13: Use the function called "render"
    - res.render();
        => every time I go ahead and use a function here called "render", this "render" function automatically is going to look in the "views" directory
        => and because we're setting up the template engine (Step 12), this here is going to be looking into the default layout folder here inside the views for some file called "home"
    - Inside the "home" folder, create a file called "index.handlebars"
    - render the file "index" in the directory "home" => res.render('home/index');

Step 14: Make sure that our application recognise this template engine as a view engine
    - app.set('view engine', 'handlebars');

Step 15: Execute the file on the terminal with nodemon and on the browser http://localhost:4500/
    => On the terminal, it says "listening on port 4500"
    => On the browser, it displays the data from "home.handlebars"

Q& A Lesson 74 - TypeError: exphbs is not a function
    => Make sure to install exact same version of express-handlebars as the one used in the course. In package.json make sure that you have 3.1.0 version.


//////////////// Section 10 - Lesson 75 - Dynamic Page Content and Getting Styles to Work ////////////////

Step 16: Include some CSS inside our "public" folder
    - Copy "blog-home.css" from "PROJECT-TEMPLATE-ASSETS\PROJECT-TEMPLATE-ASSETS\BLOG-HOME\css" and paste in "public/css" folder
    - Copy "bootstrap.min.css" from "PROJECT-TEMPLATE-ASSETS\PROJECT-TEMPLATE-ASSETS\BLOG-HOME\vendor\bootstrap\css" and paste it in "public/css" folder

Step 17: Go back to "home.handlebars" file
    - link "blog-home.css" and "bootstrap.min.css"

Step 18: Execute the file on the terminal with nodemon
    - Now, the browser displays the page with the CSS styles

Now, we do need to make a couple changes because right now it's just showing our template, but it is not showing some of the pages that we want.

Step 19: Create another route
    - Copy the route from Step 8 and Step 13 and paste it below it
    - put a route called "about"
    - create a file in the "home" folder called "about.handlebars"
    - inside, about.handlebars, create a h1 called "About"
    - render 'home/about'

OK, now we want to render something, but in order for the render to work, we need to go to our template and tell it: Listen, I want you to show me dynamic content. I  don't want you to show me this page all the time.
So, for us to actually make it works, we need to use this "home.handlebars" as a template, as what it was meant to be.
So what I want to do is I want to take out a lot of stuff out of here and take it to the index.

Step 20: On "home.handlebars" take everything from "div class=row" and paste it in "index.handlebars"



Step 21: Now, we want to make sure that whatever route we make it has its own content, and by doing that, we need to make sure that our template is showing dynamic data.
    => {{{body}}}

Step 22: Make some changes on "index.handlebars"
    - <h1 class="my-4">Home

Step 23: Go to the "about" page on the browser http://localhost:4500/about,
    => It displays
        - About (h1) from "about.handlebars"
        - the top navigation and the footer from "home.handlebars"

OK, so now we have our application showing dynamic data by just doing a simple change here on "home.handlebars" with this
variable {{{body}}}

We also have our application with really cool styles.


//////////////// Section 10 - Lesson 76 - Including Partials ////////////////

Step 24: Include Partials
    - Inside "views" directory create a directory called "partials"
    - Inside "partials" directory create directories called
        => "home"
        => "admin"
    
Step 25: Home Nav Partial
    - inside "views/partials/home", create a file
        => home-nav.handlebars
    - inside "views/layouts/home-handlebars", take the navigation content out and paste it in "views/home/home-nav.handlebars"
    - inside "views/layouts/home-handlebars", include the navigation with the following bit of code (variable)
        => {{> home/home-nav}}
    - inside "views/home/home-nav.handlebars", put a link "/about" in <a class="nav-link" href="/about">About</a>

Step 26: Footer Partial
    - inside "views/partials/home", create a file
        => footer.handlebars
    - inside "views/layouts/home-handlebars", take the footer content out and paste it in "views/home/footer.handlebars"
    - inside "views/layouts/home-handlebars", include the footer with the following bit of code (variable)
        => {{> home/footer}}


//////////////// Section 10 - Lesson 77 - Creating our Login and Registration Views ////////////////

This is where we are right now, we have our application working, showing the index view, but we want to do a little bit more than that.
We want the users to be able to login, register and then be directed to the admin area.
In order for us to achieve that, we we need to have views.
    - We need to have
        => the login view
        => the register view
    - And we need to have
        => the admin area.

Step 27: Create Login View
    - Inside "views/home" directories, create "login.handlebars" file
    - Copy the content of "login.html" from "PROJECT-TEMPLATE-ASSETS\BLOG-HOME" and paste it inside "login.handlebars"
    - On "app.js" create a route for it
    - On "views/partials/home/home-nav.handlebars", create a link for it

Step 28: Create Registration View
    - Inside "views/home" directories, create "register.handlebars" file
    - Copy the content of "register.html" from "PROJECT-TEMPLATE-ASSETS\BLOG-HOME" and paste it inside "register.handlebars"
    - On "app.js" create a route for it
    - On "views/partials/home/home-nav.handlebars", create a link for it


//////////////// Section 10 - Lesson 78 - Building Home Page Views ////////////////

Step 29: On the "routes" directory, create directories
    - "home"
    - "admin"
    - inside "routes/home", create a Javascript file
        => "index.js"

Step 30: Remove all the routes from "app.js" and paste it in "routes/home/index.js"

Step 31: Load those routes here in "app.js" => const home = require('./routes/home/index');

Step 32: And then once we have that loader here, we need to let our application know about it
    - To do this, we use a middleware => app.use('/', home);
    - We want to say every time somebody goes to our route, which is '/', we want to execute the "home" route

Step 33: On "index.js", we need to require the Express module => const express = require('express');

Step 34: On "index.js", use the Router functionality of Express => const router = express.Router();

Step 35: On "index.js", replace all "app.get" by "router"

Step 36: When we are requiring a file (Step 31), we need to export it out.
    - On "index.js", we do Module Export object and to it the router => module.exports = router;
        => when we export that out, then the router or that functionality is going to be right here in this middleware "/" (Step 32)

Step 37: Change the "Home" link on "views/partials/home/home-nav.handlebars"


//////////////// Section 10 - Lesson 79 - Admin Set Up (Part 1) - Loading and Using Routes ////////////////

Step 38: Let's start creating our Admin
    - We need an admin layout => Create a file called "admin.handlebars" in "views/layouts"
    - Copy the content from "PROJECT-TEMPLATE-ASSETS\PROJECT-TEMPLATE-ASSETS\SB-ADMIN-bootstrap-4/blank.html" and paste it in "admin.handlebars"
    - Change the link path in "admin.handlebars" for bootstrap
    - We need "sb-admin.css"
        => So let's go to our "public/css" and create a stylesheet file called "sb-admin.css"
        => Copy the content from "PROJECT-TEMPLATE-ASSETS\PROJECT-TEMPLATE-ASSETS\SB-ADMIN-bootstrap-4\css/sb-admin.css" and paste it in "sb-admin.css"
        => In "admin.handlebars", change the path for the right root directory
    - We need "font-awesome.min.css" 
        => Copy the folder "font-awesome" from "PROJECT-TEMPLATE-ASSETS\PROJECT-TEMPLATE-ASSETS\SB-ADMIN-bootstrap-4\vendor" and paste it in "public/css" directories
        => In "admin.handlebars", change the path for the right root directory

Step 39: Create a Route for Admin
    - Inside "public/routes/admin", create a file called "index.js"
    - In "app.js", require the file "index.js"
    - Use the route => app.use('/admin', admin);
    - Now, we need to export something in "routes/admin/index.js"
        => Go to "routes/home/index.js" and copy the codes from Step 13, 33 & 34 and paste it in "public/admin/index.js"
        => use the export module => module.exports = router;
    - render the "admin/index" => res.render('admin/index');
    - Create an "admin" directory on "views"
        => Inside "views/admin", create a file called "index.handlebars"
             

//////////////// Section 10 - Lesson 80 - Admin Set Up (Part 2) - Default Layout ////////////////

Step 40: We want to use a different default layout for admin than the one in "app.js" (Step 12), but we want an admin layout
    - Go to "routes/admin/index.js" and do an overwrite


//////////////// Section 10 - Lesson 81 - Admin Set Up (Part 3) - Partials and Links ////////////////

Step 41: Create Partial for Admin Content in admin.handlebars
    - Go to "views/layouts/admin.handlebars", and insert our admin dynamic content => {{{body}}}

Step 42: Create a Dashboard Route
    - on "routes/admin/index.js" => router.get();
    - Create a Dashboard view on "views/admin" => dashboard.handlebars (deleted Section 11 Lesson 84)

Step 43: Create Partial for Side Nav in admin.handlebars
    - Cut the HTML code
    - Create the partial => {{>admin/admin-side-nav}}
    - Create the file "admin-side-nav.handlebars" in "views/partials/admin"

Step 44: Change Links
    - Change the link on "Dashboard" in "admin-side-nav.handlebars" (Replaced by "admin" Section 11 Lesson 84)
    - Change the link on "Start Bootstrap" in "admin.handlebars"

Step 45: We need to be more specific with our routes
    - Go to "routes/admin/index.js" and copy the Step 40 and paste it in "routes/home/index.js"
    - Change "admin" to "home" to be more specific

Step 46: Put a Link for Admin on the Home Page
    - Go to "views/partials/home/home-nav.handlebars" and add a new link


//////////////// Section 10 - Lesson 82 - Admin Set Up (Part 4) - Javascript Files ////////////////

Step 47: Link our Javascript files
    - Go to "views/layouts/admin.handlebars" at the botton, and as we see we're going to need
        => "jquery.min.js"
        => "bootstrap/js/bootstrap.bundle.min.js"
        => "jquery-easing/jquery.easing.min.js"
        => "sb-admin.min.js"
    - Copy "jquery" and "jquery-easing" and "bootstrap" folders from "PROJECT-TEMPLATE-ASSETS\PROJECT-TEMPLATE-ASSETS\SB-ADMIN-bootstrap-4\vendor"
    - Paste them in "public/js"
    - Copy "sb-admin.min.js" file from "PROJECT-TEMPLATE-ASSETS\PROJECT-TEMPLATE-ASSETS\SB-ADMIN-bootstrap-4\js"
    - Paste it in "public/js/admin"
    - change all the links in "views/layouts/admin.handlebars"

We need jQuery first


//////////////// Section 11 - Lesson 83 - Creating Post Routes (Part 1) ////////////////

Step 48: Make the new paths (admin-side-nav.handlebars)
Step 49: Create a new file "routes/admin/posts.js"
    - export the module => module.exports = router;
    - require the file in "app.js" => const posts = require('./routes/admin/posts');
    - use the route in "app.js" => app.use('/admin/posts', posts);
    - use the router in "routes/admin/posts.js" => router.get('/', (req, res)=>{}


//////////////// Section 11 - Lesson 84 - Let's Create a Database Connection ////////////////

- Delete the file "dashboard.handlebars"
- In "admin/index.js", delete the dashboard router (step 42)
- In "admin-side-nav.handlebars", change the link "admin/dashboard" to "admin" (Step 44)

Step 50: Let's connect MongoDB
    - On the terminal, type "mongod"
    - Then, type "mongo"
    - Then, "show dbs" to see all the databases that you got
=> Exit

Step 51: let's go ahead and create a database for this project
    - we don't have Mongoose if we go to package.json, so we need to install it
        => On the terminal, type "npm install mongoose"
    - Now let's go to app.js and let's create some type of connection here
        => require Mongoose "const mongoose = require('mongoose');"

Step 52: OK, now we have a Mongoose there required it, we can start creating stuff with it
    - Connect mongoose
        => use "{useNewUrlParser:true}" insteand of "{useMongoclient: true}" => Q&A "useMongoClient not needed for mongoose V5.5.9" - Lesson 84
        => use {useUnifiedTopology: true, useNewUrlParser: true} insteand of "{useMongoclient: true}" => Q&A Current options for mongo for people with deprecations... - Lesson 84


//////////////// Section 11 - Lesson 85 - Creating the Form (Part 1) ////////////////

Step 53: Inside, "admin" directory, create another directory to seperate things
    - Create a "posts" directory
    - Inside "posts", create a file called "create.handlebars"
    - Inside "index.handlebars", create a form
    - In "routes/admin/posts.js", create a route
    - Make a link in the "admin-side-nav.handlebars"


//////////////// Section 11 - Lesson 86 - Creating the Form (Part 2) ////////////////

Step 54: Finish Creating the form


//////////////// Section 11 - Lesson 87 - Creating a Post Model (Part 1) ////////////////

Step 55: Remember that we when we submit data, we need to go to our routes first
    - So, let's go to "admin/posts.js"
        => Now, our routes are catching "get" data.
    - So, copy the get request from Step 53
        => Change "get" with "post" and "render" with "send" and send "WORKED" to see if it works

So, now it works, we want to connect to the database.

=> But, before we do that, we need to start thinking about our database schema.
We are connected to the database already, but we need to connect to the database in a way that we can insert data.
We need a way to have methods that can help us insert data.
Mongoose is doing that for us already. We just have to create what's called a model and we have a model directory here.

Step 56: So let's start creating a model for a "post" and let's play around with data.
    - OK, so I'm going to create a JavaScript file called "Post.js" with Capital P inside the folder "models"
    - Inside "Post.js", include mongoose and require it
    - Let's create a variable here to hold our schema, Mongoose has this nice object or method that we can use
        => const mongoose = require('mongoose');
    - Now we have the schema here, we need another constant to hold our schema and a new instance
        => const PostSchema = new Schema({});
    - Inside this new instance, we will have an object as a parameter to start defining our schema
        => So our post is going to have different data inside
            - and we know that it's going to have a user
                => So I'm going to create this object and this is not something that I'm making up. This is how it's done.
            - We create all the objects according to the form in "create.handlebars"


//////////////// Section 11 - Lesson 88 - Creating a Post Model (Part 2) ////////////////

Step 57: Once we are done with the definition, we need to call another method and export it
    - The method is called "model".
        => mongoose.model('posts', PostSchema);
    - Now, we can go ahead and exploit this so we can use it later on
        => module.exports = mongoose.model('posts', PostSchema);

So here's the little explanation I wanted to give you about relationships.
=> there are two main ways that we can relate data using MongoDB:
    1. either we insert an object (and when I say object, I mean a document) inside another document
    2. Or we just insert, for example, the IDs of that other document, and then each of these ideas is going to have a difference, a reference to a model outside.


//////////////// Section 11 - Lesson 89 - Including Body-Parser and Testing ////////////////

When we go to our server "routes/admin/posts.js", we have no way of parsing that data. We receive the data, but we have no way of parsing it.
Out of the box, node.js does not offer that ability.
So, we need to have some type of module to help us with that.

Step 58: We need a way of parsing that data on routes/admin/post.js
    - download the package "body-parser"
        => On the terminal, "npm install body-parser"
    - Inside app.js, require BodyParser
        => const bodyParser = require('body-parser');
    - We make sure the application use body-parser and tell it in this object that we want the URL extended
        => app.use(bodyParser.urlencoded({extended: true}));
    - We want to be able to parse json data as well
        => app.use(bodyParser.json());
    - Inside routes/admin/posts.js, we can do a console and get the data from the form (Step 55)
        => console.log(req.body);
            - Check on the application if we get some data, but typing something and submitting it
            - On the terminal, we can see that data


//////////////// Section 11 - Lesson 90 - Testing our Post Model ////////////////

So, we were able to get this object with all the data from the form.
Step 59: But, now we need to start inputting data into our database and at the same time creating it.
    - So, let's go to routes/admin/posts.js, and bring in the post
        => const Post = require('../../models/Post');
    - use this post in posts.js
        => Post()
    - Inside the post, we have an object based on the schema that we created
        => Post({
        title: req.body.title,
        status: req.body.status,
        allowComments: req.body.allowComments,
        body: req.body.body
            });
    - Now, we have to build a type of functionality to prevent that on and off type with the "allowComments". So, Let's let's initialize some type of variable
            => let allowComments = true;
    - Create some type of condition to change this a little bit
            => if(req.body.allowComments) {
                allowComments = true;
                } else {
                allowComments = false;
                }
            => Now, we don't have any problem with the mongoose database

    
//////////////// Section 11 - Lesson 91 - Saving a Post ////////////////

Step 60: Where we left off last time is that we are initializing then converting the on and off, a string that we get from a checkbox, into bolean values right here (Step 59).
    - And then instead of passing that from the variable, we're passing the value from the forum, which is going to pass it from here
        => allowComments: allowComments,
        
Step 61: Now it's time for us to start testing this, to see if it works, because we don't know anything yet
    - In order for us to use this I'm going to create a variable "newPost" like this
        => const newPost = new Post({});
    - and this "newPost" now has methods added by Mongoose, for example it has the save method
        => newPost.save();
    - So, now, it's not going to save automatically. Once we do this, we need to attach some type of promise or call back.
        => newPost.save().then()
    - Then we're going to get the "savedPost" in here so we can use it if we wanted to. So I'm going to use the new syntax array function there to do something after the post is saved
        => then(savedPost =>{});
    - Then we're going to redirect it where all the posts are
        => res.redirect('/admin/posts');
    - Keep in mind that if this doesn't work, we could attach some type of "catch" here and cancel their error
        => .catch(error =>{
            console.log('could not save post');
            });
    - Test it if it works by creating a new post in the application
        => It says "IT WORKS"
    - Now, how can we see that data? Well, let's go to our Mongo shell. I'm going to open another console.
        => I'm going to say "mongo"
        => I'm going to go to that shell, I'm going to say "use cms" (cms is the name of the database that we created)
        => Now, we say "show collections" or "show tables"
            - It shows the collections
        => Now, let's see if we have any data, say "db.posts.find()"
            - It shows an object with id...
    - Now, let's go back to our routes/admin/posts.js and let's console.log when we say something so you can see the data we get back.
        => As you can see on the terminal, we get the saved object back to us, the new one.
            - {
                title: 'Second Post',
                status: 'public',
                allowComments: true,
                body: 'HELLO AGAIN',
                _id: new ObjectId("6262b5dd3ac793074e4f08f8"),
                __v: 0
            }

=> We saved data!


//////////////// Section 11 - Lesson 92 - Reading Data (Part 1) - Form Creation ////////////////

So, now, that we are able to create a post, we need to be able to actually see our posts.
And when we go to our page here ("All Posts" in the application), we don't have anything there, it is not working for us.

Step 62: Let's go ahead and make that work.
    - So, let's go first to our "routes/admin/posts.js" and replace  "res.send('IT WORKS');" (Step 49) by
        => res.render('admin/posts');
            - Now, it is redirected to "views/admin/posts/index.handlebars"
So, now, we have our view there, but we need to start bringing data from the database.
    - So, let's go to "views/admin/posts/index.handlebars" and create a table
    - So with Handlebars, we bring the variables with curly brackets, of course, so the first is going to be the ID, etc...
Well, we got the form, it's time for us to jump into the routes and start bringing the data.


//////////////// Section 11 - Lesson 93 - UPDATED - Reading Data (Part 2) - Reading Data ////////////////

Resources:
https://mongoosejs.com/docs/tutorials/lean.html
https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access
https://www.npmjs.com/package/@handlebars/allow-prototype-access


Step 63: Start bringing the data.
So let's go to our our post routes, and here where we are rendering the view before that, we need to pull that data from the database before we get to this point here. And then here in this render function, we can pass in the variable, the posts. (Step 62)
    - Make a query with "Post" that we required in step 59
    - Then use it with a "find" method
    - Download the package available in https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access
        => At the bottom of the page, click on @handlebars/allow-prototype-access
        => You will beredirected to https://www.npmjs.com/package/@handlebars/allow-prototype-access
        => As it says type on the terminal: npm install @handlebars/allow-prototype-access
    - Now, include the package on app.js
        => const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
    - Copy allowInsecurePrototypeAccess and go to the engine (Step 12) and pass it a second parameter to this function that we have "exphbs"
        => Before "defaultLayout" write "handlebars: allowInsecurePrototypeAccess(Handlebars),"
    - Now, it's not working because "handlebars is not defined", so we need to download the package handlebars
        => npm install handlebars
    - In app.js, include handlebars
        => const Handlebars = require('handlebars');
    - Now, go back to posts.js and attach a promise to the find method and bring the posts inside
        => .then(posts=>{});
    - Inside the post object put the render
        => res.render('admin/posts');
    - And as the second parameter, I create another object with a key named "posts" and the value that I'm bringing back
        => res.render('admin/posts', {posts: posts});
Let's go back to "index.handlebars" and bring the data
    - So, with Handlebars, you can do double curly brackets and then we can use a pound each. This is going to be like a loop. And now we just give it the name of that array that we want to look through
        => {{#each posts}}
    - You need to end it at the end where you want to look to end.
        => {{/each}}
OK, so now that we have this inside here, we have an object that we can use to pull out that information
    - This object is going to have
        => {{id}}
        => {{title}}
        => {{status}}
        => {{allowComments}}
    
We have our data! It is working 100 percent!


//////////////// Section 11 - Lesson 94 - Updating (Part 1) ////////////////

Step 64: Update
    - Create a file in "views/admin/posts" called "edit.handlebars" and create a form
    - in "routes/admin/posts.js", create a new route and make sure that it takes an id, then render it
        => router.get('/edit/:id', (req, res)=>{
            res.render('admin/posts/edit');
        });
    - In index.handlebars, create a button with a link
        => <td><a href="/admin/posts/edit/{{id}}" class="btn btn-info">Edit</a></td>
    - In routes/admin/posts.js, show the id
        => res.send(req.params.id);
            - Now, when we click on the "Edit" button, we should see the id of this specific post in the browser, so we know that it's working


//////////////// Section 11 Lesson 95 - Updating (Part 2) - Displaying Data Back to the Form ////////////////

Step 65: Displaying the values from the form
    - So let's make a query to our database to pull that specific post out.
        => In routes/admin/posts.js, copy the query Post.find() from Step 63 and paste it, then change it
            - Post.findOne({_id: req.params.id}).then(post=>{
                res.render('admin/posts/edit', {post: post});
            });
    - Now, let's go back to edit.handlebars view and instead of doing placeholder here, we can say value and use handlebars to pull down the title from that
        => so you can see the value of each individual post here.
    - we need to do a little work around Allow Comments.
        => We will use an attribut called "checked"
            - {{#if post.allowComments}} checked="checked" {{/if}}
    - We need to make sure that we're in the right status and we're going to have to deal with some helper's functions to help us with this.


//////////////// Section 11 Lesson 96 - Updating (Part 3) - Handlebars Function Setup ////////////////

Step 66: We need to start displaying the status
    - So we are going to have to create a helper function for handlebars in the "helpers" directory
        => handlebars-helpers.js
    - Inside handlebars-helpers.js, export a big object and fill it with properties
        => module.exports = {
        select: function(){
        console.log('IT WORKS');
        }
        };
Now, we just created our helper function for handlebars
    - Now, we need to app.js to register it
        => const {select} = require('./helpers/handlebars-helpers');
    - in the engine, we need to pass another parameter
        => helpers: {select: select}
    - Go to edit.handlebars and put the select function
        => {{#select}}{{/select}}
    - On the application, go to posts/edit and open the console, then check the terminal on the code editor
        => It says "IT WORKS"
    - So now let's go back to our handlebars-helpers
        => so, you see that we're getting this right here "IT WORKS" it is because our handlebars helper function is working.


//////////////// Section 11 Lesson 97 - Updating (Part 4) - Handlebars Function Finished ////////////////

Step 67: Handlebars Function Finish
    - On edit.handlebars, we're going to pass a parameter for status
        => {{#select post.status}}
    - So let's come back to handlebars-helpers.js and we are going to say the post status is going to be coming here, so it's going to be whatever. It's the first parameter
        => select: function(selected)
    - The second parameter is the options (whatever is between the select brackets in the edit post form)
        => select: function(selected, options)
    - In handlebars-helpers.js, we're going to return data and grab the options
        => return options.fn(this)
    - And here we are going to change a replace method and instead this replace we are going to be replacing the data here (on edit.handlebars) in dynamically being outputted, but we are going to be using a little bit more functionality
        => .replace(new RegExp(' value=\"'+ selected + '\"'), '$&selected="selected"');


//////////////// Section 11 Lesson 98 - Updating (Part 5) - Method Override Module ////////////////

Step 68: Edit some data
    - Download the package method-override
        => On the terminal, type npm install method-override
    - In app.js, include it
        => const methodOverride = require('method-override');
    - Use the method on app.js
        => app.use(methodOverride('_method'));
    - Use it in edit.handlebars
        => <form action="/admin/posts/edit/{{post.id}}?_method=PUT"
Now, our PUT request is going to work
    - Create a PUT request in routes/admin/posts.js
        => router.put('/edit/:id', (req, res)=>{
            res.send('IT WORKS);
        });
    - Go to the application, on edit post and submit "Update Post"
        => It says "IT WORKS"
Now, our PUT request is working


//////////////// Section 11 Lesson 99 - Updating (Part 6) - Finally Updating ////////////////

Step 69: Build our PUT request
    - Copy the query from Step 65 and paste it in the PUT request
        => Post.findOne({_id: req.params.id}).then(post=>{
            res.render('admin/posts/edit', {post: post});
            });
    - Copy the allowComments from Step 59 and paste it inside the query
        => if(req.body.allowComments) {
            allowComments = true;
            } else {
            allowComments = false;
            }
    - Change the query
        => grab the post title and update it with the new one
            - post.title = req.body.title;
            - post.status = req.body.status;
            - post.allowComments = allowComments;
            - post.body = req.body.body;
    - Save it
        => post.save().then(updatedPost=>{});
    - Once, we update it, we redirect back
        => res.redirect('admin/posts');


//////////////// Section 11 Lesson 100 - Deleting Posts ////////////////

Step 70: Deleting posts
    - Let's go to views/admin/posts/index.handlebars, and let's create a form that it's going to that specific id. Since, we're using "override", we can use the best practice with the term DELETE
        => <form action="/admin/posts/{{id}}?_method=DELETE" method="post"></form>
    - Inside the form, create a button
        => <button type="submit" class="btn btn-danger">DELETE</button>
    - Now, we need to build to route for this in routes/admin/posts.js
        => router.delete('/:id', (req, res)=>{
            Post.remove({_id: req.params.id})
                .then(result=>{
                    res.redirect('admin/posts');
                });
            });

Now, we have the Create, the Read, the Update and the Delete. SO, we have the CRUD.
Now, it's time for us to add some features.


//////////////// Section 11 Lesson 101 - Dummy Data Creation (Part 1) - Setup ////////////////

So I want to be able to insert a huge amount of data, so that way I can test out my application a little bit better.
Not only test it, but I want to be able to have a whole bunch of different posts here in admin/posts. So that way I can show it in my front page as well.
And I will also like to have maybe a navigation right, because if we have so many different posts, one hundred, two hundred, you have to scroll all the way down to see all of them. That is annoying.

Step 71: So what I want to do is I want to create some fake data.
    - For that, we're going to use a method called "faker"
        => npm install @faker-js/faker (Q&A faker is deprecated - Lesson 101)
In this route here that we is showing admin/index, I want to in this view, I want to create some type of form that I can generate data.
    - In admin/index.js, require the module "Post"
        => const Post  = require('../../models/Post');
    - Inside admin/index.js, require faker
        => const faker = require('faker');
    - Inside admin/index.js, create the router for delete and save the data
    - Inside views/admin/posts/index.handlebars, create a form


//////////////// Section 11 Lesson 102 - Dummy Data Creation (Part 2) - Finished ////////////////

Finishing the Step 71


//////////////// Section 12 Lesson 103 - Installing and Setting up the Upload Module ////////////////

Now, if we go to homepage, we see something here that we don't have any dynamic data here yet.
But before we do that, what I would like to do is show you guys how to upload files just in case the user wants to have an image for their post, for example.
Or maybe you want to create a profile of a user later on and you want to upload a picture of that user.

Step 72: How to upload files
    - Install the Upload module
        => npm install express-fileupload
    - Require express-fileupload in app.js
        => const upload = require('express-fileupload');
    - Use it in app.js
        => // Upload Middleware
            app.use(upload());
Now this is going to add a files property into the request.


//////////////// Section 12 Lesson 104 - Testing the FILES Object ////////////////

Step 73: We need to edit our form to receive that fileupload
    - Go to "views/admin/posts/create.handlebars" and add a form-group "File Upload"
    - Add enctype="multipart/form-data" to the form
    - Go to "routes/admin/posts.js", comment out the data under router.post('/create', (req, res)=>{}); and console log req.files
        => console.log(req.files);
    - Create a post and upload an image
        => On the terminal, we get the data of the image
Now, we need to have some special module to kind of decode this image so we can see it, we can parse that data.

OK, so now the next step would be to put this in our database, but we need to actually edit our models,
make sure that our routes are detecting if we have a picture or not.
There's a couple of things that we need to do before we we upload.


//////////////// Section 12 Lesson 105 - Uploading a File ////////////////

Let's see if we can move that file somewhere.
OK, so in order to move this file, there are a couple of things that we need to do.
    1. First of all, I like to build a helper function to kind of help us out with checking to see if this object is empty or not.
    But we're going to do that later.
    2. Move the file.
    That's what we're going to do now.

Step 74: Moving the file
    - Let's come back to "routes/admin/posts.js" and create a variable to hold the object or the file, and it's going to come from the files filename (name from the form)
        => let file = req.files.file;
    - Create another variable
        => let filename = file.name;
    - Use the function "mv" to move that file
        => file.mv('./public/uploads/' + filename, (err)=>{
            if(err) throw err;
            });
    - Create a new post
        => Now in the folder "uploads", we have a new picture uploaded


//////////////// Section 12 Lesson 106 - Creating a Helper Function to Test Empty Objects ////////////////

So, we are uploading files.

Step 75: We have this functionality here, but now the next step is to actually put this in the database.
    - So, before we do that, we need to make sure that Post.js has a field to receive that data.
        => file:{
            type: String,
            },
    - In "routes/admin/posts.js",uncomment what is under router.post('/create', (req, res)=>{});
    - Create a file called "upload-helper.js" in the "helpers" folder and CREATE THE FUNCTION INSIDE
    - Come back "routes/admin/posts.js" and use the structuring to bring back the function
        => const { isEmpty } = require('../../helpers/upload-helper');
    - Use it now to check under router.post('/create', (req, res)=>{});
        => if(!isEmpty(req.files.file)){}
            => Q&A obj.hasOwnProperty is not a function error Lesson 106
    - Just to check if it's work, comment out all the code and let just the previous if statement then console.log
        => console.log('is not empty');
    - Create a new post and upload a picture
        => On the terminal, it says "is not empty"


//////////////// Section 12 Lesson 107 - Inserting the File Reference to the Database ////////////////

Step 76:
    - We already have our file definition in our model in "Post.js", now we need to put it in "routes/admin/posts/posts.js"
        => file: filename
    - But, we need to initialize the filename variable first
        => let filename = '';
    - Don't forget to take off "let" in "let filename = file.name;"
    - Delete all the posts we created in our Mongo database
    - Create a new post and check if the data of the image is showing in the terminal


//////////////// Section 12 Lesson 108 - Modifying duplicate pictures to have different names ////////////////

We are finally uploading pictures now or files, we have a little situation here.
So, I made this my default filename, that's OK, but what happens if I want to let's say somebody else uploads a picture that has the same name, what we happen in that case?
If we create a new post and upload the same picture, nothing happens, we don't get a new picture here, right?
We don't get even any issue with our new post in the console.
We don't get our function renaming this picture.
We don't get this functionality, we have to kind of build it ourselves, right?

Step 77: We have to kind of play around with the name of the picture.
    - For example, here where he says, "file.name", maybe we could append something to it, so that way every
time this is different, right? Every time we move the picture, he has something appended to it.
        => So let's append "Date.now()"
            => filename = Date.now() + '-' + file.name;
    - Create a new post and upload the same image as one in the folder "upload"
        => As you can see, it uploads a new picture with something appended to it


//////////////// Section 12 Lesson 109 - Displaying the Uploaded Pictures ////////////////

Step 78: Show our images in our All Posts view
    - Let's go to "views/admin/posts/index.handlebars"
        => create a th with "File", between "Id" and "Title"
        => <td><img height="50" class="img-responsive" src="/uploads/{{file}}" alt=""></td>


//////////////// Section 12 Lesson 110 - Deleting the Files / Images with the Post ////////////////

Step 79: I noticed that we have a feature that we're missing here. That feature, which deletes the images along with the record from over the document, from the database.
    - So what I want to do is I want to use a file system inside "routes/admin/posts.js"
        => const fs = require('fs');
File system is going to allow us to delete a file
    - Inside router.delete('/:id', (req, res)=>{} write as below:
        => Post.findOne({_id: req.params.id})
        => .then(post =>{
    - When we're using the file system, we need to give it exactly that exact path to where that file is located.
        => Go to "helpers/upload-helpers" and create some type of variables that will allow us to always have the uploads directory.
            => const path = require('path');
            => uploadDir: path.join(__dirname, '../public/uploads/'),
    - Now, on posts.js require it
        => const { isEmpty, uploadDir } = require('../../helpers/upload-helper');
    - In posts.js, inside .then(post =>{}, use the synchronously function "unlink" that needs a callback
        => fs.unlink(uploadDir + post.file, (err)=>{
            res.redirect('/admin/posts');
        });
            => Now, it deletes the image only
    - To delete the post as well, add the following bit of codes
        => post.remove();


//////////////// Section 13 Lesson 111 - CMS Project - Form Validation - Validation (Part 1) ////////////////

There are two ways of doing a form validation:

    1. Either we do it in the client, meaning that before we even get to the server, which is my preferred way of doing it,
    2. or we do it in the server.

Sometimes it's better to do it in both areas there, if you have a really cool application and you want to make sure that everything is correct.
If you have a really small application, doing it in a client's should not hurt.

Step 80: So, we are going to do form validation, because we want to make sure that whatever we submit to our database, it has some type of value. Right?
We don't want to submit this form if it doesn't have anything.
    - Go to "views/admin/posts/create.handlebars", right in the input add the required field
What if how do we do it in the service?
    - Let's go to "routes/admin/posts", under router.post('/create', (req, res)=>{}
        => This is one way of doing it: If not required, then we don't submit.
            => if(!req.body.title) {}
        => Another way would be to create some type of errors and then we could just go ahead and push this in.
            => let errors = [];
                if(!req.body.title) {
                errors.push({message: 'please add a title'});
                }
        => And then, we come back here and we say, if this errors and we check the length of it is greater than zero. OK, then we render back to its view, let's just render back to admin view posts create. And we can pass in the object here like this with the errors.
            => if(errors.length > 0){
                res.render('admin/posts/create', {
                    errors: errors
                })
        => else, we can submit the rest of the data.
So, we're not going to do anything unless we have a title for that, right?
So that would be a way of doing it.
    - And then, on the other side "create.handlebars", we can just echo out the errors somewhere.
        => {{#each errors}}
        <div class="alert alert-danger">
        {{message}}
        </div>
        {{/each}}


//////////////// Section 13 Lesson 112 - CMS Project - Form Validation - Validation (Part 2) ////////////////

We were able to get the errors here.
Step 81: I want to make sure that we get all of the errors for all the fields of the form.
    - In posts.js, add a new condition
        => if(!req.body.body) {
            errors.push({message: 'please add a description'});
            }


//////////////// Section 13 Lesson 113 - CMS Project - Form Validation - Model Validations - CATCH ////////////////

If for some reason, our client validation is not working and we want to play around with the service side or also have the service as a backup we can do another type of validation
Step 82: I'm going to show you how to do another type of validation
    - Go to "routes/admin/posts.js", inside newPost.save().then(savedPost =>{} (Step 61)
        => catch(validator=>{
            res.render('admin/posts/create', {errors: validator.errors});
        });

But, I like to do it my way by pushing it into an array (Step 80 + 81), so, I'm just going to take it off.
    
    - Put back "required" to "create.handlebars"


//////////////// Section 14 Lesson 114 - Installing Module ////////////////


So, one of the features that I really want to add to my application right now is flash messaging.
I want to be able to say, OK, when I edit this and I submit it, I want to say I want to see a message of what we want to give the user: a message saying, hey, listen, your post was just updated or this specific post was updated.
That's a pretty cool little feature to have.

For flash messaging we need to have sessions.

TIP: OK, so one of the things that I do sometimes when I want to do things and I have an idea on what I want to do, but I don't know what to use. I go to Google, and I type "npmjs.org" and I search "session"
        - express-session
        - connect-flash
    
Step 83: Let's go ahead and download "connect-flash", but we also need to download sessions "express-session"
    => npm install express-session connect-flash

Step 84: OK, so we downloaded our session there and our flash and now we need to make it work.
    - On app.js, require the session and the flash
        => const session = require('express-session');
        => const flash = require('connect-flash');
    - OK, now we need to get it installed in our using middleware.
In most of my applications, I know this overload is related to parsing data, so I keep it close to these Load Routes
And in some application, what I have done is I have all my middleware in one place
But, sessions are very close to the routes right here. So, before the routes, I want to show the app and use it
    => app.use(session({})
I know for a fact that we need to pass a parameter to the session,
and we need to do a couple of things there.
Let's go and look at the documentation.
    => app.use(session({
    secret: 'edwindiaz123ilovecoding',
    resave: true,
    saveUninitialized: true
}));
    - And then after that, I'm just going to do the middleware for the Flash.
        => app.use(flash());
That's it, remember that we are requiring that on top here.
OK, so now our sessions should be working.
We just need to test it.


//////////////// Section 14 Lesson 115 - Checking SESSION and displaying Flash messages ////////////////

OK, we have the sessions installed in our application, but how do we use it, how do we make sure it's actually working?

Step 85: So let's go to our home root => routes/home/index.js
    - Right here where we are displaying the home page, all we have to do to create the session is to access the request object and say
        => req.session.abousafwan = "Abou Safwan";
    - Now, to check it, we could do something like this
        => if (req.session.abousafwan) {
            console.log(`We found ${req.session.abousafwan}`);
            }

Step 86: Now, that you know how to use sessions, we are going to be using flash messaging
    - OK, let's go to our routes where we create => routes/admin/posts.js
    And I want to create a flash message somewhere here, so when we create a post is going to redirect us to admin/posts, I would love to have some type of flash messaging happen here on that page, so I'm going to set it up here.
        => req.flash(
          "success_message",
          `Post ${savedPost.title} was created successfully`
            );
    - OK, so now we got the flash message here set up, how do we display it now?
        1. We could create a helper function to display this with handlebars.
        And most of the time, that's exactly what we need to do.
        2. But we can also create some type of middleware and create some type of variable inside our handlebars like a local variable.
        And I'm going to show you how to do that, because that's my preferred way of doing it.
            => On app.js, after the Step 84:
                app.use((req, res, next) => {
                res.locals.success_message = req.flash("success_message");
                });
OK, so now we will have a success, a message, local variable in our handlebars, in your application by doing this "res.locals"
            => Now, the next thing to do would be to do this "next"
                next();
    - OK, so, let's go to our where we are creating the index, where we are seeing all the posts "views\admin\posts\index.handlebars" and here on top I want to display their success message.
        => {{#if success_message}}
                <div class="alert alert-success">
                    {{success_message}}
                </div>
            {{/if}}


//////////////// Section 14 Lesson 116 - Session errors in partials ////////////////

On the last lecture, we talked a little bit about, including this in a partial right, just because it is getting kind of crowded now.

Step 87: So we need to start including our flash massaging into some type of partial.
    - Inside views/partials/home, let's create a file called "form-msgs.handlebars"
    - Inside "views\admin\posts\index.handlebars", include the new file "views\partials\home\form-msgs.handlebars"
        => {{> home/form-msgs}}
    - Cut the Step 86 from "views\admin\posts\index.handlebars" and paste it in "views\partials\home\form-msgs.handlebars"


//////////////// Section 14 Lesson 117 - UPLOAD - update - editing files in post ////////////////

One of the things that we are missing is the ability to edit the upload and actually even have an overload, we don't have that yet,
so let's go ahead and add it to our edit post.

Step 88: 
    - Let's go to views\admin\posts\create.handlebars and copy the upload bit of code below (Step 73) and paste it in views\admin\posts\edit.handlebars
    => <div class="form-group"><!-- Step 88 -->
        <label for="file">File Upload</label>
        <input type="file" name="file" class="form-control" >
        </div>
    - Add the enctype
        => enctype="multipart/form-data"
    - Let's go to routes\admin\posts.js and copy the code from step 75 and paste it down in the middle of the code from step 69
        => if (!isEmpty(req.files.file)) {
            let file = req.files.file;
            filename = Date.now() + "-" + file.name;
            file.mv("./public/uploads/" + filename, (err) => {
            if (err) throw err;
            });
            console.log("is not empty");
            }
    - Add the following code inside
        => post.file = filename;

Now, it would be nice if every time we edit and delete one of these pictures, we have some type of flash messaging, right?

//////////////// Section 14 Lesson 118 - Update and Delete Flash message ////////////////

On routes\admin\posts.js, we have this save method and we are redirecting.
This is the perfect place to put anything.
This is for updating, right?

Step 89: Update and Delete Flash Message
    - So, we can grab the request and we can flash. And we we have a success message from views\partials\home\form-msgs.handlebars
        => req.flash("success_message", "Post was successfully updated");

Step 90: Now, we don't have the partial there and I don't want to include that partial error all the time.
    - Take off the partial from Step 87 in views\admin\posts\index.handlebars and put it in views\layouts\admin.handlebars in the "body"
        => {{> home/form-msgs}}

We Tested it and it works.
Now we need to make sure that it works for delete as well.
    - Let's go to routes\admin\posts.js
        => req.flash("success_message", "Post was successfully deleted");

//////////////// Section 14 Lesson 119 - Cleaning up Nav links ////////////////

Step 91: 
    - Let's go to views\partials\admin\admin-side-nav.handlebars
        => Take off the charts.html
        => Take off the tables.html
        => Take off example pages
        => Take off menu levels
    - Let's go to views\layouts\admin.handlebars
        => Take off breadcrumb
    - Let's change the create button, go to views\admin\posts\create.handlebars
    - Let's change the edit button in views\admin\posts\edit.handlebars
    - Let's change the butto in views\admin\index.handlebars
    

//////////////// Section 15 Lesson 120 - Adding default Dates on Post Model ////////////////

So, since I'm always looking to improve our application, I think one of the things that we are missing here is maybe the date of the post.
I think is super important to have that somewhere here.

Step 92: I think it's important for you to understand how to insert the data in the database and how we can display it in a very user friendly format.
    - So, the first thing that we need to do is we need to go to the model of the post "models\Post.js" and we need to add that field here.
Remember that this is how we are constructing or defining or schema [Step 56]
Now, with Mongoose we can deal with dates with a little property or method.
        => date: {
            type: Date,
            default: Date.now(),
        },

Let's check if we got a date and create a new post
    => And as you can see, we have the date in the terminal:
{
  title: 'Date Post',
  status: 'public',
  allowComments: false,
  body: 'Adddd',
  file: '1652958448551-ofi-8000-jaune-la-batterie-soalire.jpg',
  date: 2022-05-19T11:04:35.477Z,
  _id: new ObjectId("628624f022c96b2c7c831500"),
  __v: 0
}

So, now that we have the date, every time we insert a post, we are going to have a date.
On the next lecture, I'm going to show the date right here on "All posts"
But not only that, we are also going to be installing a module that is going to allow us to make the date pretty to make the date displaing user friendly.


//////////////// Section 15 Lesson 121 - Installing Date Module and setup ////////////////

Step 93: Now, it's time for us to show the data in a column here on "All Posts", so I want to show it at the last cell there.
    - Let's go to views\admin\posts\index.handlebars
        => <th>Date</th>
        => <td>{{date}}</td>
Now, we got the date!
But, this doesn't look very user friendly.
    - Let's go to npmjs.org and search for "date" => moment
    - Kill the server and install the "moment" module
        => npm install moment
    - Now, we need to require it where we need it. We need it for a post route.
And as a matter of fact, why don't we use it in a helper function?
Let's create a helper for that, because the plan is to go ahead and use another plugging somewhere here in in views\admin\posts\index.handlebars => <td>{{date}}</td> in that module to format this date so we need a helper to do the work behind the scenes and display here.
    - Let's require that module in helpers\handlebars-helpers.js
        => const moment = require("moment");
    - Let's call it "generateDate"
        => generateDate: function(date, format){
            return moment(date).format(format);
        }
So that's it: we created a helper.
    1. OK, we first installed the module,
    2. created this helper,
    3. we're returning the data,
    4. now, we need to go back to handlebars and play around with it.


//////////////// Section 15 Lesson 122 - Using a Handlebars function to format dates in Views ////////////////

We're going to make this really cool date functionality for our posts, right?
So, this is something that you can use for any application.
So, we got the function here.
Now, let's go back to the documentation https://momentjs.com/docs/#/use-it/node-js/

Step 93: Let's use the format method
    - Let's go to views\admin\posts\index.handlebars
    - We need to register the "generateDate" function (Step 92) in app.js, so that we can use it
Remember, this is called structuring here and this is from ES6.
Basically, you have these curly brackets that you need const { select } = require("./helpers/handlebars-helpers"); // Step 66
Basically, when we are exporting data from this file, we can use this curly brackets to bring whatever variables we have in the other side to bring it here.
So, we got to give it the same name, and that way we can actually use it => "generateDate"
        => const { select, generateDate } = require("./helpers/handlebars-helpers");
        => helpers: { select: select, generateDate: generateDate },
    - Let's go back to views\admin\posts\index.handlebars
        => <td>{{generateDate date "MMMM Do YYYY"}}</td>


//////////////// Section 16 Lesson 123 - Home page dynamic data part 1 - Setup ////////////////

Now, I want to create for this application a logging and registration system to show you guys how this works
But, before we get to that, why don't we work on getting some of the front end built? Because right now we don't have any data here.

1. So, why don't we start working on the front end
2. And then we build our logging and registration. We go to the back end to do authentication with node, OK, by using some of the modules that node registry has available for us.

Step 94: Start working on the front end
    - Let's go to views\home\index.handlebars
We want to display all this data dynamicaaly
We want to multiply the Blog Post
        => Now, delete one of the two Blog post columns.
    - To get some data, let's go bact to the home route routes\home\index.js
We need to request our database and pull out all the posts
        => const Post = require("../../models/Post");
    - Now, we're going to use the Post to find all the posts and then we execute this
        => Post.find({}).then((posts) => {
            res.render("home/index", { posts: posts }); // Step 13
        });
    - Now, let's go back to views\home\index.handlebars
What do we need to pull the data?
Remember that we're getting some type of an array, right?
So, we are handlebars and we need something to loop through the data.
    - We use each
        => {{#each posts}}{{/each}}

On the next lecture, we will replace all the static data with the current data that we have in the database.


//////////////// Section 16 Lesson 124 - Home page dynamic data part 2 - Displaying data ////////////////

Step 95: Let's start replacing some of this data
    - Replace the title
        => {{title}}
    - Replace the content
        => {{body}}
    - The Link
        => &rarr;
    - The date
        => {{generateDate date "MMMM Do YYYY"}}
    - The picture
        => src="/uploads/{{file}}"

OK, now let's create a link here (Read more), but we're going to do that in the next lecture because we have to build a route for that.


//////////////// Section 16 Lesson 125 - Creating a SINGLE post route part 1 -Setup ////////////////

Step 96: So what I want to do is I want to create a link here, but before we do that, we need to create a route. And when we click on it, I want it to go to another page, but I want it to take the id of this specific post
    - Inside the home index views\home\index.handlebars, create a route that says "post", and now we give it an ID here and we just say "id"
        => href="/post/{{id}}"
OK, now when we go back here refresh, we put our mouse over, you can see down here that he has an ID
    - Now, create a post route inside the home routes\home\index.js
        => router.get("/post/:id", (req, res) => {});
    - Now, we already required the Post (Step 94), So we need to make a query to our database
        => Post.findOne({ _id: req.params.id });
    - Then, we get a post back
        => .then((post) => {})
    - Then, we take that post to that page and it's going to be a view "post"
        => res.render("home/post");
    - We're going to take an object with a key and a value of this guy right here "post"
        => res.render("home/post", { post: post });
We don't have this view "post" yet. So, we need to create it.
You get the file from the folder "BLOG-POST-SINGLE"


//////////////// Section 16 Lesson 126 - Creating a Single Post Route part 2 -Replacing Static with Dynamic data ////////////////

Step 97: Well, we want to create a view and copy this content, so let's go and do that.
    - Let's create a view in the home directory here "views\home", I'm going to call this view "post.handlebars"
    - Let's open "BLOG-POST-SINGLE" folder in the template folder of the course and open "index.html", then copy the content from line 54 to line 212 and paste it in views\home\post.handlebars
OK, now he does have a CSS and we will put this here somewhere
    - Copy the CSS file "blog-post.css" from the template folder of the course inside "BLOG-POST-SINGLE"
    - Inside public\css create a new file called "blog-post.css" and paste the content
    - Link the CSS file in the home layout "views\layouts\home.handlebars"
        => <link href="/css/blog-post.css" rel="stylesheet">
So there you have it. We have a route. It's working for each individual blog single post.
Let's start seeing if it is working and I want you guys to replace the data there.
So, we already have a route bringing some data at "routes\home\index.js"
    -  So, we can just go and replace this "Post Title" with the "posts.title".
        => {{post.title}}
    - The date
        => {{generateDate date, "MMMM Do YYYY"}}
    - The content
        => {{pot.body}}
    - The image
        => src="/uploads/{{post.file}}"


//////////////// Section 17 Lesson 127 - Views Routes and Setup ////////////////

I think Categories is a pretty easy lecture and I think we should go ahead and start working with it.

Step 98: I'm going to just include it in a separate link, even though those categories are just going to be for posts in this case.
    - Let's go to the admin sidebar views\partials\admin\admin-side-nav.handlebars and add a Categories link
        => <li
    class="nav-item"
    data-toggle="tooltip"
    data-placement="right"
    title="Link"
  >
    <a class="nav-link" href="#">
      <i class="fa fa-fw fa-link"></i>
      <span class="nav-link-text">Categories</span>
    </a>
  </li>
    - Let's create an individual route for Categories
        => In routes\admin, let's create a new file called "categories.js"
        => Copy the content from routes\admin\index.js and paste it in it
        => Import the Category
            => const Category = require("../../models/Category");
    - Create some view for categories
        => res.render("admin/categories/index");
        => Inside views\admin, create a folder "categories" and inside it create a file "index.handlebars"
            => Put a h1 title => Categories
    - Require/Load a route for categories in app.js
        => const categories = require("./routes/admin/categories");
    - Use the categories route with a middleware in app.js
        => app.use("/admin/categories", categories);
    - In models, create a model for categories called "Category.js"
        => Copy the content from the Post model "Post.js" and paste it in "Category.js"
        => Change some things inside
            => CategorySchema
            => We just need the "name"
            => Change the export module


//////////////// Section 17 Lesson 128 - Categories Index - Create Form ////////////////

Step 99: Let's build the form to create categories and at the same time, include the categories in this page. And on another page, we're going to edit them.
    - Let's go to views\admin\categories\index.handlebars
        => Create a form that goes to "/admin/categories/create"
        
//////////////// Section 17 Lesson 129 - Categories Index - Display Form ////////////////

Step 100: Let's display the categories
    - In views\admin\categories\index.handlebars, create a new column


//////////////// Section 17 Lesson 130 - Creating a category ////////////////

Why don't we start trying to get some data into it?
Step 101: We already have a model, so all we have to do is just create a category in here.
    - Let's go to our route for categories routes\admin\categories.js and create another route for the "create"
        => router.post("/create", (req, res) => {
            res.render("admin/categories/index");
        });
    - We want a post, so make sure our form method is "post" in views\admin\categories\index.handlebars
    - In routes\admin\categories.js, build a new object
        => const newCategory = Category({});
    - Inside this object, enter the name that is coming from the form
        => name: req.body.name,
    - Below it save it
        => newCategory.save()
    - Then execute it
        => then(savedCategory=>{})
    - Then, inside the then function redirect it
        => res.redirect("/admin/categories");
    - Test it by creating a new category
        => We have a new Category in the database MongoDB Compass


//////////////// Section 17 Lesson 131 - Displaying Categories ////////////////

Step 102: Let's get the data
    - In routes\admin\categories.js, get the Category
=> router.get("/", (req, res) => {
  Category.find({}).then((categories) => {
    res.render("admin/categories/index", { categories: categories }); // Step 98 + Step 102
  }); // Step 102
});
    - In views\admin\categories\index.handlebars, write an each loop inside the tbody
=> {{#each categories}}{{/each}}
        => Let's get the Id and name
            => {{id}}
            => {{name}}


//////////////// Section 17 Lesson 132 - Categories edit part -1 - Link ////////////////

So, we got the Create.
We got thr Read.
Now, we need the Update from the CRUD and then the Delete, right?

Step 103: Edit Categories
    - In views\admin\categories, create an edit view called "edit.handlebars"
        => Create a form
    - In views\admin\categories\index.handlebars, create a link to take us there
        => <th>Edit</th>
        => <td><a href="/admin/categories/edit/{{id}}" class="btn btn-info" >Edit</a></td>


//////////////// Section 17 Lesson 133 - Categories edit part 2 - Edit View ////////////////

Step 104: Edit Categories (Part 2)
    - Make sure that our edit view is working, so, let's create a route for edit in routes\admin\categories.js
=> router.get("/edit/:id", (req, res) => {
  Category.findOne({ _id: req.params.id }).then((category) => {
    res.render("admin/categories/edit", { category: category });
  });
});
    - Let's go back to views\admin\categories\edit.handlebars and put the value in the input
        => value="{{category.name}}"


//////////////// Section 17 Lesson 134 - Categories - Updating ////////////////

Step 105: So, let's go ahead and update our categories.
    - OK, so the first thing is that we need to create some type of route for it in routes\admin\categories.js
=> router.put("/edit/:id", (req, res) => {
  Category.findOne({ _id: req.params.id }).then((category) => {
    category.name = req.body.name;
    category.save().then((savedCategory) => {
      res.redirect("/admin/categories");
    });
  });
});
That is the first part.
We are saving the category, but it's not updating it because we need the override.
    - In views\admin\categories\edit.handlebars, in the form, we need a couple parameters
        => action="/admin/categories/edit/{{category.id}}?_method=PUT"


//////////////// Section 17 Lesson 135 - Categories - Deleting ////////////////

Step 106: Delete Categories
    - In views\admin\categories\index.handlebars, create a link and a button for the Delete
        => <td>
              <form
                action="/admin/categories/{{id}}?_method=DELETE"
                method="post"
              >
                <button class="btn btn-danger">Delete</button>
              </form><!-- Step 106 -->
            </td>
    - Let's create a route for delete in routes\admin\categories.js
=> router.delete("/:id", (req, res) => {
  Category.remove({ _id: req.params.id }).then((result) => {
    res.redirect("/admin/categories");
  });
});


//////////////// Section 17 Lesson 136 - Displaying Categories in Home Page ////////////////

Step 107: So, it will be so nice to have some type of dynamic categories here at home.
    - Include the page views\home\index.handlebars in some partials to make it dynamic
        => {{> home/sidebar}}
    - Include the page views\home\post.handlebars in some partials to make it dynamic
        => {{> home/sidebar}}
    - In views\partials\home, create a file "sidebar.handlebars"
Now, we need categories data in the home page,
    - So, in routes\home\index.js, include the Category model
        => const Category = require("../../models/Category");
    - Make a query for them
=> Post.find({}).then((posts) => {
    Category.find({}).then((categories) => {
      res.render("home/index", { posts: posts, categories: categories });
    });
  });
  - Let's go to the sidebar and edit it and loop through the categories
    => {{#each categories}}
    <div class="col-lg-6">
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#">{{name}}</a>
              </li>
            </ul>
          </div>
    {{/each}}
We got the categories working on views\home\index.handlebars.
But, it's not working on views\home\post.handlebars.
So, now, we need to do the same thing for that route as well
  - Let's go to routes\home\index.js and do the same thing
=> router.get("/post/:id", (req, res) => {
  Post.findOne({ _id: req.params.id }).then((post) => {
    Category.find({}).then((categories) => {
      res.render("home/post", { post: post, categories: categories });
    }); // Step 107
  });
});


//////////////// Section 17 Lesson 137 - Adding a Select to the Edit Post View ////////////////


Our application is looking pretty good, but we're missing something, right?
We have categories, but the categories are not doing anything.
We just created them.
What for?

Step 108: We need to start relating our categories to our posts. We need to find a way to show them when we create them and we edit them.
We need to relate our models. 
    - So let's create a categories field in models\Post.js
=> category: {
    type: Schema.Types.ObjectId,
    ref: "categories",
  },
  - In views\admin\posts\edit.handlebars, copy the select and paste another one at the top of it
=> <div class="form-group">
        <label for="status">Category</label>
        <select name="category" id="status" class="form-control">
            <option value="public">PHP</option>
            <option value="private">NodeJS</option>
            <option value="draft">Python</option>
        </select>
    </div>


//////////////// Section 17 Lesson 138 - Adding a Select to the Create Post View ////////////////

Step 109: Now, that we have our select for category in the edit, let's put it in the create view
  - Grab that categories select from views\admin\posts\edit.handlebars and paste it in views\admin\posts\create.handlebars under "File"
=> <div class="form-group"><!-- Step 109 -->
    <label for="status">Category</label>
    <select name="category" id="status" class="form-control">
      <option value="public">PHP</option>
      <option value="private">NodeJS</option>
      <option value="draft">Python</option>
    </select>
  </div>

Now, the next step for us would be to play around with the get request for the create route
    - So, make sure that you include your Category model in routes\admin\posts.js and put it together with the "Post" model (Step 59)
        => const Category = require("../../models/Category");
    - OK, OK, so now that we have the model, we can loop our documents, right, by creating this empty query here in routes\admin\posts.js and we can say find everything and then bring back the categories
=> Category.find({}).then((categories) => {
    res.render("admin/posts/create", { categories: categories });
  });
  - Now, that we have that data coming here, we can go to views\admin\posts\create.handlebars and loop through the option to display our own dynamic data that we get in our documents
    => {{#each categories}}
        <option value="{{id}}">{{name}}</option>
      {{/each}}


//////////////// Section 17 Lesson 139 - Finishing up with Categories ////////////////

Step 110: Display dynamic categories data in the edit view
  - Let's go to routes\admin\posts.js and loop the documents. So, copy the step 109 from the create route and paste it in the edit route
=> Category.find({}).then((categories) => {
      res.render("admin/posts/edit", { post: post, categories: categories });
    });

Step 111: Now another thing is that we don't have the capability to create a post with a category yet. In the database MongoDB Compass, we don't have a category field.
    - In routes\admin\posts.js, where we create the posts, at the new object, we need to add that category field
        => category: req.body.category,
Let's create a new post and now in MongoDB Compass, we can see a new category field
    - Now, let's create a category field in the edit in routes\admin\posts.js,
        => post.category = req.body.category;

Step 112: Now, another thing that I want to do here is that I want to show the categories in the main post page
    - Let's go to the post index "views\admin\posts\index.handlebars"
        => <th>Category</th>
        => <td>{{category.name}}</td>
Now we need to do a little extra step to make sure that we are displaying the category name here.
    - So, let's go back to our post route routes\admin\posts.js where we are rendering our view on the root of the post. We need to populate the post with the category
        => .populate("category")

Step 113: Now, there is another step that we need to make, because every time, let's say if I come here "All Post" and I click update, that's fine, but when we click edit again, that's not selecting the category.
    - Let's go to views\admin\posts\edit.handlebars and use the same thing we did with the select status
=> {{#each categories}}
    {{#select post.category}}
        <option value="{{id}}">{{name}}</option>
    {{/select}}
    {{/each}}


//////////////// Section 18 Authentification - Registration Lesson 140 - Auth Intro ////////////////

On this lecture, we are going to be learning how to use a module that will allow us to authenticate users,
not only with their email or whatever email
that we have in the database for them and their password,
but by using their Google account or Amazon calendar, Twitter account

So, I just want to remind you that back in a couple sections ago, we did this the hard way:
We created this from scratch. We were able to create a user hashed password and authenticate them.
We used bcryptjs to do that.
    => https://www.npmjs.com/package/bcryptjs

But, now we're going to be using passportjs
    => https://www.passportjs.org/


//////////////// Section 18 Authentification - Registration Lesson 141 - Creating our User Model ////////////////

One of the reasons why we need a login system in our application because of the comment section that we are going to create,

Step 114: We want to be able to have the ability to register users. We need to create some type of model that takes the first name, the last name and the email.
So let's go ahead and create a model, and we, of course, have some type of validation that we have to do here to make sure that these fields match,
    - Let's create a new model in "models" and name it "User.js"
        => Copy the content from models\Category.js and paste it in there
        => Create all the fields
        => All these fields have to be filled up and not empty at all
        => Make the changes for the User model
            => UserSchema
            => users table
    - We are also going to do validation in the registration page "views\home\register.handlebars"
        => In the input, write "required"


//////////////// Section 18 Authentification - Registration Lesson 142 - Adding our User to the Post route ////////////////

Step 115:  Let's go to the register route routes\home\index.js
    - We need to create a post register route
=> router.post("/register", (req, res) => {
  res.send("home/register");
});
Test it and register a new user, submit register button
    => It seems like it's working
        => it says "home/register"
    - Make sure the register form in views\home\register.handlebars has fields with a "name" field
    - In the route "routes\home\index.js", we need to require the User model
        => const User = require("../../models/User");
    - Now, put some data in this post register route
=> const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
This is the first part, so we have this new user here.
Now, on the next step is going to be a little bit more complicated because we have to do some password hashing and we have to do maybe some validation.


//////////////// Section 18 Authentification - Registration Lesson 143 - Adding some Validation ////////////////

Step 116: We need to start validating some of the form data in the server side
We already did some validation with HTML 5 and in the model
  - We're going to do some of the validation we did on "routes\admin\posts.js" (Step 80)
    => Copy the code and paste it in "routes\home\index.js" below the step 115
    => Let's make the changes
    => In the password field, add a condition
=> if (req.body.password !== req.body.passwordConfirm) {
    errors.push({ message: "Password fields don't match" });
  }
  - We need to display our error in "views\home\register.handlebars"
  - We need to have the error in our layout "views\layouts\home.handlebars" before the "body"
=> {{#if errors}}
{{#each errors}}
<div class="alert alert-danger">
  {{message}}
</div>
{{/each}}
{{/if}}



//////////////// Section 18 Authentification - Registration Lesson 144 - Registering a User ////////////////

Step 117: So, it's time for us to start pulling data in our database, right? We need to start inserting it because we need our users to be able to log in.
  - In "routes\home\index.js", now, that we know that our "DATA WAS GOOD", we need to bring our new object in the else statement
=> const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
  - Now, we need to assign a new value to this password "password: req.body.password,". First, we make sure that everything is working. Then, we start playing around with hashing password.
=> newUser.save().then((savedUser) => {
      res.send("USER WAS SAVED");
    });
Test it in the application and register a new user. It seems like it's working because it says
    => "USER WAS SAVED"
    => In MongoDB Compass, there is a new collection "users" and inside we have a new document (new user)

We were able to insert our data in the database. We created a new collection there.
Yes, we have a password. But that's not what we want. We want to be able to hash that password.


//////////////// Section 18 Authentification - Registration Lesson 145 - Hashing User's password with a module - part 1 ////////////////

We are able to register a user and I was searching for a module to install, so that way we can start hashing our passwords.
I don't want to do it from scratch guys, it's just a waste of time.

There are bcrypt and bcryptjs which are an algorythm very good and very secure that we use in PHP. And NodeJs has a bunch of modules that we can use with it.
=> bcrypt is slower, so it will take more time to hack it, because it is written in pure Javascript
=> But, bcryptjs has less issues, so we will use this one.

Step 118: Using bcryptjs
    - Let's install bcryptjs
        => npm install bcryptjs
    - In "routes\home\index.js", require it
        => const bcrypt = require("bcryptjs");
    - Then, create the configuration in the else statement
=> bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        console.log(hash);
      });
    });
Test it by register a new user. You can see the hashed password in the terminal.


//////////////// Section 18 Authentification - Registration Lesson 146 - Hashing User's password with a module - part 2 ////////////////

Step 119: So, it's time for us to start putting some generated hashes into our database, so, some hash passwords.
    - Now, that we have our hashed password in routes\home\index.js, we need to use it and convert it into my hash.
=> newUser.password = hash;
    - Then, we save the data, so we put the following code below under the line of code above
=> newUser.save().then((savedUser) => {
          res.send("USER WAS SAVED");
        });
    - Delete the registered users from the database
    - Create a new user in the registration page in the application
        => it says "USER WAS SAVED"
    - Refresh MongoDB Compass
        => The user was created in the database with a hashed password
    - Now, redirect this user in the login page
        => res.redirect("/login");



//////////////// Section 18 Authentification - Registration Lesson 147 - Adding Flash notification for registration ////////////////

Step 120: Before redirecting our users to the login page, we could write some flash message
    - In routes\home\index.js, before the redirection
        => req.flash("success_message", "You are now registered, please login");
    - The flash module is only include in our admin layout "views\layouts\admin.handlebars", now we need to include in our home layout "views\layouts\home.handlebars" to display it
        => {{> home/form-msgs}}


//////////////// Section 18 Authentification - Registration Lesson 148 - User already exists feature ////////////////

Now, it's time for us to come back to the register form here.
And the features that I want to add is that I want to be able to not allow the user or not bother the user with entering all his data again once it messed up

Step 121: We're going to make sure that all the data is back in the form when somebody is registering. And we're going to check for the email because we don't want to do anything if that email exits.
    - Let's start with the data, in routes\home\index.js, in the post register, where we are returning the errors, we can start returning the same value of the form back, same thing with have in the object.
    => firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    - Now, go back to the register view "views\home\register.handlebars" and type these things in the value field
=> value="{{firstName}}"
=> value="{{lastName}}"
=> value="{{email}}"
Test it by registering a new user and messing up. Now, it gets refreshed, but the data is still there.

Step 122: Now, let's play around a little bit and display some type of message; if this email is available in the database, if it does exist.
    - Let's go back to routes\home\index.js, and right before we start messing around with creating a user, I think we should start doing it right here in this else statement.
=> User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
      }else {
        req.flash("error_message", "This email exists, please login");
        res.redirect("/login");
      }
    });
    - We don't have this message anywhere, so, let's create it in app.js
=> app.use((req, res, next) => {
  res.locals.error_message = req.flash("error_message");
  next();
});

Now, one thing that I wanted to make you aware, and I'm actually going to mention that later, is that we can take our functionality from that "routes\home\index.js" to our model.
I'll show you that in a minute, OK, we can create methods.

    - In views\partials\home\form-msgs.handlebars, create a new partial
=> {{#if error_message}}
  <div class="alert alert-danger">
    {{error_message}}
  </div>
{{/if}}
Now, when we try to register with an existing email, it says "This emaol exists, please login" and it redirects to the login page


//////////////// Section 19 Authentification - Login Section - Lesson 149 - Moving Database Config and Post login route ////////////////

So, it's about time we start, you know, putting stuff where they need to be in this course and this application.

Step 123: So, in the config, create a file here for the database called "database.js"
    - Inside, it's just going to be a module that exports. And we're just going to export out some data here. And what I want to do is I want to say MongoDb and then I want to put here the database address.
=> module.exports = {
  mongoDbUrl:
    "mongodb+srv://Com4Muz:ejgwlPjS7onYjSZM@localhost.8urmd.mongodb.net/cms",
};
    - In app.js, import this file so that we can use it
=> const { mongoDbUrl } = require("./config/database");
    - Use it in app.js, inside connect() instead of the old database URL
=> mongoose
  .connect(mongoDbUrl, {})

OK, so now we are about start doing authentication in our application.
If we go to homepage and we go to logging here, we don't have any anything for logging yet.

Step 124: So, let's go and create some routes for login
    - In the home route "routes\home\index.js", we only have a get.login, but we don't have a post.login, so let's create one and test it to see if it works
=> router.post("/login", (req, res) => {
  res.send("LOGIN POST WORKS");
});
    - Go to the login view "views\home\login.handlebars" and check if we have a "method=post" in the form
    - Go to the login page and try to login
        => it says "LOGIN POST WORKS", so it seems like it's working

So, now we got this working,
we have the database,
we're starting to create more configurations outside of our code,
so that way everything is more organized.


//////////////// Section 19 Authentification - Login Section - Lesson 150 - Passport Module part 1 - Login route setup ////////////////

So, it's time for us to start playing around with passportjs
Remember, that's a module that I introduced you in the beginning of the previous section.
Either way, this is going to allow us to log in to our application by using other services like Google, Facebook, Twitter and all that stuff.
But we are going to be using it to log in with our own credentials.
And at the same time, we're going to be making our application a little bit more flexible because we can plug in any strategy.
And when I say strategy, I mean any other code that will allow us to to log in to like, say, Google or anything like that.

Step 125: Let's download passportjs, and passport-local which is going to be our strategy.
    => npm install passport passport-local
Local means that it's just going to check for the username or email and our password from the database

Step 126: Now we need to include it in our route home index
    - In "routes\home\index.js", require them
=> const passport = require("passport");
=> const LocalStrategy = require("passport-local").Strategy;
So, now that we have our passport, let's use a function call authenticate.
    - Let's go to our login route
=> router.post("/login", (req, res, next) => {
  // Step 126
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
  // res.send("LOGIN POST WORKS");
});

On the next lecture, we are going to we're going to test out passport.


//////////////// Section 19 Authentification - Login Section - Lesson 151 - Passport Module part 2 - testing ////////////////

Step 127: So, it's time for us to start testing out to see if we are communicating with passport, if we are in sync with it.
    - Now in "routes\home\index.js", on top of APP LOGIN, we're going to use a passport method (like a middleware) called use, then new up the LocalStrategy
        => passport.use(new LocalStrategy())

So the passport version 0.4.0 and the passport-local version 1.0.0, only authenticate the username by default, and not the email
So we need to modify that, so that we authentificate the emails.
As, you can see in the passportjs.org documentation, we can override this code

    - So let's pass some parameters in the use passport method
        => { usernameField: "email" }
    - Now, we put a call back inside it
        => (email, password, done)=>{}
    - Now, let's test it
        => console.log(password);
We're supposed to see the password here in the terminal.
As you can see, it says 123
    - We can also test it with the email just to make sure
        => console.log(email);
You can see the email in the terminal

Now, we are not really doing anything yet because what we got here is that we were hooking up into the local strategy, but we are still not going into the database and verifying the user there, so this is not doing anything yet.
And we still not even working with sessions.


//////////////// Section 19 Authentification - Login Section - Lesson 152 - Passport Module part 3 - Verifying users ////////////////

Step 128: All right, so we need to jump into the database and try to verify a user.

Let's go back here to the documentation, which I like to look at all the time.
We are going into the database, we are checking for username in this case, in our case, we're going to check for email. etc.

    - We have the user model. So, we're going to use it in routes\home\index.js, inside the function, we're going to check for the email, then we're going to bring the user back
        => User.findOne({ email }).then((user) => {});
    - We're not going to check the errors like in the documentation, but I'm going to check if not user, then returning the done function and return a null for the error, and false because the user is not there, and some type of message
        =>  if (!user) {
        return done(null, false, { message: "NO USER FOUND" });
      }
    - Now, we need to display this stuff. In models\User.js, use a schema
      => UserSchema.methods.testMethod = function () {
  console.log("using schema method");
};
    - Then, call the function in routes\home\index.js
      => user.testMethod();
When you login, it says in the terminal "using schema method"
    - OK, so we can come here in models\User.js, inside the schema method, and create some type of comparison for our bcrypt because that's what we need.
    - In routes\home\index.js, write the code
        => bcrypt.compare(password, user.password, (err, matched) => {
        if (err) return err;
        if (matched) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      });


//////////////// Section 19 Authentification - Login Section - Lesson 153 - Passport Module part 4 - Logging in the Users ////////////////

Step 129: To make the previous code working, we need to initialize the password
    - In app.js, require passport
      => const passport = require("passport");
    - In app.js, right after the sessions, write the following code
      => app.use(passport.initialize());
    => app.use(passport.session());
    - Passport needs to serialize the user, it needs to grab whatever data it is, if it's an object or something serialize, so it is easier to transmit that data into a session. In routes\home\index.js, write the following code
=> passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
And now, we can say that the user has been serialized and then, now when we login we're going to admin.


//////////////// Section 19 Authentification - Login Section - Lesson 154 - Displaying Logged-In User and Errors ////////////////

Step 130: So, what I wanted to do is I wanted to put maybe the user name for our user or the first name or something here in our application just to show you that he's logged in in the admin
    - In app.js, use this global variable
        => res.locals.user = req.user || null;
    - Go to the logout in "views\layouts\admin.handlebars"
        => <i class="fa fa-user">{{#if user}}{{user.firstName}}{{/if}}</i>
    - Show some type of error where the user is not able to login. In app.js
        => res.locals.error = req.flash("error");
    - In "views\partials\home\form-msgs.handlebars", add a message
=> {{#if error}}
  <div class="alert alert-danger">
    {{error}}
  </div>
{{/if}}
When you log in and you type the wrong password, it says "incorrect password"
When you type the wrong email, it says "USER NOT FOUND"


//////////////// Section 19 Authentification - Login Section - Lesson 155 - Login out ////////////////

Step 131: So, it's time for us to start loging our users out just because and I found the logout function here in passportjs.org
    - In "routes\home\index.js", let's create the logout route
=> router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});
Test it by loging in, then loging out


//////////////// Section 19 Authentification - Login Section - Lesson 156 - Login out Modal ////////////////

So we have this logout form here in the admin that we don't know what in the world it's happening, but this is Bootstrap, of course, and we need to make sure that we know how that works, right.

Step 132: So let's go to our admin handlebars layout "views\layouts\admin.handlebars" and here where we click logout, it's activating a modal called "exampleModal" and it's taking me to "login.html"
    - Change the path "login.html" to "logout"


//////////////// Section 19 Authentification - Login Section - Lesson 157 - Protecting our Admin Routes ////////////////

On this lecture, we're going to be learning how to protect our routes. There are times when we might want a user not to see certain files or not to do certain things with certain data.

Step 133: So what if we don't want the user that's not logged in to be able to see the posts here in the admin "ALL POSTS" and even "Categories".
Now, I was looking around and I think I found something here, this is added to a request "red", it's called "req.isAuthenticated".
This function is going to allow us to make sure that the users logged in OK.
    - Create a helper called "authentication.js"
    - Inside it, export some function
=> module.exports = {
  userAuthenticated: function (req, res, next) {},
};
    - Inside the function, create an if statement
=> if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  },
So now, when we want to use this functionality, we just have to include it wherever we need it and we need it.
  - Let's go to the post route "routes\admin\posts.js" and include it there
    => const { userAuthenticated } = require("../../helpers/authentication");
  - Now, we're going to use this userAuthenticated and pluging it in all our routes, because I don't want anybody in the post admin to be snooping around if they're not authenticated.
=> router.all("/*", userAuthenticated, (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});
Now, if I go to admin, and remember that our server is refreshing with nodemon, so because it's refreshing our session is lost.
So if I refresh here in "ALL POSTS", this is going to redirect me to login because we're not logged in anymore.
    - So, let's login
        => Now, I can access my posts
We shouldn't even be able to watch that at all. So, we can resolve that
    - In the admin index route "routes\admin\index.js", require the userAuthenticated
        => const { userAuthenticated } = require("../../helpers/authentication"); // Step 133
    - Then plug the userAuthenticated in all the routes
=> router.all("/*", userAuthenticated, (req, res, next) => {
  req.app.locals.layout = "home";
  next();
});
Now, if we try to access the admin, we can't access that admin at all.

OK, it's better that you put this everywhere just because you never know somebody is going to send a direct request and we don't want anybody to take our chances.
    - OK, so I'm going to put this in categories now "routes\admin\categories.js"
=> router.all("/*", userAuthenticated, (req, res, next) => {
  req.app.locals.layout = "home";
  next();
});

Now, one word of advice: We are going to be creating some more things in admin, so you might not want to protect all admin because it's just going to be chaos every time we create a new featuring admin, we have to log in to see it.
So you might want to take that off from admin for now. OK, so that way we don't have to keep logging in and logging in all the time.
    - So, take out "userAuthenticated" and later on we will plug it in. Now, you know how to use it.


//////////////// Section 20 Comments - Lesson 158 - Model relationships ////////////////

So, there are a couple of the features that I want to include here.

Step 134: But one of the most important features is that I want to include comments on each of these posts.
    - The first thing that we need to do is create some type of model if we are going to be creating post.
        => In "models" reate a model called "Comment.js"
        => Copy the content from "models\Category.js" and paste it in there
        => Make the changes
We could include the comments in the Post model. But, I think it's better to keep this in a seperate collection. That's why we created this model.
We want from the comments, the user and the body
    - Create the user
=> user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
    - Create the body
=> body: {
    type: String,
    required: true,
  },
    - In "models\Post.js", we want to have a field of comments, and here we keep an id of each comment
=> comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
So, in the post model, we are going to keep all the IDs of all the comments instead of keeping all the individual documents embedded in here, OK? It's better to have IDs.

So, that's it, we're done with the relationship guys, it is very simple: 
In the Comment model, we are referencing the user.
And because we are referencing that model, that collection, we have access to all this properties there for that user later on.


//////////////// Section 20 Comments - Lesson 159 - Create route part 1 - form ////////////////

So, we have created our relationship between the Comment schema, the Post schema and the User schema

Step 135: We know that we are creating a comment in the home page, so need a route to add a comment and we also need a route to display a comment
    - Create a comment route called "comments.js" in the admin route "routes\admin"
    - Inside this file, we need Express, the Router, the export module
        => const express = require("express");
        => const router = express.Router();
        => module.exports = router;
    - The first route that we need is the post route, and let's see if it works
=> router.post("/", (req, res) => {
  res.send("IT WORKS");
});
    - Now, we need to include this route and use it in app.js
=> const comments = require("./routes/admin/comments");
=> app.use("/admin/comments", comments);
    - Let's go the the post view "views\home\post.handlebars", on the comment section on the form make changes
=> put an action with the path "/admin/comments"
=> put a post method
=> give a name of "body"
Test it by submitting a comment
    => it says "IT WORKS"


//////////////// Section 20 Comments - Lesson 160 - Create route part 2 - creating comments ////////////////

We are creating comments on this section, of course, but we need some information. We need some data.
And some of the data that we need, in the post view "views\home\post.handlebars", is the post id, right, because we want to send the post id, because we need to find that post so we can insert that specific comment that's being created in the Post model "models\Post.js".

Of course, in this lecture, I'm also going to show you how to insert the the logged in user to our comments Model as well or Schema

Step 136: Getting data
    - So the first thing that we need is we need to send the ID. Let's go to the post view "views\home\post.handlebars"
=> There are 2 ways of doing it
    1. By adding {{post.id}}
        => <form action="/admin/comments/{{post.id}}" method="post">
    2. By creating a hidden input (We're going to do it this way)
        => <input type="hidden" name="id" value="{{post.id}}">
    - In the comments route "routes\admin\comments.js", make sure that you include your Post Model and your Comment Model
        => const Post = require("../../models/Post");
        => const Comment = require("../../models/Comment");
    - Inside the post router, find that specific post that is going to come from that body from the post data
        => Post.findOne({ _id: req.body.id }).then((post) => {});
And once we find the post, then we are going to do a couple of things.
    - First of all, we need to construct the object that's coming or the new comment. So we're going to need this up. And inside we need the user and the body.
=> const newComment = new Comment({
      user: req.user.id,
      body: req.body.body,
    });
    - Now, access the comments and push the newComment to them
        => post.comments.push(newComment);
    - Save the post
        => post.save().then((savedPost) => {});
    - Then, save the comment
        => newComment.save().then((savedComment) => {});
    - Well, the last thing we want to do is redirect the users back to where they were. Or maybe show some type of flash data. OK, we're probably going to do that later.
        => res.redirect(`/post/${post.id}`);

Let's test it. We need to login.
Let's go to our database. And here this is what we supposed to do. This is the first document here that we got.
And we're supposed to see a field, a new field called "comments" with an array of IDs.

Now, it's not working. 
    - So, you need to go to your Post model and as the second parameter of this function that we're newing up right here "schema", we need to create another an object giving directions to use a Push each.
        => {usePushEach: true}
Here we go, let's check our database, and voila, there we go.
Look at that.
We got an array now with our first comment,
This ID should match a new collection that we have here somewhere.
Now, let's refresh and voila, new collection "comments" with the same ID.
Not only that, but we got the user.
Look at that.
So, if you go to the user collection, we can access that user from that comment, guys.


//////////////// Section 20 Comments - Lesson 161 - Setting up our Comment index ////////////////

TIP: You know, you're welcome to use a tool like balsamiq or something like that to create your mock up for your application.
    => https://balsamiq.com/

We're making a comment, right?
First of all, we can't see the comments in the admin.
That would be wonderful if we can see the comments there.
Right?
And delete them or approve them or do something with it.
So that's one thing that we've got to look into it.

Step 137: What about approving the comment? Is the comment active or not active or something like that? Can we add another field in the database and make it so?
So if we go to the comments collection here in the database, we only have the body of the comment.
Can we create some type of field here that would be maybe a boolean value that, say zero or one making that comment active or not?
First of all, let's go and start working with the roots to with admin. I think it would be nice if we could create a link inside the posts here that would say comments because comments actually belong to this to posts. Right?
But let's just created it separately.
    - In "views\partials\admin\admin-side-nav.handlebars", create a link for the admin
=> <li
    class="nav-item"
    data-toggle="tooltip"
    data-placement="right"
    title="Link"
  >
    <a class="nav-link" href="/admin/comments">
      <i class="fa fa-fw fa-gear"></i>
      <span class="nav-link-text">Comments</span>
    </a>
  </li>
    - In "routes\admin\comments.js", make sure that our routes has are applying the admin layout, OK, don't forget that, so we need this "all route", applying this layout.
=> router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});
    - In "routes\admin\comments.js", create a new route
=> router.get("/", (req, res) => {
  res.render("admin/comments");
});
    - Now, we need to create that comment view. In "views\admin", create a new directory called " comments", and inside this folder, create a file called "index.handlebars"
        => put "<h1>Comments</h1>" to test it
Refresh, and now we click "Comments" link and now it's working.
OK, we got that.


//////////////// Section 20 Comments - Lesson 162 - Displaying Comments ////////////////

Step 138: In the router in the comments route "routes\admin\comments.js", in the index, we need some data
    - OK, so let's actually create some type of fake table there. Let's go to the comments index "views\admin\comments\index.handlebars" and put the code for the fake table (got it from bootstrap 4 https://getbootstrap.com/docs/4.0/content/tables/)
So let's work on displaying them.
    - Let's go to the route here "routes\admin\comments.js". Let's see if we have the model. Yes, we do.
    - Now, let's find the comments in the index route
=> Comment.find({}).then((comments) => {});
    - Then we are going to create this object here so we can grab it with handlebars, right?
=> res.render("admin/comments", { comments: comments });
    - Let's go back to comments index "views\admin\comments\index.handlebars", and product the data dynamically with handlebars.
OK, let's do the "each" and let's go through "comments", that variable that's offered to us now.
=> {{#each comments}}{{/each}}
Actually, we don't have the date in the comment, so we're not going to get anything on the on the date on the model, so that would be good if we have it right.
    - Let's go to the Comment model "models\Comment.js", and create the date field
=> date: {
      type: Date,
      default: Date.now(),
    },
Let's refresh the Comments page, now, we can see some data


//////////////// Section 20 Comments - Lesson 163 - Displaying Comment Owner and formatting date ////////////////

So, we got a couple of things going on in your application. And some of the things that I want to start
 adding to itis that I want to add the owner of the comment.

And now, keep in mind, guys, that we added this comment section here.
But, you know, we might have to modify this later because we don't want every user to be able to see all the comments.
We don't even want them to see or manage their comments.

Step 139:Now, we want to bring the data in the Comments in Admin
    - What I want to do is I want to go to the comments route and I want to populate it with the user, remember that we have a relationship.
        => Comment.find({}).populate("user")
Now, let's refresh the Comments page in the Admin. And as you can see, we can see the user as an object
    - Now, let's go to the comments index "views\admin\comments\index.handlebars" and put the firstName
=> <td>{{user.firstName}}</td>
Let's refresh the Comments page in the Admin, and now we can see the user first name in the table
    - Let's formate the date too, in the comment index "views\admin\comments\index.handlebars"
=> {{generateDate date "MMMM Do YYYY"}}
Let's refresh the Comments page in the Admin, now you can see the date formatted



//////////////// Section 20 Comments - Lesson 164 - Delete Comments ////////////////

Step 140: So, the next step for us to do is to put this delete butto here in the comments table in Admin.
    - In the comments index "views\admin\comments\index.handlebars", create a 
        => <td>
          <form action="/admin/comments/{{id}}?_method=DELETE" method="post">
            <button type="submit" class="btn btn-danger">Delete</button>
          </form>
        </td>
    - Let's go back to the comments route "routes\admin\comments.js" , and let's create some type of delete functionality. Inside it, we access the comment and remove it
=> router.delete("/:id", (req, res) => {});
It's working. We're able to delete comments in Admin.

//////////////// Section 20 Comments - Lesson 165 - Delete Post with Comments ////////////////

We're going to learn how to delete a related data.
This is a very good skill to learn when you're deleting certain documents, especially when you're deleting users that have posts or maybe posts that have comments and stuff like that.

Step 141: Now, it's time for us to build a functionality where we delete the post and all the comments that are going with it
    - In the post route "routes\admin\posts.js", in the delete route, I want to populate the comments with it
        => Post.findOne({ _id: req.params.id }).populate("comments")
    - Test it
        => console.log(post.comments)
Let's refresh the All posts page in Admin, and delete a post. Now, in the terminal, we have a comment (if we created a comment to this specific post before)
    - Now, we need to check to see if this array is empty or not because we don't want to make extra functionality here if we don't need to. So, let's check to see if this array post.comments.length is smaller than one. OK, then we know when it is zero it is empty.
    And when it is not empty we want to grab the array and do a for each on it. This for each is going to bring the comment back so we can use it. And we say comment.remove();
        => if (!post.comments.length < 1) {
          post.comments.forEach((comment) => {
            comment.remove();
          });
        }
    - We have our empty comment or not, we still want to remove the comment "post.remove();". Now, keep in mind that these returns a promise as well. You can just attach a promise here and you can say "postRemoved".
=> post.remove().then((postRemoved) => {});
Now, when we delete the post in the admin, the post and the comments are deleted in the database as well

You can use this for your users functionality if you want to delete users later on with their posts.


//////////////// Section 20 Comments - Lesson 166 - Displaying only logged in user comments ////////////////

So, I went ahead and created another user. So, we have 2 users.
I also created 2 posts.
Make sure that you login and you create two comments, one from each individual user.

Step 142: My goal here is to show you in this lecture to kind of filter through the comments that are belong to the current user, the users is logged in, and that's super easy to do.
There are a couple of ways that we can do that:
1. We can come to the comments route "routes\admin\comments.js"
And right here, when we are looping and showing all the comments and populating with a user,
we can do a little filter here and we can say, well, I just want to see the comments that belong to the "req.user.id", which is the user that's logged in.
Remember that we got this user in the request from our login functionality.
=> router.get("/", (req, res) => {
  Comment.find({ user: req.user.id }) // Step 142
    .populate("user") // Step 139
    .then((comments) => {
      res.render("admin/comments", { comments: comments });
    }); // Step 138
});
Now, if I login with the second user, for example, and go to the Comments in the Admi, I can only see the comments of that specific logged in user.



//////////////// Section 20 Comments - Lesson 167 - Deleting comment references in the Post documents ////////////////

So, I've got my database empty again, and the reason, like I said before, why I empty it is because we want to make sure that whatever we are creating it's doing what is supposed to be doing and whatever we are basically using is doing what is supposed to be doing.

Step 143: My goal here in this lecture is to be able to delete this comment (in the post where there are more than one comment), not only deleted, but also take it off from this comment array (in the database), OK, because we don't want to be referencing anything that we don't have.
And, you know, if you can keep putting things into this array and then you delete the comments separately, then all these references are going to be there.
The comments are not going to be there, but you're going to have a whole bunch of references.
We're going to take that off every time we delete a comment.
    - Well, the first thing is removing the comment. OK, that's that's done in "routes\admin\comments.js" (Step 140)
=> router.delete("/:id", (req, res) => {
  Comment.remove({ _id: req.params.id }).then((deleteItem) => {
    res.redirect("/admin/comments");
  });
});
    - But then we get this promise here with the comment that is being deleted with a result, and we want to do something with it.
=> Post.findOneAndUpdate({ comments: req.params.id });
    - Inside it, let's use a MongoDB operator. This is going to allow us to pull stuff from an array.
=> { $pull: { comments: req.params.id } }
    - And of course, we're going to pass in now a callback function with some error and maybe some data or something like that
=> (err, data) => {
        if (err) console.log(err);
      }
Now, when you delete a comment, it's deleted from the Admin, and in the database it's deleted from the comments collection and from the posts collection in the comments array.



//////////////// Section 20 Comments - Lesson 168 - Hiding comments if not allowed ////////////////

I want to focus right now is on the comments because we have a feature in the "All posts", we have this "Allow commentsa here that I planned from the start.
I want to be able to either allow or not allow comments.
And we can see that this is false here. Right?
And we go back, we can see that this is true.
So, that's already set up in our database.
And that's not hard to do.
Let's go back to our post.
We're not supposed to be seeing comments there, so let's not accept them.

Step 144: Allow or not allow comments.
    - Let's go the post comments form in "views\home\post.handlebars". So what I want to hide is the comment box/form "<!-- Comments Form -->"
We won't allow them to see the rest of the comments, the commentators, but not the comment itself.
=> {{#if post.allowComments}}{{/if}}
Now, as you can see, when you click on a post where the field Allow Comments is false in the Admin, we can't see the "Leave a comment" box
    - Now, let's put an else statement there because we need to let them know that unless they are logged in or something, this is not going to work.
=> {{else}}
<h4>Comments are not allowed for this post</h4>
<br>
<hr>
    - But we also want to make sure that our users logged in to make a comment.
=> {{#if user}}{{/if}}
So now if we are logged in, we will be able to see that, if not, we won't see anything.
    - OK, now what we need to do in this else statement here.
=> {{else}}
<a href="/login">
  <h4>You need to login to comment</h4>
</a>
<br>
<hr>


//////////////// Section 20 Comments - Lesson 169 - Displaying comments - FRONT-END ////////////////

Another functionality that I want actually footing here is the ability to have comments for posts.

Step 145: So let's go and see how we can get dynamic data here from the comments.
First, create 2 comments for the first post, for example
    - In the home index route "routes\home\index.js", in the post route, let's do a populate
=> .populate("comments")
    - In the post comment form "views\home\post.handlebars", let's play around with the "<!-- Single Comment -->" div and loop through the comments
=> {{#each post.comments}}{{/each}}
    - Display the user (id) and the body
=> {{user}}
=> {{body}}


//////////////// Section 20 Comments - Lesson 170 - Populating users in comments ////////////////

OK, anyway, so the last lecture we got to display the comments.
We're displaying the body properly, but it's time for us to display the user.
We are displaying the user ID here, but that's not what we want.
Remember that when we are seeing ideas like this, that means that we have to do the populate.

Step 146: So, in the home index route "routes\home\index.js", we are populating the comments. Well, we need to populate the user, OK?
So now that we are populating the user, we need to tell it in which model to find it.
=> .populate({ path: "comments", populate: { path: "user", model: "users" } })
Now, if we refresh the post with the comments, we can see an user object
So now we can say "{{user.firstNam}}" and we can see the user first name.

It would be nice to put this in moderation or something like that and approve the comments, maybe we'll add a feature later on, OK, because we don't want a lot of people to be putting comments here unless we moderate it.


//////////////// Section 20 Comments - Lesson 171 - Populating user for posts ////////////////

Step 147: I want to actually add the name here of the specific owner of this post.
    - So let's go back to our "views\home\post.handlebars"
=> {{post.user}}
It's not working
OK, so let's go back to where we are actually bringing the user.
Well, we don't have a user for the post, guys, we don't have one, so that's a really bad thing

Now, to avoid confusion between the logged in user and the user for that specific data, you might want to change your global user that we have in app.js (Step 130)
=>  res.locals.LoggedUser = req.user || null;
OK, we're probably going to do that later on when we see some conflicts
    - So let's go ahead to our Post model "models\Post.js" and let's create a user.
=> user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
So now we have that space there to be put in the user
But we don't have a user.
So remember, we need to insert a user now in post.

    - Let's go to "routes\admin\posts.js":
where we are editing the post
=> post.user = req.user.id;
where we are adding the the post
=> user: req.user.id,

    - In Admin, delete all the posts
    - Let's login
    - Let's create a post
On the home page, click on the new post, and it looks like the user was inserted.
But, the problem is we don't have the user first name, we only have the ID.

    - Let's go back to our home index route "routes\home\index.js" , where we are populating our comments and the user for those comments
But we're not populating the user for that for the specific posts.
So,we're going to create another populate to populate the user.
=> .populate("user")
Now, when we refresh the post, we got the user object
    - Let's go back to "views\home\post.handlebars"
=> {{post.user.firstName}}
Refresh the post, now the user first name is displaying


//////////////// Section 20 Comments - Lesson 172 - Creating a User specific page for Posts ////////////////

A couple of things that I want to do in this lecture here is:
we want to add a link to see the specific posts.
We're going to allow the users to see all the posts generated by other users, but we're not going to allow them to edit or delete.

Step 148: So we we're going to create a link here in Admin that's going to say "My posts" or something like that. We're going to go to that link and we're going to see all the polls that are ours and we're going to be able to delete and edit those posts.
    - Let's go "views\admin\posts\index.handlebars" and we want to create another table.
=> <td><a href="/post/{{id}}">View</a></td>
=> <th>View Post</th>
In Admin, if we click on this link it takes us to that specific post

    - In the post route "routes\admin\posts.js", let's create a route
=> router.get("/my-posts", (req, res) => {
  Post.find({user: req.user.id })
    .populate("category")
    .then((posts) => {
      res.render("admin/posts/my-posts", { posts: posts });
    });
});

    - Now, let's create the my-post view called "my-posts.handlebars" in "views\admin\posts"
    - Copy the content from "views\admin\posts\index.handlebars" and paste it in the my-posts view
    - Let's create a link in the Admin sidebar to see all our posts. 


    - I'm going to make this route. Let's go ahead and create it in "views\partials\admin\admin-side-nav.handlebars"
    => <li>
        <a href="/admin/posts/my-posts">My Posts</a>
      </li>
To see our posts, we need to be logged in
Click to "My Posts". Now we got only the posts related to that use.

    - Let's logout and create another post from another user
Now, if you go to "My Posts", you only see that post from that specific user

Remember what I told you about the buttons here in "All Posts". It is better that we don't allow whoever to delete or edit barns here.
We also have to create another column for this that doesn't look right.
    - Let's go to "views\admin\posts\index.handlebars", put "View Post" after "Allow Comment"
    - OK, and now we got to take all that buttons off and leave it in the other one. Let's take this off from "views\admin\posts\index.handlebars"
        => <td><a
            href="/admin/posts/edit/{{id}}"
            class="btn btn-info"
          >Edit</a></td>
        <td><!-- Step 70 -->
          <form action="/admin/posts/{{id}}?_method=DELETE" method="post">
            <button type="submit" class="btn btn-danger">DELETE</button>
          </form>
        </td>


//////////////// Section 21 AJAX Feature - Lesson 173 - Installing Bootstrap Buttons Plugin ////////////////

So, the time has come where we are going to be creating an amazing feature, another amazing feature for our project.
Well, we're going to be doing this slight of button here.
Now, this button, this switch, we're going to place it right here.
And it's going to allow the user to either approve or disapprove the comment.

But, the great thing behind the switch is that is a Bootstrap switch that sends a AJAX request to our database.
So, when we click, the switch is going to go to one side on or off and the on that is going to send a request to the database that is going to be updating without refreshing the page.

Because, in this lecture, I want to show you how to do AJAX with node.js.

Step 149: So the first thing is that you need to get Bootstrap switch.
    - OK, so inside all your files for your project, you should have a folder that's called "Bootstrap Switch".
and we're going to need 2 files from here:
In "PROJECT-TEMPLATE-ASSETS\bootstrap-switch-master\dist\css\bootstrap3" the file called "bootstrap-switch.min.css"
    => Insert it in our project in "public\css"
And in "PROJECT-TEMPLATE-ASSETS\bootstrap-switch-master\dist\js" the file called "bootstrap-switch.min.js"
    => Insert it in our project in "public\js\admin"

    - But, one thing that I wanted to get it over with right now is this "My Posts" section where we go and when we update our "my posts", the redirection is wrong. It is taking us it to "admin/posts" and when we delete it is also going to take us to admin/posts.
So let's fix those redirections real and go to "routes\admin\posts.js".
=> res.redirect("/admin/posts/my-posts");

    - Now, I want to take out the footer and couple other files from "views\layouts\admin.handlebars" and put them in a partial
=> {{> admin/footer}}
    - Create the partial for the footer in "views\partials\admin" anc call it "footer.handlebars"
    - OK, so now it's time for us to link this down here.
=> <!-- Bootstrap Switch -->
<script src="/js/admin/bootstrap-switch.min.js"></script>



//////////////// Section 21 AJAX Feature - Lesson 174 - Initializing our Button ////////////////

Step 150: OK, so we got Bootstrap switch installed, now it's time for us to create that input that we want.
    - So let's go to comments index "views\admin\comments\index.handlebars" and right after the first name, we're going to add another cell here and we're going to say input.
=> <td><input type="checkbox" name="approveComment" /></td>
    -Now,we got to activate this. Let's go to the footer "views\partials\admin\footer.handlebars". Let's use jQuery

    - Now, we don't have a field on the database. I want to put a few in the database that would allow us to either approve or disapprove the comment
=> <script>

  $("[name='approveComment']").bootstrapSwitch();

</script>

    - to make it work properly, we need to link our css file. Let's go to "views\layouts\admin.handlebars" and link it in the header
=> <link href="/css/bootstrap-switch.min.css" rel="stylesheet">
    - Let's create a heading for this button
=> <th scope="col">Status</th>


//////////////// Section 21 AJAX Feature - Lesson 175 - Listening for the Change Event ////////////////

Step 151: on this lecture, we are going to try to see if we can make an AJAX request and at least have it working before we do anything right.
    - In "models\Comment.js", create a new field for approved comments
=> approveComment:{
        type: Boolean
    },

    - In the footer, test if it is listenning
=> $(document).ready(()=>{
  $("[name='approveComment']").on('switchChange.bootstrapSwitch', function(e,
  data){
    console.log('IT WORKS');
  });


//////////////// Section 21 AJAX Feature - Lesson 176 - Sending the AJAX request - Test ////////////////

We need to get a static value from the users collection, so we don't have that issue in objects in the comments section.
Step 152: We need to get a static value from the users collection, so we don't have that issue in objects in the comments section.
    - Grab an ID from the users collection in the database, and go to the comments route "routes\admin\comments.js" and paste it there where we're displaying the comments
=> Comment.find({ user: "62891f0bbad2cede5975323b" })


Step 153: So now let's continue with our lecture here.
    - So now we know that we have received some type of data when we are changing that switch.
=> $(document).ready(()=>{
  $("[name='approveComment']").on('switchChange.bootstrapSwitch', function(e,
  data){
    console.log(e);
  });
We get an event
=> $(document).ready(()=>{
  $("[name='approveComment']").on('switchChange.bootstrapSwitch', function(e,
  data){
    console.log(data);
  });
I get true or false

Now, remember that with a regular checkbox, we get either on or off when we are checking that checkbox.
So, what Bootstrap Switch is doing is actually converting that ON and OFF strings that we get from this input into boolean values, which is super useful for us when we send it to our database, because that's what we're waiting for in a database. We're waiting for a boolean value in that approved common field.

    - OK, so let's go back to our footer and start trying to send the Ajax requests, so I'm going to use jQuery for the Ajax.
It is more reliable than using just vanilla JavaScript, even though we can use it, but with vanilla JavaScript,
using plain JavaScript is not recommended.
=> $.ajax({ 
    type: "POST", 
    url: '/admin/comments/approve-comment', 
    data: {id: id,
  approveComment: data}, 
  cache: false, 
  success: function(data){
  
  }
  }); 

  - Create a endpoint in the comments route "routes\admin\comments.js", after delete
=> router.post("/approve-comment", (req, res) => {
  res.send("IT WORKS");
});



//////////////// Section 21 AJAX Feature - Lesson 177 - Getting Data ////////////////

So, we know that we can send an Ajax's request and it works
Now it's time for us to start getting a little deeper into this functionality.

Step 154: We need to send data to our endpoint right here.
We need to first grab the id of the comment and then grab the boolean value to insert it into our database.
Now, remember that we have this here in the model "models\Comment.js" (Step 151).
We need to come insert that true and false value here.

OK, so let's go back to the footer here. And so we need to get the id of the specific comment right in here somehow. ANd we're going to use jQuery for that.

    - I'm going to go to comments index "views\admin\comments\index.handlebars" and on that same checkbox I'm going to create some custom attribute here. I'm going to call a data-id or something like that. I'm going to put the id of this specific comment in here, so everytime this is looping around the id for that specific comment is going to be in these data-id attribute.
=> data-id="{{id}}"

    - Let's go back to the footer and pull that in
=> const id = $(this).attr('data-id');
=> data: {id: id}

    - Now, we need the approve Comment data in the footer 
=> data: {id: id,
  approveComment: data},
 


//////////////// Section 21 AJAX Feature - Lesson 178 - Finally Updating with AJAX ////////////////

So now that we know that we have our data here, let's start playing around with it, right?

Step 155: So the first thing that we need is we need to update. Right?
    - We need to do a query here in "routes\admin\comments.js" with Mongo.
=> Comment.findByIdAndUpdate(
    req.body.id,
    { $set: { approveComment: req.body.approveComment } },
    (err, result) => {
      if (err) return err;

      res.send(result);
    }
  );

    - Let's check our database. Go to the comments collection, these comments don't have an approve comment field, but if we're going into this and switch the button on our application in the comments page.
Let's see what we get, refresh, and as you can see now that it says approve comment: true.
=> approveComment: true

    - Now, if I switch it to false and refresh the database it says
=> approveComment: false


//////////////// Section 21 AJAX Feature - Lesson 179 - Adding some Notifications with this AWESOME JS Library ////////////////

OK, so what's the next step?

Step 156: Well, I want to let the user know that we are updating the comment here in Admin and that he went successfully.
    - So I want to use a library that I like very much is called "Toastr" and let's use the CDN
Let's get the CSS first in the admin "views\layouts\admin.handlebars", right after the switch
    - Now, in the footer put the JS link right after the Bootstrap swich as well
    - OK, so the way you will use this is super simple, in our success functionality right here in the footer,
=>  toastr.success(`Comment with id ${data._id} was updated`);
Now, refresh the comments page in Admin, switch the button, and now we got the notification


//////////////// Section 21 AJAX Feature - Lesson 180 - Displaying only approved comments ////////////////

Step 157: Right now we have a little bug.
If we click this switch button here and we refresh, we are going to get this going back to the same state that it was before, which is the off.
    - Go to comments index view "views\admin\comments\index.handlebars", in this checkbox where we are, you know, displaying that nice switch, do an if statement
=> {{#if approveComment}} checked {{/if}}

Step 158: So the next step to do would be to go to the front of our CMS and if we click here on the post, we can see now that we are displaying all comments here.
Now, this is fine when the comments are approved, but if the comments were unapproved, we don't want to display them there.
So we need to do some filtering.
    - Let's go back to the code and let's fix that. So if we go to the view for post "views\home\post.handlebars" right here and where where we are displaying comments, we can filter this before he even gets to our handlebars, before he even gets to our view.
    But, we're not going to do that
    - Let's go back to our route home index "routes\home\index.js", and right here where we are displaying the individual post, we can do a little bit more filtering.
    So I want to show you how to make a query right here, how to constraint our information, our data.
=> match: {approveComment: true},

    - Now let's go ahead and check the comment model here "models\Comment.js" real quick.
    I want to just make sure that this approveComment field or object has a default value.
    So I want to make sure that this default is false.
=> default: false,
OK, so every time you create a comment, you want to make sure that they are default because you don't want to approve comments unless you read them.



//////////////// Section 21 AJAX Feature - Lesson 181 - Adding Flash notification to comments ////////////////

Step 159: when we make a comment and click submit, we don't have any type of notification for the user to let them know that their comment is not going to show until is moderated.
    - Let's go to the comments route, where we create a new comment "routes\admin\comments.js" before where we redirect
=> req.flash(
          "success_message",
          "Your comment will be reviewed in a moment"
        ); 



//////////////// Section 22 Admin Chart - Extra Features - Lesson 182 - Creating a chart on Admin ////////////////


Step 160: I want to install a chart. I want to be able to have some dynamic data about what's going on in our CMS.
    - And there is a lot of charts that we can install, 
if you type in Google charts js, and you click on the images, you're going to see a whole bunch of charts that look really awesome.
    - There is a website https://www.chartjs.org/, you can install it with a cdn (but I recommend to use npm installation)
    - I'm going to install a chart from this website cdnjs https://cdnjs.com/
    Type "chartsjs" and click on it
    Then copy the bit of code without the HTML
    Then paste it in "views\partials\admin\footer.handlebars", right above the bootstrap switch script
=> <script>
  var ctx = document.getElementById("myChart").getContext('2d'); var myChart =
  new Chart(ctx, { type: 'bar', data: { labels: ["Posts", "Categories",
  "Comments"], datasets: [{ label: 'CMS DATA', data: [{{postCount}},
  {{categoryCount}},
  {{commentCount}}], backgroundColor: [ 'rgba(255, 99, 132, 0.2)', 'rgba(54,
  162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)' ], borderColor: [
  'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)' ],
  borderWidth: 1 }] }, options: { scales: { yAxes: [{ ticks: { beginAtZero:true
  } }] } } });
</script>

  - Now, I'm going to get the CDN link by copying the script tag from the website, then paste it below the toastr link
=> <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>

  - Let's go back to the charts code in https://cdnjs.com/ and copy the HTML code and paste it the view for admin "views\admin\index.handlebars"
  Create a div with a class of row and paste the HTML code in there
=> <div class="row">
    <canvas id="myChart"></canvas>
  </div>

Go back to the application and refresh the page "admin"
=> Now, we should get some data and the chart displaying



//////////////// Section 22 Admin Chart - Extra Features - Lesson 183 - Displaying dynamic data on chart ////////////////

Step 161: So right now, we need to replace that data with dynamic data coming from our database.
    - Go to the route admin index "routes\admin\index.js". 
    We need here is some type of query to our database.
    We need to access the post.
    And then, we need to count
    Then, we can attach a promise and bring the postCount with it
=> Post.count({}).then(postCount=>{});
    Then, we render the view and we pass the data
=> res.render("admin/index", { postCount: postCount });

    - Let's go bacck to our footer and let's replacing that data
=> labels: ['Posts]
=> data: [{{postCount}]



//////////////// Section 23 Extra Feature - Pretty URLs - Lesson 184 - Downloading Package and setup part 1 ////////////////

Step 162: On this step here, we're going to be creating slugs, creating pretty new URLs
    - We're going to create this slug in the Post model "models\Post.js" right after the title
=> slug: {
      type: String,
    },

So in this field, in our database somewhere, we're going to hold the title of our post.
And in case we have a duplicate title or let's say the same name post with the same title, we want the last number to go and increase. So the first one would be the original and then the second one, we have a number two or something like that.
That's the type of slug we want, we don't want to duplicate. Because some posts might have the same name.

    - Let's go ahead and start looking for something in https://www.npmjs.com/ and let's find a package for "slug"
OK, one of the best ones that I have used is called, because since we were going to be using Mongoose, it's called "mongoose-url-slugs"

We are using Mongoose, and it would be nice to have some type of method in our model that will generate our URLs without even doing this in the code ourselves.
We don't want to go and write stuff here in the route admin posts and go around.
We want this to be done for us before it even gets to our roots in the database, before even that data is inserted.
So we have a package that will do this for us in the model.

    - Install the package "mongoose-url-slugs"
=> npm install mongoose-url-slugs

    - Let's go back to our Post model "models\Post.js" and require it
=> const URLSlugs = require('mongoose-url-slugs');



//////////////// Section 23 Extra Feature - Pretty URLs - Lesson 185 - Creating Slugs ////////////////

Step 163: So now, we're going to use a method or function that's actually used in mongoose to plug in functionalities
    - Use the method (taken from the documentation mongoose.com)
=> PostSchema.plugin(URLSlugs('title', {field: 'slug'}));

    - Create a new post
Now, in the database, we have
=> slug: "pretty-url-post"

    - Create a new post with the same title
The slug is different and the number increased
=> slug: "pretty-url-post-2"

So, that's the first part, but remember that if you want to see this URL on top (of the browser), we have to instead of actually querying the database for the ID, we have to query the database for the slug.
Not only that, but we have to show the slug here somehow.


//////////////// Section 23 Extra Feature - Pretty URLs - Lesson 186 - Displaying Pretty URL's ////////////////

Step 164: now that we have our love, we need to find a way to show it.
    - So let's go to post index view "views\admin\posts\index.handlebars" and this view link is sending the id, and we don't want to send the ID anymore. We want to send the slug
        => <td><a
            href="/post/{{slug}}"
          >View</a></td>
    - Let's go the route home index "routes\home\index.js"
=> router.get("/post/:slug", (req, res) => {
  Post.findOne({ slug: req.params.slug })

Now, if we login again go to "All Posts", then "View" from a post created with a slug, in the front page it shows the pretty URL

Now, keep in mind that you need to add that functionality to wherever you are clicking on the link.
And then you need to be searching for that slug so that way you can have this here, pretty cool stuff, right?


//////////////// Section 24 Extra Feature - Pagination - Lesson 187 - Creating handlebars helper function and testing ////////////////

Let's use faker and generate 101 posts.
This gave me a error here in the terminal, and that's because we get this duplicate key,
let me tell you what it's duplicate key is
We have this data in the database which creates a record, but we have this slug data that it doesn't get inserted when we are doing the faker

Step 165: so let's correct that real quick.
    - In "routes\admin\index.js"
=> post.slug = faker.name.title();

OK, so make sure that whatever field you want to automatically generate, you have a here available in your facher functionality.

Step 166: Creating the pagination
    - Let's go to home index view "views\home\index.handlebars" at <!-- pagination -->
    We need to create a dynamically generated list item
    we need that because these are going to be our links and our links need to have some type of data coming from the results in the database.
So this is a really trouble, an issue if we are going to be creating this using handlebars,
with handlebars, the best thing to do would be to take this to a helper function.
=> Comment out the pagination

    - Create a helper function in "helpers\handlebars-helpers.js", called "paginate"
=> paginate: function (options) {
    console.log(options);
  },

    - so now let's go to our home route index "routes\home\index.js", and this is exactly where we want to start getting data from the, you know, to modify.

    - Let's go to app.js and reqister the paginate function
=> const {
  select,
  generateDate,
  paginate,
} = require("./helpers/handlebars-helpers"); 

=> app.engine(
  "handlebars",
  exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: "home",
    helpers: { select: select, generateDate: generateDate, paginate: paginate }, // Step 93 + Step 166 paginate
  })
);

    - Let's go back to our view index "views\home\index.handlebars" and use the function
=> {{#paginate current=current}}{{/paginate}}

    - So right now, if we go to our homepage we refresh here to refresh.
We're going to see this log right here in the terminal
OK, this options object is going to have everything we need.
and you can see current is equal to one.

    -So, now go back to "helpers\handlebars-helpers.js" and type options.hash.current
=> paginate: function (options) {
    console.log(options.hash.current);
  },
Refresh the homepage, and you can see in the terminal that the value is 1


//////////////// Section 24 Extra Feature - Pagination - Lesson 188 - Route Modification ////////////////

OK, so anyway, our handlebars function is working.
We're getting some data, but we don't have the data that we need.
And that's what we're going to be doing here.

Step 167: So I'm going to be showing you how to do some kind of limitations or some new features with our database.
    - In "routes\home\index.js", I want to first build a variable here called per page.
And this is going to be how many records we want per page.
=> const perPage = 10;
    - Then we create a link
=> const page = req.query.page || 1;
    - Now, we make a skip
=> .skip((perPage * page) - perPage)
    - Let's do a limit
=> .limit(perPage)

    - Now we need to create some another query to our database here, we want to get the count of our posts very important.
=> Post.count().then(postCount=>{});
    Inside, we also want the current page and our pages
=> current: parseInt(page),
=> pages: Math.ceil(postCount / perPage),


//////////////// Section 24 Extra Feature - Pagination - Lesson 189 - Creating dynamic list items in Handlebars function part 1 ////////////////

Step 168: So now that we have our handlebars function, you know, taking some data, we need to give it some type of dynamic data.
    - In "views\home\index.handlebars", add a variable called pages equal to pages
=> {{#paginate current=1 pages=pages}}{{/paginate}}

OK, simple as that, now we have that dynamic data in our helper function, we need to start using it in "helpers\handlebars-helpers.js"
=> paginate: function (options) {
    // Step 168
    let output = "";
    if (options.hash.current === 1) {
      output += `<li class="page-item disabled"><a class="page-link">First</a></li>`;
    } else {
      output += `<li class="page-item"><a href="?page=1" class="page-link">First</a></li>`;
    }

    return output;
    // console.log(options.hash.current);
  },



//////////////// Section 24 Extra Feature - Pagination - Lesson 190 - Creating dynamic list items in Handlebars function part 2 ////////////////

Step 169: Creating more data
    - In "helpers\handlebars-helpers.js", create a variable called "i"
=> let i = (Number(options.hash.current) > 5 ? Number(options.hash.current) - 4 : 1);
if(i !== 1){
            output += `<li class="page-item disabled"><a class="page-link">...</a></li>`;
        }
for(; i <= (Number(options.hash.current) + 4) && i <= options.hash.pages; i++){
            if(i === options.hash.current){
                output += `<li class="page-item active"><a class="page-link">${i}</a></li>`;
            }


//////////////// Section 24 Extra Feature - Pagination - Lesson 191 - Creating dynamic list items in Handlebars function part 3 ////////////////

Step 170: Let's continue to built this code
else {
                output += `<li class="page-item "><a href="?page=${i}" class="page-link">${i}</a></li>`;
            }
            
        }


        if (options.hash.current === options.hash.pages) {
      output += `<li class="page-item disabled"><a class="page-link">Last</a></li>`;
    } else {
      output += `<li class="page-item "><a href="?page=${options.hash.pages}" class="page-link">Last</a></li>`;
    }


//////////////// Section 24 Extra Feature - Pagination - Lesson 192 - Creating dynamic list items in Handlebars function part 4 ////////////////

Step 171: Adding some dots at the ende of the pagination
    - Below 
=> if (i === Number(options.hash.current) + 4 && i < options.hash.pages) {
        output += `<li class="page-item disabled"><a class="page-link">...</a></li>`;
      }


//////////////// Section 25 Extra Features and refactoring - Lesson 193 - Multiple queries in one GO - part 1 ////////////////

OK, we're going to be refactoring some code.
We're going to be making stronger some of the code that we have, some of the functionalities.

Step 172: Putting dynamic data in Admin with compacting all the queries with MongoDB, using Mongoose
      - Go to routes admin index "routes\admin\index.js", where there is the code getting us the count for our admin index
    Before we do anything, let's include the Category model and the Comment model
=> const Category = require("../../models/Category");
=> const Comment = require('../../models/Comment');
      Now, instead of imbed the category and the comment
      we're going to put all this queries into an array and then pass in those values to one specific method that is going to execute everything and return to us all the results in one go.

      - We're going to be using a Javascript method called Promise.all
=>   const promises = [
    Post.count().exec(),
    Category.count().exec(),
    Comment.count().exec(),
  ];

    - Now, that we have those queries, we can use Promise.all
=> Promise.all(promises).then(([postCount, categoryCount, commentCount]) => {
    res.render("admin/index", {
      postCount: postCount,
      categoryCount: categoryCount,
      commentCount: commentCount,
    });
  });


//////////////// Section 25 Extra Features and refactoring - Lesson 194 - Multiple queries in one GO - part 2 ////////////////

In Admin, we are right now showing a whole bunch of bars that we don't need.
So we're going to have post counts, category counts and comment counts.
But now, it would be nice to have active posts or public posts count, private posts count, private comments count or not active common counts.
But we might include that later on

Step 173: Let's replace static data by dynamic data
    - In the footer "views\partials\admin\footer.handlebars", modify the script


//////////////// Section 26 Extra Features - Deployment - Lesson 195 - Signing up for Cloud Services ////////////////

Now, the most popular hosting or the common one to use with development for node.js applications is Heroku
It's really awesome because with Heroku, you could scale up your applications.
We also need to start thinking: this is just the server and now we can integrate stuff in there like MongoDB and do all kinds of stuff in local, well we're going to see this later.
But we can also create free applications on the fly so we can test things out before we deploy them.
OK, so we could create a Heroku application, we could link it to our own development environment.
We deploy our application and we can even change the URL that Heroku gives us at first, because is like something to test with.
So we could we could change that to our own domains.

But before we do that, we need to sign up for our database in.
One of the services that I like to use is called mLab and mLab is very good for testing purposes as well.
OK, they do offer it for free so you can sign up for free.
And if you click on price plans and pricing here, you can see they said sandbox here.

Step 174: Let's start
    - let's go and sign up for a mLab (Now, we're using MongoDB Atlas)
    - Sign up for Heroku

//////////////// Section 26 Extra Features - Deployment - Lesson 196 - Creating our remote database ////////////////

(Now, we're using MongoDB Atlas)
mLab deployment with Amazon
Created a database and a user


//////////////// Section 26 Extra Features - Deployment - Lesson 197 - Connection to the database ////////////////

So, we have signed up for mLab for database (remotely) and we have created a user.
So now it's time for us to connect.

Now, we don't need MongoD anymore because we have our database remotely.

Config in a "config\database.js"
(We already connected the database with MongoDB Atlas)

Remember that later on, we're going to be refactoring our data database connection because we want to detect if we are in a development or a production environment.
Now, we're going to do that later after we are done with doing it the hard way first or the
non flexible way first.


//////////////// Section 26 Extra Features - Deployment - Lesson 198 - Installing Heroku ////////////////

So now, that we are connected to our remote database, it's time for us to start creating an application in the service called Heroku.

The first thing that we are going to be doing is downloading a Heroku CLI: Command Line Interface
=> https://devcenter.heroku.com/articles/heroku-cli
Downlaod and install it by using the Windows Installer

Now, open your command prompt (gitBash for example) or IDE (or Visual Studio Code)
    - Type "heroku"
=> You can see that it gives us some information

So now that we have installed Heroku, we need to create our application Heroku, and we could do this by logging in
    - We first need to log into Heroku.
=> type in the cmd "heroku login"
    - We can now create an application
=> type "heroku create"
This command is going to automatically create an application in Heroku for me
If I copy the link from the terminal and paste this in the URL, you're going to see that we have a Heroku application.

So, we were able to create this application in Heroku


//////////////// Section 26 Extra Features - Deployment - Lesson 199 - Launching our App Online ////////////////

So, we are very close to launching our application to the clouds We Heroku
So one of the first things that we are going to be needing here is "Git"
So make sure that you have Git
Git is this open source version control system.

So, with Git version control, we could save different versions over our application, different versions of our development environment.
So that way we can play around with it, OK?
In one version we can do something.
In the older version we can do another thing.
And it's pretty awesome, OK, because you can save each and every step.
OK, instead of doing copy and paste and changing folder names, you could create different versions of your project with different features.
And then when you're ready, you can merge them together and you can launch them at the end.
OK, this is what we use when we are doing development with groups and things like that in the real world.

    => Oh, by the way, guys, for those of you who are using gitBash, when you're doing this in the terminal, make sure that you set it up right.
    I believe out of the box, Heroku, I mean, the CLI doesn't work very good with gitBash.
    OK, so for those of you using Heroku CLI, you might want to use the command prompt and you can run that as an administrator in Windows.

So there are a couple of things that we need to do,
so go to your application, whatever that was.
    1. Download Git
    2. Then go to your project path and type git init in the terminal
=> it says "Initialized empty Git repository in C:/xampp/htdocs/node-cms/.git/"
So I initialized my repository now.

Now, go to your Heroku application, in Deploy, then Heroku Git
Now I need to add it.
So we are going to copy this "heroku git:remote -a dry-spire-47220" and paste it in the terminal (with your command prompt for Windows, if it's not working properly with gitBash)

Oh, before you add anything to your project, let's go and create a .gitignore file here in (the root of your project)
And inside it put
=> "node_modules
    .idea"
".idea": just because I believe my IDE was creating that system files with this name here.

Basically with this gitignore, we are going to be ignoring this folder "node_modules" when we push our data to the cloud.
OK, remember that what we do with Git is saving the versions of our application right this moment, right
But then at the end, we push those versions of that data, we push it to the cloud.
OK, and when we push things to the cloud, there are certain things that we don't want to have there.
We don't want to export all this node_modules folder, OK?

Now that we added this, now we need to go to our command prompt or terminal and we need to add everything, with the dot
=> git add .

Now we need to say we need to a commit with a message
=> git commit -am "first launch - initial commit"

OK, now we need to push these changes to our application.
=> git push heroku master

And now if we open our app, by clicking "Open App" in Heroku, it's giving us an error here.
Let's find out what the error is.

Ok let's go back to our application in app.js
Yes, and the error here is super simple to fix.
OK, it's because we are actually listening to port 4500,
we're not listening to a different port, so.

Step 175: We need to make this a little bit more flexible.
OK, so it listens to a production port to a server on the cloud port.
So, I'm going to create a constant for port
=> const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

Now, we need to do all these steps again in the terminal
=> git add .
=> git commit -m"fixed port issue"
=> git push heroku master

So, this is how it works:
Every time you make some type of change, you go git add ., git commit -m and write the message
and then push it to your application.

Refresh the app in heroku,
there is still an error
Let's go to package.json, in scripts and put "start" instead of "test" and put "node app.js" instead of "echo \"Error: no test specified\" && exit 1"
So this way, Heroku knows exactly what to do with our application

Let's do it again in the terminal
=> git add .
=> git commit -m"fixed npm start"
=> git push heroku master

Now, run your application in the terminal
=> nodemon app.js
or
=> npm start
It says it is connected

Make sure your whitelist your IP in MongoDB Atlas

Now, refresh your app in Heroku
Now, you can see your application with the Heroku URL

Our app is almost done there in Heroku, and we can login.
Let's login here because we have our database in mLab (MongoDB Atlas & MongoDB Compass).
As you can see, it's working.
Let's create 10 more posts with Generate
It's working

So look at that, guys.
We have our app working 100% in Heroku and mLab (MongoDB Atlas & MongoDB Compass).

//////////////// Section 26 Extra Features - Deployment - Lesson 200 - Refactoring Database Connections ////////////////

So, we need to find a better way of dealing with data that we have in our application when we are pushing to Heroku or to any other platform.

So, right now, we are pushing our information when we do it to git push heroku master, right?
We're pushing this to the cloud and this is not a very recommend it, OK?

You don't want to do this.
So we need to find:
    - A way to secure information.
So nobody sees this when we're pushing data.
    - And a more flexible way to switch from development to production environment.

OK, so I'm going to create a couple more files here and we're going to try to do some type of IF conditions trying to detect to see if we are in production or development.
And then depending on that, we're going to be either using a database that is in our system or a remote database.
We want to use the remote database when we are in production.
So we need to find a way to detect that.

Now, if I go here in app.js, you can see that I'm using const { mongoDbUrl } = require("./config/database"); // Step 123
I'm including this file "config/database", so this is going to be our main file here
This is where we're going to be having a some type of IF conditions to detect to see where we are either in production or development.

Step 176: Create a couple of more files
    - In "config", create a file called "dev-database.js"
That is going to be our database for development
Add it to git
=> git add config/dev-database.js
    - In config, create another file called "prod-database.js"
    - Now, copy the code from "config/database.js" and paste it in those 2 files, then make the changes

    - In database.js, do the IF statement
=> if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod-database");
} else {
  module.exports = require("./dev-database");
}

One thing to keep in mind is that when we are in production, we could put this value "mongodb+srv://Com4Muz:ejgwlPjS7onYjSZM@localhost.8urmd.mongodb.net/cms" in Heroku.
    - Let's go to Heroku, then Settings,click on Reveal Config Vars
We could create variables here to keep this information from being in our application.
    - So, in prod-database.js, cut the value "mongodb+srv://Com4Muz:ejgwlPjS7onYjSZM@localhost.8urmd.mongodb.net/cms"and paste it in Heroku in the Value field
    - Now, Create an environment variable and call it for example "MONGO_DB_URI" and paste it in Heroku in the Key field
    - Then click add in Heroku
    - Now, in prod-database.js, put the Key instead of the old value
=> module.exports = {
  mongoDbUrl: process.env.MONGO_DB_URI,
};

Now, let's push this to Heroku from the terminal
=> git add .
=> git commit -m"added environment variables"
=> git push heroku master

Open your Heroku app from the terminal
=> heroku open


//////////////// Section 26 Extra Features - Deployment - Lesson 201 - Let's add a domain ////////////////

Let's add your domain

Let's go to your Heroku application, in Settings, click Add Domain


//////////////// Section 26 Extra Features - Deployment - Lesson 202 - WYSIWYG Editor ////////////////

So on this lecture, I'm going to show you how to create or install a WYSIWYG Editor into our project
So all you have to do is go online and find one.
There is one very good called CK Editor
But just in case this one starts charging on this in the future or is not available, just type in WYSIWYG Editor on your Google.
So I'm looking for the CDN
=> ck editor cdn
=> https://cdn.ckeditor.com/

Step 177: Install CK Editor CDN
    - Copy the link and paste it in "views\layouts\admin.handlebars"
I'm going to put it all the way in the bottom of the file before the body tag right here.
Now, I want to do this because I want to make sure that all the documents, all the links and everything have loaded before I play around with scripts.

But, if it doesn't work try to put it in the head

    - After this, all I have to do is start it up.
OK, so I'm going to use this function here.
=> <script>
CKEDITOR.replace('body');
</script>

    - Or you can extract this. So, you go to https://cdn.ckeditor.com/ and you download the whole file from the cdn, then save the file in my project like in the public directory or something like that and call it "ckeditor.js" and load it from your project locally





*/

const express = require("express"); // Step 3
const app = express(); // Step 4
const path = require("path"); // Step 7
const exphbs = require("express-handlebars"); // Step 11
const mongoose = require("mongoose"); // Step 51
const bodyParser = require("body-parser"); // Step 58
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access"); // Step 63
const Handlebars = require("handlebars"); // Step 63
const methodOverride = require("method-override"); // Step 68
const upload = require("express-fileupload"); // Step 72
const session = require("express-session"); // Step 84
const flash = require("connect-flash"); // Step 84
const { mongoDbUrl } = require("./config/database"); // Step 123
const passport = require("passport"); // Step 129

// mongoose.Promise = global.Promise; // Lesson 89 - to remove the error if you use "useMongoClient" (Step 52)

// Step 52
mongoose
  .connect(mongoDbUrl, {
    // useUnifiedTopology: true, Q&A When I use mongo on the console I can't see any collections, tables nor data Lesson 91
    // useNewUrlParser: true, Q&A When I use mongo on the console I can't see any collections, tables nor data Lesson 91
  })
  .then((db) => {
    console.log("MONGODB connected");
  })
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "public"))); // Step 7

// Set View Engine

const {
  select,
  generateDate,
  paginate,
} = require("./helpers/handlebars-helpers"); // Step 66 + Step 93 + Step 166 paginate

app.engine(
  "handlebars",
  exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: "home",
    helpers: { select: select, generateDate: generateDate, paginate: paginate }, // Step 93 + Step 166 paginate
  })
); // Step 12 + 63 + 66
app.set("view engine", "handlebars"); // Step 14

// Upload Middleware

app.use(upload()); // Step 72

// Body Parser

app.use(bodyParser.urlencoded({ extended: true })); // Step 58
app.use(bodyParser.json()); // Step 58

// Method Override

app.use(methodOverride("_method")); // Step 68

// Step 84
app.use(
  session({
    secret: "abousafwan123ilovecoding",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// PASSPORT

// Step 129
app.use(passport.initialize());
app.use(passport.session());

// Local Variables using Middleware

// Step 86
app.use((req, res, next) => {
  res.locals.success_message = req.flash("success_message");
  res.locals.error_message = req.flash("error_message"); // Step 122
  res.locals.user = req.user || null; // Step 130
  res.locals.error = req.flash("error"); // Step 130
  next();
});

// Load Routes

const home = require("./routes/home/index"); // Step 31

const admin = require("./routes/admin/index"); // Step 31

const posts = require("./routes/admin/posts"); // Step 49

const categories = require("./routes/admin/categories"); // Step 98

const comments = require("./routes/admin/comments"); // Step 135

// Use Routes

app.use("/", home); // Step 32
app.use("/admin", admin); // Step 39
app.use("/admin/posts", posts); // Step 49
app.use("/admin/categories", categories); // Step 98
app.use("/admin/comments", comments); // Step 135

// Step 175
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// Step 5
// app.listen(4500, () => {
//   console.log(`listening on port 4500`);
// });
