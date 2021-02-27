import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={style.success}>Success</h1>
     <Greet/>  */}
     {/* <Welcome/>
     <NameList/>
     <Stylesheet primary={true}/>
     <Inline/>
    <Form/>
    <LifecycleA/>
    <FragmentDemo/>
    <Table/>
    <ParentComp/>
    <RefsDemo/>
    <FocusInput/>
    <FRParentInput/>
    <PortalDemo/>
    <ErrorBoundary>
    <Hero heroName="Batman"/>
    <Hero heroName="Superman"/>
    </ErrorBoundary>
    <ClickCounter/>
    <HoverCounter/>
    <PostList/>*/}
    <PostForm/>
     </div> 
       );
}

export default App;
 