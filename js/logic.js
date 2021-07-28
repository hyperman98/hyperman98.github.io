
    // button "more_details" processing work
		var button_status = 0;

		$('.more_details').click(function(){

				if (button_status == 1) {
						// if button is activated
						button_status = 0;

            $('.section_3').css({
								'height' : '350px'
						});

            $('.for_shadow').css({
                'box-shadow' : '0px -130px 50px 0px #fff inset'
            });

            $('.more_details').css({
                'background-color' : '#fff',
                'color' : '#3366FF'
            });

				} else {
						// if button is deactivated
						button_status = 1;

						$('.section_3').css({
								'height' : '640px'
						});

            $('.for_shadow').css({
                'box-shadow' : '0px 0px 0px 0px #fff inset'
            });

            $('.more_details').css({
                'background-color' : '#3366FF',
                'color' : '#fff'
            });
				}
		});

    $(document).ready(function(){
    		$(".jqueryForm").addClass("styler");
    		$(".jqueryForm").styler();
    });
