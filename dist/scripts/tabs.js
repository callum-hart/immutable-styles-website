// Adapted from mozilla to support multiple tablists on a single page
// (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)

window.addEventListener('DOMContentLoaded', () => {
  const tabLists = document.querySelectorAll('[role="tablist"]');

  tabLists.forEach(tabList => {
    const tabs = tabList.querySelectorAll('[role="tab"]');

    // Add a click event handler to each tab
    handleMouseNavigation(tabs);

    // Enable arrow navigation between tabs in the tab list
    handleKeyboardNavigation(tabList, tabs);
  });
});

function handleMouseNavigation(tabs) {
  tabs.forEach(tab =>
    tab.addEventListener('click', e => {
      const target = e.target;
      const parent = target.parentNode;
      const grandparent = parent.parentNode;

      // Remove all current selected tabs
      parent
        .querySelectorAll('[aria-selected="true"]')
        .forEach(t => {
          t.setAttribute('aria-selected', false);
          t.classList.remove('active');
        });

      // Set this tab as selected
      target.setAttribute('aria-selected', true);
      target.classList.add('active');

      // Hide all tab panels
      grandparent
        .querySelectorAll('[role="tabpanel"]')
        .forEach(p => p.setAttribute('hidden', true));

      // Show the selected panel
      grandparent.parentNode
        .querySelector(`#${target.getAttribute("aria-controls")}`)
        .removeAttribute('hidden');
    })
  );
}

function handleKeyboardNavigation(tabList, tabs) {
  let tabFocus = 0;

  tabList.addEventListener('keydown', e => {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute('tabindex', -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === 37) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute('tabindex', 0);
      tabs[tabFocus].focus();
    }
  });
}
