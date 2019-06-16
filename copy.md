# A library for styling web interfaces with a focus on predictability and robustness
> Immutable styles removes side effects often tied to CSS allowing unexpected UI bugs to be caught ahead of time

## Deterministic

Every unique UI variation and state is handled explicitly allowing you to see the full picture, rather than having to piece together often disjointed class combinations and reason with specificity wars or cascading conflicts.

This makes code and all its outcomes easier to understand and its behaviour predictable. A ruleset targeting a HTML element will always produce the same result.

## Composition vs Overrides

CSS styles are shared using composition rather than via overrides, which makes reuse more robust whilst encouraging better designed code. Small modular styles can be composed to achieve complex UIs.

The laborious task of orchestrating overrides and reasoning with their side effects; determining what override is intentional or not is offloaded to a compiler.

## No Side Effects

Side effects in CSS describe styles that are neither expected or desired. These side effects are usually a concequence of: selectors clashing with other selectors, selectors targeting unwanted elements, or elements inheriting undesirable styles.

Immutability removes these side effects which puts an end to unexpected UI bugs during development, or worse reported by users.

## Instant Feedback Loop

A friendly compiler with beatiful error messages catches conflicting styles, whilst enforcing design patterns aimed at making CSS more resiliant.

Code changes and large scale refactoring is a breeze since the compiler catches any unexpected outcomes. Whether overrides occur within the same or another file, among equal or nested selectors, or even among different screen-sizes the compiler catches them all before they reach a browser.

<!-- Examples -->

## Simple Example

Styles are expressed using the same data structure as the DOM via JSX.

A unified data structure common between markup and presentation helps reduce context switching between CSS selectors and their target HTML.

## Mobile Friendly

CSS features such as media queries are exposed using a familiar and intuitive API.

This example optimizes navigation links for different screen sizes. On tablet-sized devices the text size is increased (improving readbility) whilst the clickable target area is enlarged (to be forgiving to thumbs).

Since immutable styles is just JavaScript we can share common values using variables such as the tablet and desktop breakpoints.

## Composition

Common styles can be reused using the createMixin helper function that creates immutable mixins.

This example mixin holds commons styles shared among all buttons. Each button variant can use the mixin like a template and subsequently add its own unique styles such as background and color.

Immutable mixins offer the same guarantee and protection against side effects.

## Interactions

User interactions are expressed in the same way as normal non-interactive styles.

The tooltip in this example reveals additional information to the user when they hover over the icon and its prompt.

All CSS pseudo classes such as :hover and pseudo elements such as ::before are supported in immutable styles.

## UI States

Immutable styles is symbiotic with other libraries and existing best practices.

This example uses the darken utility function from polished to change the form background during its loading state. Since states are handled explicitly it becomes easy to identify every state the form has and how it looks in each state.

This example also uses the BEM naming convension to make the forms CSS classname more meaningful.

<!-- Footer -->

v1.0.51 MIT License © Callum Hart 2018 - Present
No CSS rules were overriden whilst building this site ❤️