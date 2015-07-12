var bio = {
	"name" : "Nasir H",
	"role" : "Web Developer",
	"contacts" : { 
		"mobile" : "+65 91234567",
		"email" : "hnasirrr@gmail.com",
		"github" : "hnasir",		
		"twitter" : "@hnasirrr",
		"location" : "Singapore"
	},
	"welcomeMessage" : "Aspiring web developer with experience in delivering large scale complex IT projects in complex corporate organisations",	
	"skills" : [
		"HTML5", "CSS", "Javascript", "AngularJS", "Android SDK", "SDLC", "Project Management"
	],
	"biopic" : "images/me.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "Carnegie Mellon University",
			"degree" : "Master of Information Systems Management",
			"location" : "Pittsburgh, USA",
			"majors" : [
				"Information Systems"
			],
			"dates" : "2010",
			"url" : "www.heinz.cmu.edu"
		},
		{
			"name" : "Singapore Management University",
			"degree" : "Bachelor of Science (Information Systems Management)",
			"location" : "Singapore",
			"majors" : [
				"Information Systems"
			],
			"dates" : "2009",
			"url" : "sis.smu.edu.sg"
		}

	],
	"onlineCourses" : [
		{
			"title" : "Front End Web Developer - Nanodegree",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "www.udacity.com"
		},
		{
			"title" : "Android Programming 1",
			"school" : "Coursera",
			"date" : "2015",
			"url" : "www.coursera.com"
		},
		{
			"title" : "Android Programming 2",
			"school" : "Coursera",
			"date" : "2015",
			"url" : "www.coursera.com"			
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "United Overseas Bank",
			"title" : "Delivery Manager - eChannels, Business Technology",
			"location" : "Singapore",
			"dates" : "March 2015 - Present",
			"description" : "Lead delivery of an advisory mobile app on the ios and android platform. Duties include engaging business stackholders, requirement gathering and managing development and testing by internal teams and application vendor."
		},
		{
			"employer" : "United Overseas Bank",
			"title" : "Business Analyst - eChannels, Business Technology",
			"location" : "Singapore",
			"dates" : "July 2013 - March 2015",
			"description" : "Worked on delivery of an Equity Trading System from RFP stage to go-live. Duties include performing requirement gathering and analysis of to-be process for trade execution, post-trade reconciliation and settlements process. Overall lead for design, development and testing of integration between trading and settlements system."			
		},
		{
			"employer" : "United Overseas Bank",
			"title" : "Business Analyst - Core Banking System, Business Technology",
			"location" : "Singapore",
			"dates" : "January 2011 - June 2013",
			"description" : "Worked on regional standardisation project to roll out the regional Loans system for UOB's subsidiary bank in Malaysia. Duties include overseeing end-to-end analysis, design, vendor development and testing of country specific loan product modules."			
		}		
	]	
};

var projects = {
	"projects" : [
		{
			"title" : "Personal Project - Mobile Cookbook App",
			"dates" : "June 2015",
			"description" : "Proof of concept mobile cook book app build on Cordova hybrid app platform utilizing Ionic framework",
			"images" : [
				"images/cookbook1.jpg", "images/cookbook2.jpg"
			]
		},
		{
			"title" : "Personal Project - Mobile Chat App",
			"dates" : "June 2015",
			"description" : "Proof of concept mobile chat app build on Cordova hybrid app platform utilizing Ionic framework with integration to FireBase cloud database via Restful calls",
			"images" : [
				"images/chat.jpg"
			]			
		}				
	]
}

bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i=0; i<bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}

	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);
};

education.display = function () {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var schoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(schoolNameDegree);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		for (major in education.schools[school].majors) {
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
		}		
	}

	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var onlineTitleSchool = formattedCourseTitle + formattedCourseSchool;
		$(".education-entry:last").append(onlineTitleSchool);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));	
	}	
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var employerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(employerTitle);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));	
	}
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
		for (image in projects.projects[project].images) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
