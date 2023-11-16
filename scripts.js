(function () {
    // Yearbooks: Menu
    $('.collection-menu-item').on('click', function () {
        $('.collection-menu-item').removeClass('active');
        $(this).addClass('active');
        $('.collection').removeClass('active');
        $($(this).data('collection')).addClass('active');
    });
})();