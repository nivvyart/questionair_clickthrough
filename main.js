if($('#energy-calc-form').length) {
        $('html').on('keypress', function(e){
            if(e.keyCode == 13)
            {
                return false;
            }
        });

    
        // Energy Saving form

        var progress = 0, 
            img_amt = 0, 
            img_cnt = 0,
            active = $('.progress-form .activate'),
            validCheck = "";

        // // Progress bar
        function checkProgress(){
            img_amt = $('li.form-group').length;
            img_cnt = $('li.activate').index() + 1;
            progress = img_cnt / img_amt * 100;
            $('.progress-bar-eng').width(progress + '%');
            $('.progress-bar-eng').text(progress.toFixed(1) + '%');
        }
        checkProgress();
        
        $('.progress-bar-eng').width('25px');
        $('.progress-bar-eng').text(1 + '%');

        // click through form
        $('.nxt').click(function(e) {
            e.preventDefault();

            validCheck = "";
            $('.activate').find('input[type=text]').each(function (index) {
                if( $(this).val() === "") {
                    var fieldText = $(this).parent().find('h3').text();
                    validCheck += "Please enter " + fieldText.replace('*','') + "\n";
                }
            });

            $('.activate').find('select').each(function (index) {
                if( $(this).val() === "") {
                    var selectText = $(this).parent().find('h3').text();
                    validCheck += "Please select " + selectText.replace('*','') + "\n";
                }
            });
                        
            if ( validCheck != "" ){
                 alert(validCheck);   
            } else {
                console.log('valid, move on');
                cycleForward();
            }

            //cycle through li
            function cycleForward() {
                active = $('.progress-form .activate');
                active.removeClass('activate slideInLeft');
                active.next('li').addClass('activate slideInLeft');
            }
            
            
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

        $('.area-desc-dropdown').on('change',function() {
            var value = $(this).val();
            if (value == "Other") {
                $('#area-other-textarea').show()
            } else {
                $('#area-other-textarea').hide()
            }
        })

        $('.existing-dropdown').on('change',function() {
            var value = $(this).val();
            if (value == "Other") {
                $('#existing-other-textarea').show()
            } else {
                $('#existing-other-textarea').hide()
            }
        })




    }
    // end energy savings form
