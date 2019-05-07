$(document).ready(function(){
    $('.closeIntro').click(function(){
        $('h1').removeClass('introOpacity');
        $('.intro').removeClass('fadeInDown');
        $('.intro').addClass('fadeOutDown');
        setTimeout(function(){
            $('.intro').addClass('pointerNone');
            $('.intro').hide();
        }, 500);
        setTimeout(function(){
            $('audio').attr('src','newyork.mp3');
            $('.iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435391046756!6m8!1m7!1spc6vu5MTxR4ub0aAEoyAfg!2m2!1d40.758466!2d-73.985446!3f61!4f0!5f0.7820865974627469');
        }, 500);
        $('.location').click(function(){
            $('.locationList').toggleClass('showList hideList');
            $('.locationList').removeClass('pageLoadHide');
            $('.listLoc').toggleClass('fadeOutLeft fadeInLeft');
        });
        function jumper(){
    		$('.iframe').addClass('loading');
    		setTimeout(function(){
    			$('.iframe').removeClass('loading');
    		}, 1000);
        }
        $(".muteButton").click(function(){
           	$("audio").prop('muted', !$("audio").prop('muted'));
       		$('.muteButton').toggleClass('muted sound');
       		$('.muteIcon').toggleClass('fa-volume-off fa-volume-up');
       	});
        $('.listLoc').click(function(){
        	var theID = $(this).attr('id');
            switch(theID) {
                case 'WhiteHouse':
                    $('.selectedLoc').html('The White House');
                    $('iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435393888812!6m8!1m7!1siKije2lto_r5OcgKX4sleg!2m2!1d38.897766!2d-77.036504!3f154.63696753722124!4f-6.370048137996378!5f0.7820865974627469');
                    setTimeout(function(){
    	                $('audio').attr('src', 'whitehouse.mp3');
                    }, 1000);
         			jumper();
                    break;
                case 'NewYork':
                    $('.selectedLoc').html('New York');
    	            $('.iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435391046756!6m8!1m7!1spc6vu5MTxR4ub0aAEoyAfg!2m2!1d40.758466!2d-73.985446!3f61!4f0!5f0.7820865974627469');
                    setTimeout(function(){
    	                $('audio').attr('src', 'newyork.mp3');
                    }, 1000);
    	            jumper();
    	            break;
                case 'Tokyo':
                    $('.selectedLoc').html('Tokyo');
    	            $('.iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435393529969!6m8!1m7!1sWAs0hkiNv6Bn9e3GJV1FKA!2m2!1d35.659565!2d139.700546!3f263.520569547412!4f1.2564718939410824!5f0.7820865974627469');
                    setTimeout(function(){
    	                $('audio').attr('src', 'tokyo.mp3');
                    }, 1000);
    	            jumper();
    	            break;
                case 'Antarctica':
                    $('.selectedLoc').html('Antarctica');
    	            $('.iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435396021135!6m8!1m7!1sTO2U5IICpbjaqgbpLcCF7A!2m2!1d-62.595457!2d-59.902478!3f67.47017658493495!4f-14.041705695303278!5f0.7820865974627469');
                    setTimeout(function(){
    	                $('audio').attr('src', 'antarctica.mp3');
                    }, 1000);
    	            jumper();
    	            break;
                case 'Stonehenge':
                    $('.selectedLoc').html('Stonehenge');
    	            $('.iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435398126430!6m8!1m7!1sVBnrlmeoNKPv-TFzV2uGkg!2m2!1d51.178924!2d-1.826257!3f100.4164472443403!4f-10.51059042667464!5f0.7820865974627469');
                    setTimeout(function(){
    	                $('audio').attr('src', 'celtic.mp3');
                    }, 1000);
    	            jumper();
    	            break;
            }
        });
    });
});
