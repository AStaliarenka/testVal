// $(window).resize(function(event) {
//     adaptive_function();
// });
// function adaptive_header(w, h) {
//     var headerMenu = $('.header-menu');
//     var headerContacts = $('.header-contacts');
//     if (w < 767) {
//         if(!headerContacts.hasClass('done')) {
//             headerContacts.addClass('done'.appendTo(headerMenu));
//         } else {
//             if (headerContacts.hasClass('done')) {
//                 headerContacts.removeClass('done').appendTo(headerMenu);
//             }
//         }
//     }
// }
// function adaptive_function() {
//     var w = $(window).outerWidth();
//     var h = $(window).outerHeight();
//     adaptive_header(w, h);
// }
// adaptive_function();

//---------------------------
function adaptiveHeader(w, h, selectorFrom, selectorTo) {
    const A = document.querySelector(selectorFrom);
    const B = document.querySelector(selectorTo);

    if (w < breakpoint) {
        if (!B.classList.contains('done')) {
            B.classList.add('done');
            A.appendChild(B);
        } else if (B.classList.contains('done')) {
            B.classList.remove('done');
        }
    }
}

function adaptive(selectorFrom, selectorTo, breakpoint) {
    let w = window.outerWidth;
    let h = window.outerHeight;
    adaptiveHeader(w, h, breakpoint, selectorFrom, selectorTo);
}

window.addEventListener('resize', adaptiveFunction());

adaptive('.header__row', '.autorization__row', 768);