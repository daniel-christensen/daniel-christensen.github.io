function loadContent(filePath, tabName) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
 
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Load content
            var contentElement = document.getElementById('content');
            contentElement.innerHTML = xhr.responseText;     
        }
    };
    xhr.send();

    resetNavbarClasses(tabName);
}

// Upon every nav bar click, reset classes and add the focus/selected class to the one passed via the fucntion call.
function resetNavbarClasses(tabName) {
    var navProjectsElement = document.getElementById('nav-projects');
    var navTechElement = document.getElementById('nav-tech');
    //var navExperienceElement = document.getElementById('nav-experience');
    //var navEducationElement = document.getElementById('nav-education');

    navProjectsElement.className = 'item-container';
    navTechElement.className = 'item-container';
    //navExperienceElement.className = 'item-container';
    //navEducationElement.className = 'item-container';

    switch (tabName) {
        case 'nav-projects':
            navProjectsElement.classList.add('item-container-selected');
            break;
        case 'nav-tech':
            navTechElement.classList.add('item-container-selected');
            break;
        case 'nav-experience':
            //navExperienceElement.classList.add('item-container-selected');
            break;
        case 'nav-education':
            //navEducationElement.classList.add('item-container-selected');
            break;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadContent('pages/projects.html', 'nav-projects');
});