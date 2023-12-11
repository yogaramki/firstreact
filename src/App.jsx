import React, { Component } from "react";
// import Lifecyccle from "./Component/Lifecyccle";
// import Movie from "./Component/movie";

// import Bootstrap from "./Component/BootstrapComp"
// import 'bootstrap/dist/css/bootstrap.min.css';

// import BootstrapComp from "./Component/BootstrapComp";
// import ProductComp from "./Component/ProductComp";
// import Naviex from "./Component/Common/Naviex";
// import AccordionParent from "./Component/AccordionParent";
import BirthFun from "./Component/FunctionCOMP/BirthFun";
import SampleFun from "./Component/FunctionCOMP/SampleFun";
import RenderFun from "./Component/FunctionCOMP/RenderFun";
import ReactFtch from "./Component/FunctionCOMP/ReactFtch";
import ReactForm from "./Component/FunctionCOMP/ReactForm";
import ReactHookForm from "./Component/FunctionCOMP/ReactHookForm";
import YupValidation from "./Component/FunctionCOMP/YupValidation";
import TodoList from "./Component/FunctionCOMP/TodoList";
// import Todoaxios from "./Component/FunctionCOMP/Todoaxios";
// import Header from "./Component/Ecommerce/Header";
// import Product from "./Component/Ecommerce/Product";
// import CartProvider from "./Component/Provider/CartProvider";
import CounterComp from "./Component/ReduxComp/CounterComp";
import { Provider } from "react-redux";
import { Store } from "./Component/ReduxComp/Redux/Store";
import HomeComp from "./Component/FunctionCOMP/HomeComp";
import Todocustom from "./Component/FunctionCOMP/Todocustom";
import HomeR from "./Component/FunctionCOMP/HomeR";
import ProductR from "./Component/FunctionCOMP/ProductR";
import AboutR from "./Component/FunctionCOMP/AboutR";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "./Component/FunctionCOMP/Contact";
class App extends Component {
  //   state={
  //     count:true,
  //     name:"yoga"
  //   }

  //   handleclick=()=>{
  //     this.setState({count:false})
  // }
  render() {
    return (
      <div>
        {/* <Naviex/> */}
        {/* <h1>Welcome to react</h1> */}
        {/* <Movie /> */}
        {/* <BootstrapComp/>  */}
        {/* <ProductComp/> */}
        {/* <h1>{this.state.count}</h1>
       <Lifecyccle value={this.state.count}  data={this.state.name}/>
       <button onClick={this.handleclick}>clickapp</button> */}

        {/* <AccordionParent /> */}
        {/* <SampleFun movieName={"JJX"}/>
        <SampleFun movieName={"JAPAN"}/> */}
        {/* <BirthFun /> */}
       {/* {this.state.count ? <RenderFun /> : null}
<button onClick={this.handleclick}>
Destroy 
</button> */}
{/* <ReactFtch /> */}
{/* <ReactForm /> */}
{/* <ReactHookForm />  */}
{/* <YupValidation /> */}
{/* <TodoList /> */}
{/* <Todoaxios /> */}
{/* <CartProvider>
<Header />
<Product />
</CartProvider> */}
{/* <Provider store={Store}>
<CounterComp  />
</Provider> */}
{/* <HomeComp />
<Todocustom /> */}
<h1>WELCOME</h1>

<BrowserRouter>
<ul>
  <li><Link to="/">  Home</Link></li>
  <li><Link to="/product">Product</Link></li>
  <li><Link to="/about/4">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>
<Routes>
  <Route path="/" element={< HomeR/>} />  
  <Route path="/product" element={<ProductR/>}/>
  <Route path="/about/:id" element={<AboutR />} />
<Route  path="/contact" element={<Contact/>} />


</Routes>
</BrowserRouter>
      </div>
    );
  }
}
export default App;
