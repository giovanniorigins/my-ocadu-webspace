// wait for DOM to load
document.addEventListener("DOMContentLoaded", function (event) {
    var links = document.getElementsByClassName('nav-item');

    function smoothScrolling(target) {
        var scrollContainer = target;
        do {
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);

        var targetY = 0;
        do {
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);

        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }

    function scroll(container, offset, targetOffset, iteration) {
        iteration++;
        if (iteration > 30) return;
        container.scrollTop = offset + (targetOffset - offset - 95) / 30 * iteration;
        setTimeout(function () {
            scroll(container, offset, targetOffset, iteration);
        }, 20);
    }

    for (var index = 0; index < links.length; index++) {
        links[index].addEventListener('click', function (event) {
            event.preventDefault();
            smoothScrolling(document.getElementById(event.target.hash.substr(1)));
        }, false)
    }

});