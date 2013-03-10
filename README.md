Just open up index.html in your web browser.

In order to update the templates, run:

    handlebars templates >> templates.js

Any file in the templates directory will be available in the `Handlebars.templates` hash.

    Handlebars.templates['index']



To run this application

Got to directory where assignemnt1 was install.  This would be the directory where you checked this Git project into.

example - cd ~/Documents/WebstormProjects/assignemnt1

run the following command

    npm install -d  (this will read the package.json file and install the dependencies).

finally start the server (Remember to do this from the folder that contains the app.js file)

    node app.js

Now you can view the application by going to

    http://localhost:3000 (the server is listening on port 3000)


