// Adapted from mozilla to support multiple tablists on a single page
// (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)
window.addEventListener("DOMContentLoaded", function() {
  var tabLists = Array.from(document.querySelectorAll('[role="tablist"]'));
  tabLists.forEach(function(tabList) {
    var tabs = tabList.querySelectorAll('[role="tab"]'); // Add a click event handler to each tab

    handleMouseNavigation(tabs); // Enable arrow navigation between tabs in the tab list

    handleKeyboardNavigation(tabList, tabs);
  });
});

function handleMouseNavigation(tabs) {
  Array.from(tabs).forEach(function(tab) {
    return tab.addEventListener("click", function(e) {
      var target = e.target;
      var parent = target.parentNode;
      var grandparent = parent.parentNode; // Remove all current selected tabs

      Array.from(parent.querySelectorAll('[aria-selected="true"]')).forEach(function(t) {
        t.setAttribute("aria-selected", false);
        t.classList.remove("active");
      }); // Set this tab as selected

      target.setAttribute("aria-selected", true);
      target.classList.add("active"); // Hide all tab panels

      Array.from(grandparent.querySelectorAll('[role="tabpanel"]')).forEach(function(p) {
        return p.setAttribute("hidden", true);
      }); // Show the selected panel

      grandparent.parentNode
        .querySelector("#".concat(target.getAttribute("aria-controls")))
        .removeAttribute("hidden");
    });
  });
}

function handleKeyboardNavigation(tabList, tabs) {
  var tabFocus = 0;
  tabList.addEventListener("keydown", function(e) {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1);

      if (e.keyCode === 39) {
        tabFocus++; // If we're at the end, go to the start

        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        } // Move left
      } else if (e.keyCode === 37) {
        tabFocus--; // If we're at the start, move to the end

        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
}
