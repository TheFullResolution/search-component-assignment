# Bijenkorf Assignment

## General Information

Except for activating [Flow](https://flow.org/), no additional modifications were made to create react app setup. I used [Hygen](http://www.hygen.io/) to generate files, mostly because I wanted to test it - heard about on [Javascript podcast](https://devchat.tv/js-jabber/jsj-312-hygen-with-dotan-nahum) last week.

Following packages were included in a development of the exercises:

- [axios](https://github.com/axios/axios) - my default choice since fetch API doesn't work with Node

- [downshift](https://github.com/paypal/downshift) - primitives to build simple, flexible, WAI-ARIA compliant React autocomplete. Perfect for custom UI. 

- [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal) - used in Value component to prevent unnecessary setState calls

- [focus-visible](https://github.com/WICG/focus-visible) - polyfill for `:focus-visible`, allows to remove outline when using a mouse, but keeps it with keyboard

- [lodash.throttle](https://www.npmjs.com/package/lodash.throttle)

- [match-sorter](https://github.com/kentcdodds/match-sorter) - deterministic best-match sorting of an array in JavaScript

- [react-highlight-words](https://github.com/bvaughn/react-highlight-words)

- [react-transition-group](https://github.com/reactjs/react-transition-group) - animation

## Usage Notes

To review the assignment you can just run `yarn start` after installing all the dependencies.

All the components' logic is connected inside `App` component.

Folder components contain all the other components. The component responsible for state and fetching data is called `Value`.

## Assignment completion

exercise 1 - 100%

exercise 2 - 100%

exercise 3 ~ 80% - didn't find time to properly and thoroughly test all the methods, including API calls. Or to create integration test.

exercise 4 - although environment for Storybook is properly configured, at the moment only default views are prepared.


