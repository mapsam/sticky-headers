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

		var headers = [['#sectionHeader1', '#section1'], ['#sectionHeader2', '#section2'], ['#sectionHeader3', '#section3'], ['#sectionHeader4', '#section4'], ['#sectionHeader5', '#section5']]

		if(($(this).scrollTop() >= sec0) && ($(this).scrollTop() < sec1)) {
			$(headers[0][0]).css({position:'fixed', top:'0px'});
			$(headers[0][1]).css({'padding-top':sectionHeaderHeight+'px'});
		} else {
			$(headers[0][0]).css({position:'relative', top:'0px'});
			$(headers[0][1]).css({'padding-top':0});
		}

		if(($(this).scrollTop() >= sec1) && ($(this).scrollTop() < sec2)) {
			$(headers[1][0]).css({position:'fixed', top:'0px'});
			$(headers[1][1]).css({'padding-top':sectionHeaderHeight+'px'});
		} else {
			$(headers[1][0]).css({position:'relative', top:'0px'});
			$(headers[1][1]).css({'padding-top':0});
		}

		if(($(this).scrollTop() >= sec2) && ($(this).scrollTop() < sec3)) {
			$(headers[2][0]).css({position:'fixed', top:'0px'});
			$(headers[2][1]).css({'padding-top':sectionHeaderHeight+'px'});
		} else {
			$(headers[2][0]).css({position:'relative', top:'0px'});
			$(headers[2][1]).css({'padding-top':0});
		}

		if(($(this).scrollTop() >= sec3) && ($(this).scrollTop() < sec4)) {
			$(headers[3][0]).css({position:'fixed', top:'0px'});
			$(headers[3][1]).css({'padding-top':sectionHeaderHeight+'px'});
		} else {
			$(headers[3][0]).css({position:'relative', top:'0px'});
			$(headers[3][1]).css({'padding-top':0});
		}

		if(($(this).scrollTop() >= sec4) && ($(this).scrollTop() < sec5)) {
			$(headers[4][0]).css({position:'fixed', top:'0px'});
			$(headers[4][1]).css({'padding-top':sectionHeaderHeight+'px'});
		} else {
			$(headers[4][0]).css({position:'relative', top:'0px'});
			$(headers[4][1]).css({'padding-top':0});
		}
	});
});
