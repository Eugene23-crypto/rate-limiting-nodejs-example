# rate-limiting-nodejs-example

#Installation
-Make show you already have Node on your computer, if not download it on the browser.
-After install the project on your computer, in the project root directory open a terminal. You can also install nodemon with (npm install -g nodemon), it restart the project directly after each file change.
-Type "npm install" to install the project dependencies.

#Utilisation
-Type "node test.js" or "nodemon test.js" to start the project server.
-Go to your browser and type the address "http://localhost:9000" to access the main page of the application
-Or type "http://localhost:9000/create-account" to access the create account page.
-You'll find that if you refresh the create account page more than 3 times a minute, it will show rate message (Many account creation requests from this IP, please try again after a minute.)
-And throughout the project, you can only run 10 queries per minute. Exceeded this limit, it will send you rate limit message.

#Test coverage
-Please make sure that you already have 'npx' on your computer, if not use this command to install (npm install -g npx)
-To do test coverage please run the command (npx nyc@latest mocha) in your project root terminal.
