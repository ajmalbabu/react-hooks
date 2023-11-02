import React from 'react';
import './App.css';
import Form1 from './custom-hook/Form1';
import Form1WithHook from './custom-hook/Form1WithHook';

// import ClassCounter from './use-state/ClassBasedCounter';
// import { HookCounter } from './use-state/UseStatePrimitiveHookCounter';
// import HookCounterWithPrevState from './use-state/UseStateHookCounterWithPrevState';
// import HookObjectCounter from './use-state/UseStateHookObjectCounter';
// import HookArrayCounter from './use-state/UseStateHookArrayCounter';
// import ClassBasedLifeCycle from './use-effect/ClassBasedLifecycle';
// import UseEffectHookLifeCycle from './use-effect/UseEffectHookLifeCycle';
// import UseEffectHookMouse from './use-effect/UseEffectHookMouse';
// import MouseContainer from './use-effect/MouseContainer';
// import UseEffectDataFetching from './use-effect/UseEffectDataFetching';
import UseEffectSiingleDataFetchOnTextChange from './use-effect/UseEffectSiingleDataFetchOnTextChange';
// import UseEffectSiingleDataFetchOnButtonClick from './use-effect/UseEffectSiingleDataFetchOnButtonClick';
// import ComponentC from './use-context/ComponentC';
// import UseReducerSimpleCounter1 from './use-reducer/UseReducerSimpleCounter1';
// import UseReducerComplexCounter2 from './use-reducer/UseReducerComplexCounter2';
// import UseReducerMulitObjectCounter3 from './use-reducer/UseReducerMulitObjectCounter3';
//  for use-reducer-with-context , refer to use-reducer-with-context dependecy.pdf, create a global state at App.js and manipulated by A, D & F component 
// import ComponentA from './use-reducer-with-context/ComponentA';
// import ComponentC from './use-reducer-with-context/ComponentC';
// import ComponentB from './use-reducer-with-context/ComponentB';
// import DataFetchingWithUseState from './use-reducer/DataFetchingWithUseState';
// import DataFetchingWithUseReducer from './use-reducer/DataFetchingWithUseReducer';
// import UseCallbackParentComponent from './use-callback/UseCallbackParentComponent';
// import UseMemoCouter from './use-memo/UseMemoCouter';
// import FocusInput from './use-ref/FocusInput';
// import ClassTimer from './use-ref/ClassTimer';
// import UseRefTimer from './use-ref/UseRefTimer';

// import DocTitle1 from './custom-hook/DocTitle1';
// import DocTitle2 from './custom-hook/DocTitle2';

// import Counter1 from './custom-hook/Counter1';
// import Counter2 from './custom-hook/Counter2';


// for use-context example
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// for use-reducer-with-context  example
// import { initialState } from './use-reducer/UseReducerSimpleCounter1'
// import { reducer } from './use-reducer/UseReducerSimpleCounter1'
// export const CountContext = React.createContext()


function App() {

  // for use-reducer-with-context example
  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <HookCounterWithPrevState />
      <HookObjectCounter />
      <HookArrayCounter />
      <ClassBasedLifeCycle/>
      <UseEffectHookLifeCycle/>
      <UseEffectHookMouse name="From-Main-App" />
      <MouseContainer />
      <UseEffectDataFetching /> */}
      <UseEffectSiingleDataFetchOnTextChange />
      {/* <UseEffectSiingleDataFetchOnButtonClick /> */}

      {/* for use-context example
      <UserContext.Provider value={'TestUser'} >
        <ChannelContext.Provider value={'Channel1'} >
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>Î */}

      {/* <UseReducerSimpleCounter1 /> */}
      {/* <UseReducerComplexCounter2 /> */}
      {/* <UseReducerMulitObjectCounter3 /> */}

      {/* For use-reducer-with-context example */}
      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <div>Count - {count} </div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFetchingWithUseState /> */}
      {/* <DataFetchingWithUseReducer /> */}

      {/* use-callback */}
      {/* <UseCallbackParentComponent /> */}
      {/* <UseMemoCouter /> */}
      {/* <FocusInput />
      <ClassTimer />
      <UseRefTimer /> */}
      {/* <DocTitle1 />
      <DocTitle2 /> */}

      {/* <Counter1 />
      <Counter2 /> */}

      <Form1 />
      <Form1WithHook />

    </div>
  );
}

export default App;
