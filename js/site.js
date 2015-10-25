// call this from the developer console and you can control both instances
var calendars = {};
var key = 'empty';
var language =  window.navigator.language;

$(document).ready( function() {

  // assuming you've got the appropriate language files,
  // clndr will respect whatever moment's language is set to.
  // moment.lang('ru');
    
  //alert(language);

  // here's some magic to make sure the dates are happening this month.
  var thisMonth = moment().format('YYYY-MM');

  var eventArray = [
    { startDate: thisMonth + '-10', endDate: thisMonth + '-14', title: 'Multi-Day Event' },
    { startDate: thisMonth + '-21', endDate: thisMonth + '-23', title: 'Another Multi-Day Event' }
  ];

  // the order of the click handlers is predictable.
  // direct click action callbacks come first: click, nextMonth, previousMonth, nextYear, previousYear, or today.
  // then onMonthChange (if the month changed).
  // finally onYearChange (if the year changed).

  calendars.clndr1 = $('.cal1').clndr({
    events: eventArray,
    // constraints: {
    //   startDate: '2013-11-01',
    //   endDate: '2013-11-15'
    // },
    clickEvents: {
      click: function(target) {
        console.log(target);
        if($(target.element).hasClass('inactive')) {
          console.log('not a valid datepicker date.');
        } else {
          console.log('VALID datepicker date.');
        }
      },
      nextMonth: function() {
        console.log('next month.');
      },
      previousMonth: function() {
        console.log('previous month.');
      },
      onMonthChange: function() {
        console.log('month changed.');
      },
      nextYear: function() {
        console.log('next year.');
      },
      previousYear: function() {
        console.log('previous year.');
      },
      onYearChange: function() {
        console.log('year changed.');
      }
    },
    multiDayEvents: {
      startDate: 'startDate',
      endDate: 'endDate'
    },
    showAdjacentMonths: true,
    adjacentDaysChangeMonth: false
  });

  // calendars.clndr2 = $('.cal2').clndr({
  //   template: $('#template-calendar').html(),
  //   events: eventArray,
  //   startWithMonth: moment().add('month', 1),
  //   clickEvents: {
  //     click: function(target) {
  //       console.log(target);
  //     }
  //   }
  // });

  // bind both clndrs to the left and right arrow keys
  $(document).keydown( function(e) {
    if(e.keyCode == 37) {
      // left arrow
      calendars.clndr1.back();
      calendars.clndr2.back();
    }
    if(e.keyCode == 39) {
      // right arrow
      calendars.clndr1.forward();
      calendars.clndr2.forward();
    }
  });
 
  $(".login-button").click(function(event) {
     alert("login");
     //check the connexion. Post request and load the profile
     var header = document.getElementById('tophead');
//     header.innerHTML = "<div class=/""header_top/"">"+
//					  "<div class=/""menu/"">"+
//						  "<a class=/""toggleMenu/"" href=/""#/""><img src=/""images/nav.png/"" alt="" /></a>"+
//							"<ul class=/""nav/"">"+
//								"<li><a href=/""#/""><i><img src=/""images/settings.png/"" alt=/""/"" /></i>Settings</a></li>"+
//								"<li class=/""active/""><a href=/""#/""><i><img src=/""images/user.png/"" alt="" /></i>Account</a></li>"+
//								"<li><a href=/""#/""><i><img src=/""images/mail.png/"" alt="" /></i>Messages <span class=/""messages/"">5</span></a></li>"+
//                                "<li><a href=/""#/""><i><img src=/""images/mail.png/"" alt="" /></i>Notifications <span class=/""messages/"">11</span></a></li>"+
//								"<li><a href=/""#/""><i><img src=/""images/favourite.png/"" alt="" /></i>Contacts</a></li>"+
//							"<div class=/""clear/""></div>"+
//						    "</ul>"+
//							"<script type=/""text/javascript/"" src=/""js/responsive-nav.js/""></script>"+
//				        "</div>"+	
//					  "<div class=/""profile_details/"">"+
//				    		   "<div id=/""loginContainer/"">"+
//				                  "<a id=/""loginButton/"" class=""><span>Me</span></a>"+  
//				                    "<div id=/""loginBox/"">"+                
//				                      "<form id=/""loginForm/"">"+
//				                        "<fieldset id=/""body/"">"+
//				                            "<div class=/""user-info/"">"+
//							        			"<h4>Hello,<a href=/""#/""> Username</a></h4>"+
//							        			"<ul>"+
//							        				"<li class=/""profile active/""><a href=/""#/"">Profile </a></li>"+
//							        				"<li class=/""logout/""><a href=/""#/""> Logout</a></li>"+
//							        				"<div class=/""clear/""></div>"+		
//							        			"</ul>"+
//							        		"</div>"+			                            
//				                        "</fieldset>"+
//				                    "</form>"+
//				                "</div>"+
//				            "</div>"+
//				             "<div class=/""profile_img/"">"+	
//				             	"<a href=/""#/""><img src=/""images/profile_img40x40.jpeg/"" alt="" />	</a>"+
//				             "</div>"+		
//				             "<div class=/""clear/""></div>"+		  	
//					    "</div>"+	
//		 		      "<div class=/""clear/""></div>"+				 
//				   "</div>";
     alert(header.innerHTML);
     header.innerHTML = "<h1>Hello there</h1>";
     location.href = 'profile.html';
      return false;
  });
});

