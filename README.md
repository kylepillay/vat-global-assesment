# Vat Global Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn generate-sass-types`
### `yarn watch-sass-types`
### `yarn validate-sass-types`

This project uses SASS as well as TypeScript. In order to keep our styles strongly typed we use scripts to generate types as well as validate them.

## Redux and Redux Saga

We use Redux for all state management and Redux Saga to handle Async operations in conjunction with state management.

## Typescript and ESLint

Typescript is used throughout the project, but that doesn't negate the need for eslint. ESLint is still used in conjunction with TypeScript.

## Given More Time

Given more time I would have implemented unit tests extensively as there are a large number of areas where unit tests are needed. I would have also implemented a more comprehensive theming system.

Given the instruction to not use third party libraries, there would have been a number of places, for example forms, where I would have used a 3rd party library like react-hook-form.