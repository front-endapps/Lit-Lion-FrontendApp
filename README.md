

I created a frontend application using the Lit framework, the web components library from the mentioned repo - Lion in the open-wc development environment.
It consists of the following components:
- component-header
- main-section
- footer-component

The header component contains a Sign In button that opens a modal, there is located a form with the user's details: username, email, password, the sign in button and the sign out button.

The main-section component includes a welcome message centered in the middle of the page.

The footer component is located at the bottom of the page.

To test the functionality, I created the test file with SignInModal.js, I use the @open-wc/testing testing framework. 
The code contains a series of tests to verify that SignInModal behaves correctly when it's used.


 
## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

To get started:

```bash
npm init @open-wc
# requires node 10 & npm 6 or higher
```

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project
- `format` fixes linting and formatting errors

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
