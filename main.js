// Energy Saving form
$('html').on('keypress', function(e){
            if(e.keyCode == 13)
            {
                return false;
            }
        });


        var progress = 0, 
            img_amt = 0, 
            img_cnt = 0,
            active = $('.progress-form .activate');

        // // Progress bar
        function checkProgress(){
            img_amt = $('li.form-group').length;
            img_cnt = $('li.activate').index() + 1;
            progress = img_cnt / img_amt * 100;
            $('.progress-bar-eng').width(progress + '%');
        }
        checkProgress()

        // click through form
        $('.nxt').click(function(e) {
            e.preventDefault();

            //cycle through li
            active = $('.progress-form .activate');
            active.removeClass('activate slideInLeft');
            active.next('li').addClass('activate slideInLeft');
            
            //update progress bar
            checkProgress();        
            
            // hide next on last item
            if(img_amt == $('li.activate').index() + 1 ){
                $('.nxt').addClass('hide');
            }
        });

        

        $('.prv').click(function(e) {
            e.preventDefault();

            active = $('.progress-form .activate');

            if ( !active.is('li:first-child') ){
                active.removeClass('activate slideInLeft');
                active.prev('li').addClass('activate slideInRight');
            }
            checkProgress();
            $('.nxt').removeClass('hide');
        });
