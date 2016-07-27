//pshan 7.22: JavaScript for University Leadership Page

(function($, win, doc, undefined){

    /* Dean Part */
    function countDean(){
       $('.flag').each(function(){
           var newpadding;
           if($(win).width()<=480){
               $(this).find('.flag-item').width($(this).find('.flag-border').width()*.45);
               newpadding = $(this).find('.flag-item').outerWidth();
           }
           else if($(win).width()<=1024){
                $(this).find('.flag-item').width($(this).find('.flag-border').width()*.4);
                newpadding = 20 + $(this).find('.flag-item').outerWidth();
           }
           else{
                $(this).find('.flag-item').width($(this).find('.flag-border').width()*.3);
                newpadding = 50 + $(this).find('.flag-item').outerWidth();
           }
           $(this).find('.flag-text').css('padding-left', newpadding);
           var boxheight = $(this).find('.flag-border').outerHeight();
           $(this).find('.flag-item').css('top', 0-boxheight-3);/*3px is the border*/
       });
    }

    /* President Timeline Part */
    function addPadding(){
        if($(win).width()>992){
            $('.president-row').find('.right-president').each(function(){
                $(this).css('padding-top',$(this).prev().outerHeight()*.9);
            });
        }
    }
    function addRound(){
        var top;
        $('.round-on-border').each(function(){
            if($($(this).closest('.col-xs-12')[0]).hasClass('left-president')){
                var left = parseInt($($(this).closest('.left-president')[0]).css('padding-right'));
                $(this).css('left', left-$(this).width()/2 + 2);
                top = 0 - ($(this).parent().height()- $(this).parent().find('.president-photo').height()/2);
            }else{
                var right = parseInt($($(this).closest('.right-president')[0]).css('padding-left'),10);
                $(this).css('right', right + $(this).parent().find('.president-photo').outerWidth()-$(this).width()/2 + 2);
                top = $(this).parent().find('.president-photo').height()/2;
            }
               $(this).css('top',top);
        });
    }
        /*
            $('.president-row').each(function(index,item){
                $(item).find('.president-card').each(function(num, card){
                    $(card).css('padding-top',90+num*100);
                });
            });

        */
    /* Document Level */
    $(doc).ready(function(){
        countDean();
        addPadding();
        addRound()
    });
    $(win).resize(function(){
        countDean();
        addPadding();
        addRound()
    });

})(jQuery, window, document);