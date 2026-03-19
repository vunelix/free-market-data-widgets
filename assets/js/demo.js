document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var buttons = document.querySelectorAll('.theme-btn');

    function applyTheme(mode) {
        body.setAttribute('data-page-theme', mode);
        buttons.forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.setTheme === mode);
        });
    }

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            applyTheme(btn.dataset.setTheme);
        });
    });
});
