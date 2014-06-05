SPAngular VS template - "App" folder.

This is the folder where all of the angular/app related JS code resides.  The decision to move "views" to the root directory was
simply because it makes sense for a web designer to view the HTML in (almost) the same area and makes no difference to how the
app runs.

You will see starter:

CONTROLLERS			- The angular controllers for the views.  Remember the "routeProvider.js" (which is called through the main app.js)
					  matches the controller and view, for example if you want a "home" controller, you should call it
					  "homeController.js" and there should be a matching "homeView.html" within the root/views directory.

SERVICES			- Angular services which can contain data service related items too.  It might be useful to separate the actual
					  data service items from other general services for better readability and management.

DIRECTIVES			- Angular directives which assist with providing new dynamic HTML elements.

MODULES				- Angular modules to be included within your app.
