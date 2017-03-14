$(function() {

    $(document).bind('keydown', 'ctrl+;', function () {
        toggleHtmlClass('has-grid-overlay-enabled');
    });

    function toggleHtmlClass(className) {
        var activeClasses = JSON.parse(localStorage.getItem('activeClasses'));
        if (!activeClasses) {
            activeClasses = {}
        }
        $('html').toggleClass(className);
        activeClasses[className] = $('html').hasClass(className);
        localStorage.setItem('activeClasses', JSON.stringify(activeClasses));
    }

    var activeClasses = JSON.parse(localStorage.getItem('activeClasses'));
    $.each(activeClasses, function (className, value) {
        if (value) {
            $('html').addClass(className);
        }
    });
});