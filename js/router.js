define(function (require) {
	var $ = require("jquery"),
		_ = require("underscore"),
		Backbone = require("backbone"),
		// -- views --
		mainHomeView = require("views/home/main"),
		blogView = require("views/etc/blog"),
		GenericView = require("views/generic"),
		//FIXME: delete
		//CompositeGenericView = require("views/generic-composite"),
		// mcministry
		committeeView = require("views/mcministry/committee"),
		//membersView = require("views/mcministry/members"),
		minutesView = require("views/mcministry/minutes"),
		budgetView=require("views/mcministry/budget"),
		ateamView = require("views/people/ateam"),
		// resources
		//resourceView= require("views/resource"),
		// events
		//eventsView=require("views/events"),
		// -- templates --
		errorTemplate = require("text!templates/404.html"),
		aboutTemplate = require("text!templates/about/about.html"),
		charterTemplate = require("text!templates/about/charter.html"),
		burtAndDeedeeTemplate = require("text!templates/about/burt_and_deedee.html"),
		//oweekTemplate = require("text!templates/people/oweek_advisors.html"),
		oweekWelcomeTemplate = require("text!templates/o-week/welcome.html")
		oweekExplanationTemplate = require("text!templates/o-week/explanation.html")
		oweekVideosTemplate = require("text!templates/o-week/videos.html")
		oweekBookTemplate = require("text!templates/o-week/book.html")

		
		// people
		//ateamTemplate = require("text!templates/people/ateam.html"),
		mastersTemplate = require("text!templates/people/masters.html"),
		gibsonTemplate = require("text!templates/people/gibsons.html"),
		simonozgeTemplate = require("text!templates/people/simonozge.html"),
		bradTemplate = require("text!templates/people/blunt.html"),
		tabithaTemplate = require("text!templates/people/tabitha.html"),
		paaTemplate = require("text!templates/people/paa.html"),
		smrTemplate = require("text!templates/people/smr.html"),
		fellowsTemplate = require("text!templates/people/fellows.html"),
		dasTemplate = require("text!templates/people/das.html"),
		fymsTemplate = require("text!templates/people/fyms.html"),
		associatesTemplate=require("text!templates/people/associates.html"),
		courtTemplate = require("text!templates/people/court.html"),
		rhaTemplate = require("text!templates/people/rhas.html"),
		pcaTemplate = require("text!templates/people/pcas.html"),
		// mcministry
		constitutionTemplate = require("text!templates/mcministry/constitution.html"),
		minutesTemplate = require("text!templates/mcministry/minutes.html"),
		membersTemplate = require("text!templates/mcministry/members.html"),
		housingTemplate = require("text!templates/mcministry/housing.html"),
		rolesTemplate = require("text!templates/mcministry/roles.html"),
		
		// resources
        initiativeTemplate = require("text!templates/resources/initiative.html"),
		roomReservationTemplate = require("text!templates/resources/room_reservation_detail.html"),
		techInfoTemplate = require("text!templates/resources/tech_info_detail.html"),
		equipmentRentalTemplate = require("text!templates/resources/equipment_rental.html"),
        crestImagesTemplate = require("text!templates/resources/crest_images.html"),
        
        masterAppTemplate = require("text!templates/etc/masters_app.html");
		//photos
		//photosTemplate = require("text!templates/gallery/photos.html")
		//photosView=require("views/photos");

	var validTemplatePrefix = ['about', 'charter','constitution', 'contacts','burtAndDeedee','hrf','oweek',
	'members','court','pca','rha','housing','roles','masterApp','oweekWelcome','oweekExplanation','oweekVideos', 'oweekBook'],
		validProfilePrefix = ['masters', 'simonozge', 'gibson', 'brad', 'tabitha','paa','smr','fellows','associates','das','fyms'],
		validResourcePrefix = ['initiative', 'roomReservation', 'techInfo','equipmentRental','crestImages'],
		validTemplate = [];

		_.each(validTemplatePrefix, function(template) {
			validTemplate.push(template + "Template");
		});
		_.each(validProfilePrefix, function(template) {
			validTemplate.push(template + "Template");
		});
		_.each(validResourcePrefix, function(template) {
			validTemplate.push(template + "Template");
		});

	var AppRouter = Backbone.Router.extend({
			routes : {
				'': 'showHome',
				//'blog': 'showBlog',
				//'events': 'showEvents',
				//'photos': 'showPhotos',
				'committees': 'showCommittees',
				'ateam' : 'showAteam',
				//'members(/:section)': 'showMembers',
				'minutes': 'showMinutes',
				//'resource': 'showResource',
				'budget': 'showBudget',
				//NOTE: for prototype pages
				//'proto': 'showProto',
				// Default
				'*actions': 'defaultAction'
			},
			initialize: function() {
				return this;
			},
			showHome: function() {
				mainHomeView.render();
			},
			showBlog: function() {
				console.log("rendering blog...");
				blogView.render();
			},
			showEvents: function() {
				log("rendering events...", DEBUG);
				eventsView.render();
			},

			// mcministry
			showCommittees: function() {
				log("rendering committees...", DEBUG);
				committeeView.render();
			},
			showAteam: function() {
				log("rendering ateam...", DEBUG);
				ateamView.render();
			},
			
			showMinutes: function() {
				log("rendering minutes...", DEBUG);
				minutesView.render();
			},
			//showMembers: function(section) {
			//	membersView.section = section;
			//	membersView.render();
			//},
			showBudget: function() {
				budgetView.render();
			},
			// resource
			//showResource: function() {
			//	resourceView.render();
			//},
			showProto: function() {
				//use this space to test out new pages
				//var compView = new CompositeGenericView();
				//compView.options.template = [ mastersTemplate, cohenTemplate, lisaTemplate, owenTemplate,
					//tabithaTemplate];
				ProtoView.render();
			},
			defaultAction: function(url) {
				var templateName = url + "Template",
					template;
				// if template valid, render otherwise 404
				if (_.indexOf(validTemplate, templateName) >= 0) {
					template = eval(templateName);
				} else {
					//TODO: HACK HACK HACK
					//backbone routers prevents #routes from going through
					//need to make these valid routes temporarily
					if (_.indexOf(validProfilePrefix, url) >= 0) {
						return false;
					}	else {
						log("rendering 404...", DEBUG);
						template = errorTemplate;
					}
				}
				// TODO: individual css depending on template type
				// eg. if (template in validProfileTemplate...")
				var view = new GenericView({
					"css": "_profile",
					//TODO: check for 1char urls
					"title": url[0].toUpperCase() + url.slice(1, url.length)
				});
				view.render(template);
			}
		});

		var initialize = function(){
			var app_router = new AppRouter;
			// page has loaded, don't trigger it twice
			Backbone.history.start(); //{pushState: true}
		};

		return {
			initialize: initialize
		};
});
