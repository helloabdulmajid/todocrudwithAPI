import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Edit from "./components/employee/Edit";
import View from "./components/employee/View";


function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>} >
    <Route index element={<Home/>} />


    <Route path="signup" element={<Signup/>} />
    <Route path="login" element={<Login/>} />
    <Route path="/employee/edit/:id" element={<Edit/>}/>
    <Route path="/employee/view/:id" element={<View/>}/>


  </Route>

</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
