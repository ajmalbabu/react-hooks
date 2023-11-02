A project to learn react hooks

## Available Scripts

To  run:

	- npm install
	- npm run

- hooks
	- Setup VSCode with this plugin => https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
	- Viswas => https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A
	- Hooks benefits:
		1. Classes do not minify well, 'this' keyword does not work well in class component
		2. There is no good way to address stateful components => Higher order components and render props addressed in harder to follow code - Read about these patterns above
		3. Without hooks complex code is needed and scattered around componentDidMount ComponentUpdate, componentWillComponent
		4. 16.8 higher and completely back-ward compatible
		5. Hooks should be at the top level (not inside loops, conditions. nested function)
		6. Call only from react functional components

	- useState
		1. To manage simple state of primite, objects & array, useReducer with useContext for complex state and redux to manage state outside of components
		2. Pass in previous state for consistency
		3. For objects/arrays, unlike in class components, the useState hook setter function does not merge the state. So you need to use the spread operator
	- useEffect
		1. updating DOM, setting up time, making API calls etc are done in life-cycle method
		2. Code related are put in different life-cycle methods, didMount, didUpdate, willMount etc.
		3. useEffect will replace all above inconsistencies
		4. useEffect can access state and props inside components without any additional codes
		5. useEffect if it is referring to a function, the parameter used in function may need to be used as dependency for useEffect to watch for changes, it is better to define such functions inside the useEffect so that such dependencies are clear in your head.
		6. If dependent parameter changes then useEffect works like componentDidUpdate and keeps being called hence if timers etc are set inside useEffect, multiple timers get set, so be careful what dependencies are
	- useReducer
		1. userReducer is a state management an alternative to useState useReducer is built using useState
		2. What is a reducer?
		1. similar to reduce functional methods takes two parameters, first one current-state and second value is an action and it returns two values new state & dispatcher after applying action
	- When to use userReducer vs useState?
		1. For primitive useState is best option Object array useReducer may be better suited
		2. If the number of state transitions is 1 or 2 useState, else useReducer as code can be kept together and multiple setState can be avoided as in DataFetchingWithUseReducer example
		3. State transition => such as loading, success, error etc. then use useReducer Business logic => If transition from old value to new value needs business logic or complex data transformation then reducer hook is better with localized code
		4. Local (useState) vs Global state (useReducer) => with useRedcuer only one dispatch method and that can update several state, in the other case each state needs to be passed around
	- useCallback
		1. Every component on screen get re-rendered (especially function gets re-created etc to restrict re-render to only changed component and function needs to re-render
		2. React.memo will help here - to some extent
		3. ParentComponent gets re-rendered when any button is clicked. New functions get created and since the function is re-created all child components get re-rendered wherever the function is passed. All five consol.log gets rendered on each click without useCallback and React.memo
		4. With only React.memo three statements get printed on each click because the function is still re-created with React.memo and useCallback only two statements get printed to represent the specific value that got changed, and the other function does not get passed around
		5. Read  below note when to and not use useCallback & useMemo effectively => https://kentcdodds.com/blog/usememo-and-usecallback
		6. customHooks Custom hook is alternative to HOC and render-props


- HoC converting to hooks  => https://dev.to/gethackteamfrom-higher-order-components-hoc-to-react-hooks-2bm9
- recompose library is not needed anymore with hooks and finctional component => https://github.com/acdlite/recompose#a-note-from-the-author-acdlite-oct-25-2018
- Higher order component and render props not needed anymore with hooks. https://www.robinwieruch.de/react-higher-order-components  &   https://www.robinwieruch.de/react-render-props



- https://scrimba.com/course/glearnreact
Ben Award => https://www.youtube.com/watch?v=9xhKH43llhU&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM
What are React Hooks? => https://www.robinwieruch.de/react-hooks
How to fetch data with React Hooks? => https://www.robinwieruch.de/react-hooks-fetch-data



Hooks library
-------------

- https://github.com/streamich/react-use - Highest starred hooks collection
- https://github.com/rehooks/awesome-react-hooks   - This has a catalogue section with all different hooks repos. and some of the link let you download and browse hooks,
- https://blog.logrocket.com/popular-react-hook-libraries/ - This is a good article on various hook libraries that is available below are two noteworthy ones from this article, also above awesome-react-hooks may be referring to below links in it
- https://nikgraf.github.io/react-hooks/  
- https://github.com/gragland/usehooks
- https://usehooks.com/
- https://beautifulinteractions.github.io/beautiful-react-hooks/
- https://github.com/alibaba/hooks - I have installed at /Users/admin/software/workspace/hooks


- Old versions

    // "@testing-library/jest-dom": "^4.2.4",
    // "@testing-library/react": "^9.3.2",
    // "@testing-library/user-event": "^7.1.2",
    // "axios": "^0.19.2",
    // "react": "^16.13.1",
    // "react-dom": "^16.13.1",
    // "react-scripts": "3.4.1"