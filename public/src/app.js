/* eslint import/unambiguous: 0 */

(function(window, document) {
    var layout = document.getElementById('layout'),
        menu = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        content = document.getElementById('main');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for (; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function(e) {
        toggleAll(e);
    };

    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };
})(this, this.document);

// init Isotope
var iso = new Isotope('.grid', {
    itemSelector: '.l-box',
    layoutMode: 'fitRows'
});

// bind filter button click
var filtersElem = document.querySelector('.pure-button-group');
filtersElem.addEventListener('click', function(event) {
    // only work with buttons
    if (!matchesSelector(event.target, 'button')) {
        console.log(event.target);
        return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.pure-button-group');
for (var i = 0, len = buttonGroups.length; i < len; i++) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener('click', function(event) {
        // only work with buttons
        if (!matchesSelector(event.target, 'button')) {
            console.log(event.target);
            return;
        }
        buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
        event.target.classList.add('is-checked');
    });
}
