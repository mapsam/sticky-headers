$(document).ready(function(){
  var fixed = false;
	var topHeight = $('#header').height();
	var navHeight = $('#nav').height();
	var sectionHeaderHeight = $('.title').height();
	var sec0 = $('#section0').height() + topHeight + navHeight;
	var sec1 = $('#section1').height() + sec0 + sectionHeaderHeight;
	var sec2 = $('#section2').height() + sec1 + sectionHeaderHeight;
	var sec3 = $('#section3').height() + sec2 + sectionHeaderHeight;
	var sec4 = $('#section4').height() + sec3 + sectionHeaderHeight;
	var sec5 = $('#section5').height() + sec4 + sectionHeaderHeight;
	$(document).scroll(function(){
		if($(this).scrollTop() >= topHeight) {
			if(!fixed) {
				fixed = true;
				$('#nav').css({position:'fixed', top:'0px'});
				$('#section0').css({'padding-top':navHeight+'px'});
			}
		} else {
			if(fixed) {
				fixed = false;
				$('#nav').css({position:'relative', top:'0px'});
				$('#section0').css({'padding-top':0});
			}
		}

		if(($(this).scrollTop() >= sec0) && ($(this).scrollTop() < sec1)) {
			$('#sectionHeader1').css({position:'fixed', top:'0px'});
			$('#section1').css({'padding-top':sectionHeaderHeight+'px'});
		} else {
			$('#sectionHeader1').css({position:'relative', top:'0px'});
			$('#section1').css({'padding-top':0});
		}

		if(($(this).scrollTop() >= sec1) && ($(this).scrollTop() < sec2)) {
			$('#sectionHeader2').css({position:'fixed', top:'0px'});
			$('#section2').css({'padding-top':sectionHeaderHeight+'px'});
		} else {
			$('#sectionHeader2').css({position:'relative', top:'0px'});
			$('#section2').css({'padding-top':0});
		}

		if(($(this).scrollTop() >= sec2) && ($(this).scrollTop() < sec3)) {
			$('#sectionHeader3').css({position:'fixed', top:'0px'});
			$('#section3').css({'padding-top':sectionHeaderHeight+'px'});
		} else {
			$('#sectionHeader3').css({position:'relative', top:'0px'});
			$('#section3').css({'padding-top':0});
		}

		if(($(this).scrollTop() >= sec3) && ($(this).scrollTop() < sec4)) {
			$('#sectionHeader4').css({position:'fixed', top:'0px'});
			$('#section4').css({'padding-top':sectionHeaderHeight+'px'});
		} else {
			$('#sectionHeader4').css({position:'relative', top:'0px'});
			$('#section4').css({'padding-top':0});
		}

		if(($(this).scrollTop() >= sec4) && ($(this).scrollTop() < sec5)) {
			$('#sectionHeader5').css({position:'fixed', top:'0px'});
			$('#section5').css({'padding-top':sectionHeaderHeight+'px'});
		} else {
			$('#sectionHeader5').css({position:'relative', top:'0px'});
			$('#section5').css({'padding-top':0});
		}
	});
});
