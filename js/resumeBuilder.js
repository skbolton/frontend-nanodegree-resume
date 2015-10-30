var bio = {
  "name" : "Stephen Bolton",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "801-550-0581",
    "email" : "stephenkbolton@gmail.com",
    "github" : "/skbolton",
    "location" : "Salt Lake City, UT"
  },
  "pictureURL" : "images/Stephen.jpg",
  "welcomeMessage": "Hey there, my name is Stephen and I love lifting heavy weights and coding awesome websites",
  "skills" : [
    "javaScript", "HTML5", "CSS", "Design", "Typography"
  ],
}

var education = {
  "schools" : [
    {
      "name" : "Alta High School",
      "location" : "Sandy, UT",
      "degree" : "General Education"
      "majors" : ["General Education"],
      "dates" : 2007,
      "url" : "http://ahs.canyonsdistrict.org/"
    },
    {
      "name" : "Salt Lake Community College",
      "location" : "Taylorsville, UT",
      "degree" : "CS (never completed)"
      "majors" : ["Computer Science"],
      "dates" : 2011,
      "url" : "http://www.slcc.edu"
    }
  ],
  "OnlineCourses" : [
    {
      "title" : "Front End Developer",
      "school" : "Team Treehouse",
      "dates" : 2015,
      "url" : "www.teamtreehouse.com"
    },
    {
      "title" : "Front End Developer Nanodegree",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "www.udacity.com"
    }
  ]
}

var work = {
  "jobs" : [
    {
      "employer" : "Caffe Molise",
      "title" : "Assistant Manager",
      "location" : "Salt Lake City, UT",
      "dates" : "6/2014 - present",
      "description" : "Managed staff at Utah's best Italian Restaurant. Helped manage inventory and ordering for restaurant. Was also in charge of organizing and following up on banquet events. Also served along side servers to set an example."
    },
    {
      "employer" : "Corner Bakery",
      "title" : "Catering Manager",
      "location" : "Sandy, UT",
      "dates" : "12/2013 - 6/2014",
      "description" : "Oversaw catering department in busiest Corner Bakery location. Was responsible for inputing orders and organizing team. Time management was huge part of job since delivery times would vary between different customers and orders would come in at unexpected times. Also, I created and managed schedules for 3 catering employees."
    },
    {
      "employer" : "Red Rock Brewing Company",
      "title" : "Server",
      "location" : "Salt Lake City, UT",
      "dates" : "03/2013 - 04/2014",
      "description" : "Provided a personalized guest experience to guests of the pub. Red Rock brews their own award winning beer! I was responsible to not only help customers pick the perfect beer for them but to also educate them on the different kind of beers we offered."
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" :
      "dates" :
      "description" :
      "images" : [

      ] // end images property of project object
    }

  ] // end projects array
}

var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);

$('#header').append(formattedHeaderName).append(formattedHeaderRole);

if(bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
}
