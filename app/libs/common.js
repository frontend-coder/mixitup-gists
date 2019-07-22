$(document).ready(function() {



    // Start mixitup
    $('#portfolio').mixItUp({
     selectors: {
       filter: '.filter',
       sort: '.sort'
     }
    });

   var groupsthree = {};
    $('.port_link').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
        if (!groupsthree[id]) {
            groupsthree[id] = [];
        }
        groupsthree[id].push(this);
    });
    $.each(groupsthree, function() {
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            tClose: 'Закрыть(Esc)',
            fixedContentPos: false,
            fixedBgPos: false,
            closeBtnInside: true,
            closeMarkup: '<button title="%title%" class="mfp-close" style="position: absolute; top: 35px; right: 5px"><img src="../img/shut-down.png" width="24" height="24"/></button>',
            gallery: {
                enabled: true,
                tPrev: 'Вперед (левая стрелка key)', // Alt text on left arrow
                tNext: 'Назад (правая стрелка key)', // Alt text on right arrow
                tCounter: '%curr% из %total%', // Markup for "1 of 7" counter
                // arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow custom-mfp-arrow-%dir%"><i class="fa fa-angle-%dir% fa-4x"></i></button>',
            }
        })
    });




 // Start mixitup
    $('#portfolio_two').mixItUp({
     selectors: {
       filter: '.filter1',
       sort: '.sort1'
     }
    });


   var groupsOne = {};
    $('.port_link_two').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
        if (!groupsOne[id]) {
            groupsOne[id] = [];
        }
        groupsOne[id].push(this);
    });
    $.each(groupsOne, function() {
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            tClose: 'Закрыть(Esc)',
            fixedContentPos: false,
            fixedBgPos: false,
            closeBtnInside: true,
            closeMarkup: '<button title="%title%" class="mfp-close" style="position: absolute; top: 35px; right: 5px"><img src="../img/shut-down.png" width="24" height="24"/></button>',
            gallery: {
                enabled: true,
                tPrev: 'Вперед (левая стрелка key)', // Alt text on left arrow
                tNext: 'Назад (правая стрелка key)', // Alt text on right arrow
                tCounter: '%curr% из %total%', // Markup for "1 of 7" counter
                // arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow custom-mfp-arrow-%dir%"><i class="fa fa-angle-%dir% fa-4x"></i></button>',
            }
        })
    });



 // Start mixitup
    $('#portfolio_tree').mixItUp({
load                      : {
filter                    : '.photoshop3'
    },
selectors                 : {
filter                    : '.filter3',
sort                      : '.sort3'
     },
animation                 : {
//      effects           : 'fade translateY(-100px)',
//      easing            : 'ease-in-out',
duration                  : 700,
//effects                 : 'rotateY(-25deg)',
//perspectiveDistance     : '2000px',
//perspectiveOrigin       : '100% 0',
//applyPerspective        : true, //Перспектива при анимации
effects                   : 'fade translateX(100%)',
reverseOut                : true,
nudge                     : false, // Disable nudging to create a carousel-like effect
// animateResizeContainer : false,
animateResizeTargets      : true,
clampHeight               : true
}
});




 // Start mixitup
    $('#portfolio_foure').mixItUp({
// load                      : {
// filter                    : '.photoshop4'
//     },
selectors                 : {
filter                    : '.filter4',
sort                      : '.sort4'
     },
 animation                 : {
effects           : 'fade translateY(-100px)',
easing            : 'ease-in-out',
duration                  : 1700,
// //effects                 : 'rotateY(-25deg)',
// //perspectiveDistance     : '2000px',
// //perspectiveOrigin       : '100% 0',
// //applyPerspective        : true, //Перспектива при анимации
// effects                   : 'fade translateX(100%)',
// reverseOut                : true,
// nudge                     : false, // Disable nudging to create a carousel-like effect
animateResizeContainer : false,
// animateResizeTargets      : true,
// clampHeight               : true
 }
});




   var groupsFoure = {};
    $('.port_link_foure').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
        if (!groupsFoure[id]) {
            groupsFoure[id] = [];
        }
        groupsFoure[id].push(this);
    });
    $.each(groupsFoure, function() {
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            tClose: 'Закрыть(Esc)',
            fixedContentPos: false,
            fixedBgPos: false,
            closeBtnInside: true,
            closeMarkup: '<button title="%title%" class="mfp-close" style="position: absolute; top: 35px; right: 5px"><img src="../img/shut-down.png" width="24" height="24"/></button>',
            gallery: {
                enabled: true,
                tPrev: 'Вперед (левая стрелка key)', // Alt text on left arrow
                tNext: 'Назад (правая стрелка key)', // Alt text on right arrow
                tCounter: '%curr% из %total%', // Markup for "1 of 7" counter
                // arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow custom-mfp-arrow-%dir%"><i class="fa fa-angle-%dir% fa-4x"></i></button>',
            }
        })
    });













});
//castom code

