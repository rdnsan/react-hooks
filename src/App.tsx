import CustomHookComponent from './components/CustomHookComponent';
import UseContextComponent from './components/UseContextComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import UseStateComponent from './components/UseStateComponent';
import EvenMoreReactComponent from './components/EvenMoreReactComponent';

const App = () => {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <hr />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <hr />
      <h1>useContext</h1>
      <UseContextComponent />
      <hr />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <hr />
      <h1>useRef</h1>
      <UseRefComponent />
      <hr />
      <h1>Custom Hooks & useMemo</h1>
      <CustomHookComponent />
      <hr />
      <h1>Even more React component TS stuff</h1>
      <EvenMoreReactComponent />
    </div>
  );
};

export default App;
