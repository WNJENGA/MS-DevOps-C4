jQuery(document).ready(function () {
    // # ~ getElementById
    jQuery('button#submit').click(function () {
        jQuery(this).hide();
    });
    // . ~ getElementByClassName
    jQuery('button.no-submit').click(function () {
        jQuery(this).hide();
    });
    jQuery('p').click(function () {
        jQuery(this).hide();
    });
    // Use one element to reference others
    jQuery('button#submit').dblclick(function () {
        // Reference first element in a list of similarly tagged elements
        jQuery('p:first').css('font-size', 'large');
    });
    // Dynamic styling
    jQuery('button.no-submit').mouseenter(function () {
        // this keyword represents the current element defined above
        jQuery(this);
    });
});