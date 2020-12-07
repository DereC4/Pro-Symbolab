var code = `window.onload = function(){
    if (typeof(SYSTEPS) != 'undefined') { SYSTEPS.subscribed = true }
    if (typeof(SOLUTIONS) != 'undefined') { SOLUTIONS.subscribed = true }
    if (typeof(SYMBOLAB) != 'undefined') { SYMBOLAB.params.subscribed = true }
    if (typeof(SYPRACTICE) != 'undefined') { SYPRACTICE.subscribed = true }
    isUserLoggedIn = function() { return true }
    if ($("#click-capture")) {
       
        $("#click-capture").addClass("click-capture-subscribed")
    }
    ig = function() {
        // check if dark mode style element is on the page
        if($("#invert-style").length > 0) {
            // replace the styling element with better styling
            var invertStyle = $("#invert-style")[0].innerHTML
            $("#invert-style")[0].remove()
            document.head.insertAdjacentHTML("beforeend",
                '<style type="text/css" id="invert-style">' +
                invertStyle +
                \`img,
                #HomeTopNav svg,
                button.btn.btn-large.btn-custom.search,
                button.verify-button,
                li#solutionsTopNav a span,
                span.bloggerIcon,
                a.show-hide-button.show-hide-plot.print-hide,
                a.stepsPracticeLink span,
                .m2u>li>a.active,
                .m3u>li>a.active,
                li a.nl-leftMenu span,
                .nl-feedback.nl-redText.print-hide span {
                    filter: invert(1);
                }

                img.open,
                img.close,
                ul.solution-examples li svg,
                a.nl-leftMenu.active span {
                    filter: invert(0);
                }

                button.btn.btn-large.btn-custom.search {
                    border: 1px solid black;
                }

                div#nl-subNav {
                    background-color: rgba(18, 183, 243, 1);
                }

                a.nl-topMenu span,
                a.nl-topMenu.active .nl-topSubMenu span,
                #nl-subNav ul li .nl-topSubMenu a:hover span {
                    color: #000000;
                }

                a.nl-topMenu.active span,
                #nl-subNav ul li a:hover span {
                    color: #ffffff;
                }

                @-moz-document url-prefix() {
                    body {
                        background-color: #111111;
                    }
                }</style>\`)
        }
    };
    ig()
    var xx = yy;
    yy = function() 
	{
        xx()
        ig()
    }
}`
document.documentElement.setAttribute("onreset", code)
document.documentElement.dispatchEvent(new CustomEvent("reset"))
document.documentElement.removeAttribute("onreset")