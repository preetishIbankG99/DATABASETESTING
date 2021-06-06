 window.fbAsyncInit = function() {
	FB.init({appId: '148832505185910', status: true, cookie: true, xfbml: true});

	/* All the events registered */
	FB.Event.subscribe('auth.login', function(response) {
		// do something with response
		fb_login();
	});
	FB.Event.subscribe('auth.logout', function(response) {
		// do something with response
		fb_logout();
	});

	FB.getLoginStatus(function(response) {
		if (response.session) {
			// logged in and connected user, someone you know
			fb_login();
		}
		else {
			fb_logout();
		}
	});
};

(function() {
	var e = document.createElement('script');
	e.type = 'text/javascript';
	e.src = document.location.protocol +
		'//connect.facebook.net/en_US/all.js';
	e.async = true;
	document.getElementById('fb-root').appendChild(e);
}());

function fb_login(){
	FB.api('/me', function(response) {
		jQuery('#profile_pic').html('<img src="http://graph.facebook.com/' + response.id + '/picture" />');
		jQuery('#header_welcome h4 span').html(response.name);
		if( jQuery('#header_welcome .logged_in').is(':visible') ) {
			return false;
		}
		else {
			jQuery('#header_welcome .logged_in').show();
			jQuery('#header_welcome .logged_out').hide();
		}
		jQuery.colorbox.close();
	
		
	});
}

function fb_logout(){

	if( jQuery('#header_welcome .logged_in').is(':visible') ) {
		return false;
	}
	else {
		jQuery('#header_welcome .logged_in').hide();
		jQuery('#header_welcome .logged_out').show();
	}
	
	jQuery.colorbox.close();
}

function fb_logout_user(){
	FB.logout();
}


/*UNUSED FUNCTIONS*/
//stream publish method
function streamPublish(name, description, hrefTitle, hrefLink, userPrompt){
	FB.ui(
	{
		method: 'stream.publish',
		message: '',
		attachment: {
			name: name,
			caption: '',
			description: (description),
			href: hrefLink
		},
		action_links: [
			{ text: hrefTitle, href: hrefLink }
		],
		user_prompt_message: userPrompt
	},
	function(response) {

	});

}
function showStream(){
	FB.api('/me', function(response) {
		//console.log(response.id);
		streamPublish(response.name, '', '', '', "");
	});
}

function graphStreamPublish(){
	var body = '';
	FB.api('/me/feed', 'post', { message: body }, function(response) {
		if (!response || response.error) {
			alert('Error occured');
		} else {
			alert('Post ID: ' + response.id);
		}
	});
}

function fqlQuery(){
	FB.api('/me', function(response) {
		 var query = FB.Data.query('select name, hometown_location, sex, pic_square from user where uid={0}', response.id);
		 query.wait(function(rows) {
		   
		   document.getElementById('name').innerHTML =
			 'Your name: ' + rows[0].name + "<br />" +
			 '<img src="' + rows[0].pic_square + '" alt="" />' + "<br />";
		 });
	});
}

function setStatus(){
	status1 = document.getElementById('status').value;
	FB.api(
	  {
		method: 'status.set',
		status: status1
	  },
	  function(response) {
		if (response == 0){
			alert('Your facebook status not updated. Give Status Update Permission.');
		}
		else{
			alert('Your facebook status updated');
		}
	  }
	);
}

jQuery(document).ready(function(){
	jQuery('#facebook_logout').click(function() {
		fb_logout_user();
	});
});
