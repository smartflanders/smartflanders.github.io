$(function() {
	$('.breadcrumb .ui.dropdown').dropdown({
		action: 'hide',
		onChange: function(value, text, $selectedItem) {
		  console.log('breadcrumb dropdown change');
		}
	});
});


function adapt_breadcrumbs(){
	if($('.breadcrumb span.item').length){

		// default
		$('.breadcrumb span.item').show();
		$('.breadcrumb .ui.dropdown').hide();
		$('.breadcrumb .ui.dropdown .menu').html('');

		// adapt
		$('.breadcrumb .ui.dropdown').show();
		last_element_y = $('.breadcrumb span.item').last().position().top;
		$('.breadcrumb .ui.dropdown').hide();

		// place elements
		if(last_element_y > 1){
			for (i = 1; i <= $('.breadcrumb span.item').length; i++) {
				//console.log(i);
				//console.log(last_element_y);
				if(last_element_y > 1){
					$('.breadcrumb .ui.dropdown').show();
					elm = $('span.item:nth-child('+i+')', ('.breadcrumb'));
					/* console.log(elm); */
					$(elm).hide();
					if($(elm).length > 0){
						/* console.log($('a', elm).attr('href'), $('a', elm).text()); */
						$('.breadcrumb .ui.dropdown .menu').append('<div class="item"><a href="' + $('a', elm).attr('href') + '">' + $('a', elm).text() + '</a></div>');
					}
					last_element_y = $('.breadcrumb span.item').last().position().top;
				}else{
					break;
				}
			}
		}

	}
}

window.addEventListener('resize', adapt_breadcrumbs);
