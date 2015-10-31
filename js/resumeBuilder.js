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
      "degree" : "General Education",
      "majors" : ["General Education"],
      "dates" : 2007,
      "url" : "http://ahs.canyonsdistrict.org/"
    },
    {
      "name" : "Salt Lake Community College",
      "location" : "Taylorsville, UT",
      "degree" : "CS (never completed)",
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
      "dates" : "6/2014 - 9/2015",
      "description" : "As an assistant manager I was responsible with many different tasks, starting with setting up the floor for a shift. This involved assigning servers into sections to set them up for success, and ensuring that all large parties were coordinated. Being near the Salt Palace Convention Center, Caffe Molise is a primary stop for food. This can cause a high influx of traffic making organization and teamwork paramount. I also assisted parties in reserving our private rooms. For banquets we would create custom menus, gather any audio/video supplies and plan out any additional setup all while working within their budget. Behind the scenes, I was responsible for interviews, training new hires, staff disciplinary actions, managing inventory, and company payroll."
    },
    {
      "employer" : "Corner Bakery",
      "title" : "Catering Manager",
      "location" : "Sandy, UT",
      "dates" : "12/2013 - 6/2014",
      "description" : "Oversaw catering department at busiest Corner Bakery location. Central to my job was time management, delegation, and communication. I was responsible for the whole process from order taking, helping my team prepare food, to making sure it was delivered on time. Often, orders would come in last minute and require me to fit them in among the other orders. Planning delivery was often challenging since times ranged from business to business due to our large delivery area. Other management duties included: tracking inventory, helping out in the dining room of the restaurant, and splitting up tips for catering staff. I also took it upon myself to help market the catering department. I would do this by going to surrounding business every day and dropping off Corner Bakery treats to win over business. I also helped maintain relationships with current customers by often dropping off extra little treats for them, and calling them after every order to make sure we provided the best service possible."
    },
    {
      "employer" : "Red Rock Brewing Company",
      "title" : "Server",
      "location" : "Salt Lake City, UT",
      "dates" : "03/2013 - 04/2014",
      "description" : "Provided a memorable and personalized guest experience. Red Rock brews their own award winning beer! A fun part of my job was not only picking the perfect beer for someone, but also educating them on different kinds of beer and brewing processes. I was a team lead server making me a first choice for larger parties or harder sections of the restaurant. I also managed the facebook page for the company. Using strategic posts I helped drive customer interest in new beers and food. This facilitated new customers and returning customers for Red Rock."
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "",
      "dates" : "",
      "description" : "",
      "images" : [

      ] // end images property of project object
    }

  ] // end projects array
}
// Write heading title and role
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
$('#header').prepend(formattedHeaderRole);
$('#header').prepend(formattedHeaderName);

// add skills heading and skills
if(bio.skills.length > 0) {
  //append the Skills heading
  $('#header').append(HTMLskillsStart);
  //loop through skills array and add skills to list
  for(var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $('#skills').append(formattedSkill);
  }
}
function displayWork() {
  for(job in work.jobs) {
  // create div .work-entry to place work experience
    $('#workExperience').append(HTMLworkStart);
  // format name and title into one line
    var WorkEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var WorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = WorkEmp + WorkTitle;
  // format both dates and description
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  // append the title, dates, and description to created
  // div .work-entry
    $('.work-entry:last').prepend(formattedDescription);
    $('.work-entry:last').prepend(formattedDate);
    $('.work-entry:last').prepend(formattedEmployerTitle);
  }
}
displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});
