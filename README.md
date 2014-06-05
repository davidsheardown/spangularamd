SPANGULAR-AMD
============

SPA with AngularJS and RequireJS using bower components and custom routing

A Spectangular example (well maybe not!) of using AngularJS and RequireJS for a very simple
kickstart project template.

Instead of creating just the basics where it becomes difficult to know/remember what goes where,
this stand-alone template project helps get the structure in place to get coding quicker.

Obviously every man and his dog has a view about what goes where - in my case I have just tried to 
keep things very simple.

A few notes to get started:

1. If you use Visual Studio, then you can ignore the nodejs parts of this readme, however if you want to 
   keep the JS components up-to-date, the bower (http://bower.io) helps do this - again, you don't need it
   if you want to just use what is there.

2. If you do not have Visual Studio, then you really need NPM, NodeJS and Bower along with GIT for the most
   part.

   On windows, this is relatively easy these days: search for NPM on windows, and download the latest.

3. Once you have NPM, you need to install NodeJS and Bower.  NodeJS does have a great windows installer,
   however for reference you can use NPM:

   - npm install -g nodejs
   - npm install -g git
   - npm install -g bower

 4. The bower components as up-to-date as of June 2014, however you can use bower update to search for updated
    packages etc.

 5. To run a local webserver to test the app, just use node webserver.js which will create a really basic static
    webserver on port 8000 - so http://localhost:8000 will execute the index.html.  You can pass a port as a parameter 
    should you wish (or easily edit the webserver.js file).
    
