This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


hooks 
	Setup VSCode with this plugin => https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
	Viswas => https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A
		Hooks benefits:
			1. Classes does not minify well, 'this' key word does not work well in class component
			2. There is no good way to address statefull component => Higher order compoennt and render props address in harder to follow code - Read about these patterns above
			3. Without hooks complex code is needed and scattered around componentDidMount, ComponentUpdate, componentWillComponent
			4. 16.8 higher and completely back-ward compatible
			5. Hooks should be at the top level (not inside loops, confitions. nested fucntion)
			6. Call only from react functional components
		useState
			1. To manage simple state of primite, objects & array, useReducer with useContext for complex state and redux to manage state outside of components
			2. Pass in previous state for consistency 
			3. For objects/array unlike in class component, useState hook settter function does not merge the state. So you need to use spread operator
		useEffect
			1. updating DOM, setting up time, making API calls etc are done in life-cycle method
			2. Code related are put in differnt lide-cyle method, didMount, didUpdate, willMount etc.
			3. useEffect will replace all above inconsistencies
			4. useEffect can access state and props inside component without any additional codes
			5. useEffect if is refering a functon, the parameter used in function may need to be used as dependecy for useEffect to watch for changes, it is better
			   to deine such funtions inside the useEffect so that such dependecies are clear in your head.
			6. If dependant parameter changes then useEffect works like componentDidUpdate and keeps kept called hence if timers etc are set inside useEffect, 
			   multiple timers gets set, so careful what dependencies are
		useReducer
			userReducer is a state managemeent an alternative to useState 
			useReducer is build using useState 
			what is a reducer?
				1. similar to reduce functional methods takes two parameters, first one current-state and second value is an action and it returns two values new state & dispatcher after applying action
			when to use userReducer vs useState?
				For primitive useState is best option
				Object array useReducer may be better suited
				If number of state transition is 1 or 2 useState, else useReducer as code can be kept togethor and multiple setState can be avoided as in DataFetchingWithUseReducer example
				State transition => such as loading, success, error etc. then use useReducer
				Business logic => If transition from old value to new value need business logic or complex data transformation then reducer hook is better with localized code
				Local (useState) vs Global state (useReducer) => with useRedcuer only one dispatch method and that can update several state, in the other case each state needs to be passed around
		useCallback
				Every component on screen get re-rendered (especially function gets re-created etc)
				to restrict re-render to only changed component and function needs to re-render
				React.memo will help here - to some extend
				1) ParentComponent gets re-rendered when any button is clicked. New functions gets created and since function is re-created all child components gets re-rendered whereever function is passed. All five consol.log gets rendered on each click without useCallback and React.memo
				2) With only React.memo three statements gets printed on each click because function is still re-created
				3) with React.memo and useCallback only two statements gets printed to represent the specific value that got changed, and other function does not gets passed around
				Read  below note when to and not use useCallback & useMemo effectively => https://kentcdodds.com/blog/usememo-and-usecallback
		customHooks
				Custom hook is alternative to HOC and render-props
				
				
HoC converting to hooks  => https://dev.to/gethackteam/from-higher-order-components-hoc-to-react-hooks-2bm9
recompose library is not needed anymore with hooks and finctional component => https://github.com/acdlite/recompose#a-note-from-the-author-acdlite-oct-25-2018
Higher order component and render props not needed anymore with hooks. https://www.robinwieruch.de/react-higher-order-components  &   https://www.robinwieruch.de/react-render-props



https://scrimba.com/course/glearnreact
Ben Award => https://www.youtube.com/watch?v=9xhKH43llhU&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM
What are React Hooks? => https://www.robinwieruch.de/react-hooks
How to fetch data with React Hooks? => https://www.robinwieruch.de/react-hooks-fetch-data



Hooks library
-------------

https://github.com/streamich/react-use - Highest starred hooks collection
https://github.com/rehooks/awesome-react-hooks   - This has a catalogue section with all differnt hooks repos. and some of the link let you download and browse hooks, 
https://blog.logrocket.com/popular-react-hook-libraries/ - This is a good article on various hook libraries that is available below are two noteworthy ones from this 
															article, also above awesome-react-hooks may be refering to below liks in it
https://nikgraf.github.io/react-hooks/  
https://github.com/gragland/usehooks
https://usehooks.com/
https://beautifulinteractions.github.io/beautiful-react-hooks/
https://github.com/alibaba/hooks - I have installed at /Users/admin/software/workspace/hooks


Old versions

    // "@testing-library/jest-dom": "^4.2.4",
    // "@testing-library/react": "^9.3.2",
    // "@testing-library/user-event": "^7.1.2",
    // "axios": "^0.19.2",
    // "react": "^16.13.1",
    // "react-dom": "^16.13.1",
    // "react-scripts": "3.4.1"
