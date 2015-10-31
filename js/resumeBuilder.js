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
  "welcomeMessage": "Hey there! My name is Stephen and I am a Developer/Designer from Salt Lake City, UT. If I am not coding I am either at the gym, playing my guitar, gaming on my Xbox, or getting nerdy with my desk attempting to make it even more awesome! I like my coffee on ice. Shaken not stirred...",
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
      "description" : "As an assistant manager I was assigned with many different tasks, starting with getting the floor ready for a shift. This involved assigning servers into sections to set them up for success, and ensuring that all large parties were coordinated. Being near the Salt Palace Convention Center, Caffe Molise is a primary stop for food. This can cause a high influx of traffic making organization and teamwork paramount. I also assisted parties in reserving our private rooms. For banquets we would create custom menus, gather any audio/video supplies and plan out any additional setup all while working within their budget. Behind the scenes, I was responsible for interviews, training new hires, staff disciplinary actions, managing inventory, and company payroll."
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
      "title" : "The Thrilla in Manila",
      "dates" : "2015",
      "description" : "This was a short project mostly because I am a badass and this was so beneath me. The only thing learned from this project is that I love bacon more than I thought. Crazy I know but I really really love bacon",
      "images" : [
        "images/Stephen.jpg"
      ] // end images property of project object
    },
    {
      "title" : "The Thrilla in Manila",
      "dates" : "2015",
      "description" : "This was a short project mostly because I am a badass and this was so beneath me. The only thing learned from this project is that I love bacon more than I thought. Crazy I know but I really really love bacon",
      "images" : [
        "images/Stephen.jpg",
        "images/Stephen.jpg"
      ] // end images property of project object
    }
  ] // end projects array
}
bio.displayBio = function() {
  // Write heading title and role
  var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
  var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  $('#header').prepend(formattedHeaderRole);
  $('#header').prepend(formattedHeaderName);

  var formattedString;
   formattedString = HTMLmobile.replace("%data%", bio.contacts.mobile);
   $('#topContacts').append(formattedString);

   formattedString = HTMLemail.replace("%data%", bio.contacts.email);
   $('#topContacts').append(formattedString);

   formattedString = HTMLgithub.replace("%data%", bio.contacts.github);
   $('#topContacts').append(formattedString);

   formattedString = HTMLlocation.replace("%data%", bio.contacts.location);
   $('#topContacts').append(formattedString);

  formattedString = HTMLbioPic.replace("%data%", bio.pictureURL);
  $('#header').append(formattedString);


  formattedString = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $('#header').append(formattedString);

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
};
bio.displayBio();

work.displayWork = function() {
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
};
work.displayWork();

projects.display = function() {
  if(projects.projects.length > 0) {
    var formattedProjectTitle,
        formattedProjectDates,
        formattedProjectDescription,
        formattedProjectImage;
    for(proj in projects.projects){
      // loop through projects object. Each time
      // adding a new div to put info into
      $('#projects').append(HTMLprojectStart);
      formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
      $('.project-entry:last').append(formattedProjectTitle);


      formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
      $('.project-entry:last').append(formattedProjectDates);

      formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
      $('.project-entry:last').append(formattedProjectDescription);

      // since images property of object is an array
      // we need to loop through it.
      for(var i = 0; i < projects.projects[proj].images.length; i++){
        formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[i]);
        $('.project-entry:last').append(formattedProjectImage);
      }

    }
  }
}
projects.display();

$('#mapDiv').append(googleMap);
