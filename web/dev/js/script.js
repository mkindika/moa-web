jQuery.noConflict();

(function($){

	'use strict';

	/*
	* document ready function
	*/
	$(function() {

		var starColor = '#279257';

		$('.parallax-window').parallax();

		$('.slick').slick({
			  dots: false,
			  infinite: false,
			  speed: 300,
			  slidesToShow: 5,
			  slidesToScroll: 1,
			  responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			  ]
			});

			$("#ex2").slider({
				tooltip: 'always'
			});

			$("#ex3").slider({
				tooltip: 'always'
			});

			$('.rating').each(function(){
				var val = $(this).data('value');
				if(val && val>=0 && val<=5){
					$(this).rateYo({
						rating: val,
						starWidth: '12px',
						ratedFill: starColor,
						normalFill: "#dddddd",
						readOnly: true
					});
				}
			});
			
			$(".register").click(function(){
                   $("#regbut").show();
				   $("#singbut").hide();
				   $("#reg").addClass("transport")
				   $("#reg").removeClass("transport1");
                   $("#sin").removeClass("transport");
				   $("#sin").addClass("transport1");
			});
			$(".sing").click(function(){
                   $("#regbut").hide();
				   $("#singbut").show();
				   $("#reg").removeClass("transport")
				   $("#reg").addClass("transport1");
                   $("#sin").addClass("transport");
				   $("#sin").removeClass("transport1");
			});
			$('#next').click(function(){
				$('#pay').show("slow");
				$('#1edit').hide("slow");
			});
			$('#Edit').click(function(){
                 $('#1edit').show("slow");
				$('#pay').hide("slow");
			});
			$("#gueclick").click(function(){
                $('#gueview').show();
				$("#arow").removeClass("glyphicon glyphicon-menu-down");
				$('#arow').addClass('glyphicon glyphicon-menu-up');
			});
			$('#close').click(function(){
			  $('#gueview').hide();
				$('#arow').removeClass('glyphicon glyphicon-menu-up');
				$("#arow").addClass("glyphicon glyphicon-menu-down");
			});
			$("#tab1next").click(function(){
                 $("#tab2").show();
				 $("#tab1").hide();
			});
				$("#tab2next").click(function(){
                 $("#tab3").show();
				 $("#tab1").hide();
				 $("#tab2").hide();
			});
				$("#t1").click(function(){
                 $("#tab1").show();
				 $("#tab2").hide();
				 $("#tab3").hide();
			});
				$("#t2").click(function(){
                 $("#tab2").show();
				 $("#tab1").hide();
				 $("#tab3").hide();
			});
				$("#t3").click(function(){
                 $("#tab3").show();
				 $("#tab1").hide();
				 $("#tab2").hide();
			});
			$("#addgues1").click(function(){
                 $("#guest2").show();
				  $("#ANG2").show();
				  $("#ANG1").hide();
			});
			$("#remove1").click(function(){
				$("#guest2").hide();
				 $("#ANG1").show();

			});
				$("#addgues2").click(function(){
                 $("#guest3").show();
				 $("#ANG2").hide();
				
			});
			$("#remove2").click(function(){
				$("#guest3").hide();
				 $("#ANG2").HIDE();

			});

		

	
		
		$('#ashow').click(function(){
			  var y = document.getElementById("guenumber").innerHTML;
			   
			  var z = Number(y) + Number(1);
			
			//   var aN = document.getElementById("aNshow").innerHTML;
               document.getElementById("guenumber").innerHTML =z;

		    var aN = document.getElementById("aNshow").innerHTML;
		    var za = Number(aN) + Number(1);
			document.getElementById("aNshow").innerHTML =za;
			
		});
		$('#a-show').click(function(){
			  var y = document.getElementById("guenumber").innerHTML;
			  var z = Number(y) - Number(1);
             

			document.getElementById("guenumber").innerHTML =z;

			 
			var aN = document.getElementById("aNshow").innerHTML;
			var za = Number(aN) - Number(1);
			document.getElementById("aNshow").innerHTML =za;
	
             
		});
			$('#cshow').click(function(){
			  var y = document.getElementById("guenumber").innerHTML;
			  var z = Number(y) + Number(1);
			document.getElementById("guenumber").innerHTML =z;
		
			var aN = document.getElementById("cNshow").innerHTML;
			 var za = Number(aN) + Number(1);
			document.getElementById("cNshow").innerHTML =za;

             
		});
		$('#c-show').click(function(){
			  var y = document.getElementById("guenumber").innerHTML;
			  var z = Number(y) - Number(1);
			document.getElementById("guenumber").innerHTML =z;
				var aN = document.getElementById("cNshow").innerHTML;
			 var za = Number(aN) - Number(1);
			document.getElementById("cNshow").innerHTML =za;

		

			
             
		});

			$('#i-show').click(function(){
				$('#infa').show();
			  var y = document.getElementById("infanumber").innerHTML;
			  var z = Number(y) - Number(1);
			document.getElementById("infanumber").innerHTML =z;
				var aN = document.getElementById("iNshow").innerHTML;
			 var za = Number(aN) - Number(1);
			document.getElementById("iNshow").innerHTML =za;		
             
		});
		
			$('#ishow').click(function(){
				$('#infa').show();
			  var y = document.getElementById("infanumber").innerHTML;
			  var z = Number(y) + Number(1);
			document.getElementById("infanumber").innerHTML =z;
				var aN = document.getElementById("iNshow").innerHTML;
			 var za = Number(aN) + Number(1);
			document.getElementById("iNshow").innerHTML =za;		
             
		});



			$('.rating-lg').each(function(){
				var val = $(this).data('value');
				var readonly = true;
				if($(this).data('enableEdit')){
					readonly = false;
				}
				if(val && val>=0 && val<=5){
					$(this).rateYo({
						rating: val,
						starWidth: '24px',
						ratedFill: starColor,
						normalFill: "#dddddd",
						readOnly: readonly
					});
				}
			});

			$('input').iCheck({
				checkboxClass: 'icheckbox_square-green',
				radioClass: 'iradio_square-green'
			});

			$('.filter-toggle').on('click', function(){
				$('.filter-cont-wrap').toggleClass('hidden-xs');
			});

			$('#imageGallery').on('click', function(e){
				event = e || window.event;
			    var target = event.target || event.srcElement,
			        link = target.src ? target.parentNode : target,
			        options = {
			        	index: link, 
			        	event: event,
			        	continuous: false,
			        	toggleControlsOnSlideClick: false
			        },
			        links = this.getElementsByTagName('a');
			    blueimp.Gallery(links, options);
			});

			

			if(!isMobileDevice()){				
				$("#stickyForm").sticky({topSpacing:0});
				$("#stickyNav").sticky({topSpacing:0});

				$('#stickyNav').onePageNav({
					currentClass: 'active',
					changeHash: false,
					scrollSpeed: 750,
				});				
			}
						

		});		

}(jQuery));