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
    "JavaScript", "HTML5", "CSS", "Design", "Teamwork"
  ],
};

bio.displayBio = function() {
  // Use formatted string to complete template and add to DOM

  var formattedString = HTMLheaderName.replace("%data%", bio.name);
  $('#header').append(formattedString);

  formattedString = HTMLheaderRole.replace("%data%", bio.role);
  $('#header').append(formattedString);

  formattedString = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $('#topContacts').append(formattedString);
  $('#footerContacts').append(formattedString);

  formattedString = HTMLemail.replace("%data%", bio.contacts.email);
  $('#topContacts').append(formattedString);
  $('#footerContacts').append(formattedString);

  formattedString = HTMLgithub.replace("%data%", bio.contacts.github);
  $('#topContacts').append(formattedString);
  $('#footerContacts').append(formattedString);

  formattedString = HTMLlocation.replace("%data%", bio.contacts.location);
  $('#topContacts').append(formattedString);
  $('#footerContacts').append(formattedString);

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
      formattedString = HTMLskills.replace("%data%", bio.skills[i]);
      $('#skills').append(formattedString);
    }
  }
  // add icons to skill list... This is kinda hacked I know
  $('#skills .flex-item:first').attr('class', 'flex-item flaticon-development');
  $('#skills .flex-item:nth-child(2)').attr('class', 'flex-item flaticon-internet116');
  $('#skills .flex-item:nth-child(3)').attr('class', 'flex-item flaticon-css3');
  $('#skills .flex-item:nth-child(4)').attr('class', 'flex-item flaticon-website8');
  $('#skills .flex-item:last').attr('class', 'flex-item flaticon-team2');
};
bio.displayBio();

var education = {
  "schools" : [{
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
  "onlineCourses" : [
    {
      "title" : "Front End Developer",
      "school" : "Team Treehouse",
      "dates" : 2015,
      "url" : "http://www.teamtreehouse.com"
    },
    {
      "title" : "Front End Developer Nanodegree",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://www.udacity.com"
    }
  ]
};

education.displayEducation = function() {
  if(education.schools.length > 0) {
    // creating a cache for object in iteration
    var currentObject;
    for(schools in education.schools) {
      // Create div to hold school information
      $('#education').append(HTMLschoolStart);
      // here is cache for object iteration
      currentObject = education.schools[schools];
      var formattedString = HTMLschoolName.replace("%data%", currentObject.name);
      formattedString = formattedString.replace('#',currentObject.url);
      var $educationLast = $('.education-entry:last');
      $educationLast.append(formattedString);

      formattedString = HTMLschoolDegree.replace('%data%', currentObject.degree);
      $educationLast.append(formattedString);

      formattedString = HTMLschoolDates.replace('%data%', currentObject.dates);
      $educationLast.append(formattedString);

      formattedString = HTMLschoolLocation.replace('%data%', currentObject.location);
      $educationLast.append(formattedString);

      formattedString = HTMLschoolMajor.replace('%data%', currentObject.majors);
      $educationLast.append(formattedString);
    } // end object iteration
  }
  if(education.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
    var currentObject;
    for(school in education.onlineCourses) {
      // caching object in iteration
      currentObject = education.onlineCourses[school];
      $('#education').append(HTMLschoolStart);
      $education = $('.education-entry:last');
      var formattedString = HTMLonlineTitle.replace('%data%', currentObject.title);
      $education.append(formattedString);

      formattedString = HTMLonlineSchool.replace('%data%', currentObject.school);
      $education.append(formattedString);

      formattedString = HTMLonlineDates.replace('%data%', currentObject.dates);
      $education.append(formattedString);

      formattedString = HTMLonlineURL.replace('%data%', currentObject.url);
      formattedString = formattedString.replace('#', currentObject.url);
      $education.append(formattedString);
    }
  }
};

education.displayEducation();


var work = {
  "jobs" : [{
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
};

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

var projects = {
  "projects" : [{
      "title" : "UpTopTents",
      "url" : "http://skbolton.github.io/uptoptents",
      "dates" : "2015",
      "description" : "This was an awesome project for me that brought a lot of my skills together. This was the first time I had ever designed a website from the ground up. Picking out the colors and fonts was a lot of fun. I also used bootstrap functionality for the first time in a working project",
      "images" : [
        "images/uptop-home.png",
        "images/uptop-about.png"
      ] // end images property of project object
    },
    {
      "title" : "Your Next Project",
      "dates" : "2015",
      "description" : "I would love to fill this space with your project. Lets get in touch and make your project a reality!",
      "images" : [

      ] // end images property of project object
    }
  ] // end projects array
}

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
      formattedProjectTitle = formattedProjectTitle.replace("%url%", projects.projects[proj].url);
      $('.project-entry:last').append(formattedProjectTitle);


      formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
      $('.project-entry:last').append(formattedProjectDates);

      formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
      $('.project-entry:last').append(formattedProjectDescription);

      // since images property of object is an array
      // we need to loop through it.
      for(var i = 0; i < projects.projects[proj].images.length; i++){
        formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[i]);
        formattedProjectImage = formattedProjectImage.replace('%url%', projects.projects[proj].images[i]);
        $('.project-entry:last').append(formattedProjectImage);
      }

    }
  }
}
projects.display();

// google map integration
$('#mapDiv').append(googleMap);
