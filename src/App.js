 import React from 'react';

 import {Brand,CTA,Navbar} from './components';
 import {Footer, Blog, Possibility, Features, DryClean , Header} from './containers';
 
 const App = () => {
   return (
     <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <DryClean/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/> 
     </div>
   )
 }
 
 export default App