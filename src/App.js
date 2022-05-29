
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import AllReviews from './Pages/AllReviews/AllReviews';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Blogs/Blogs';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageProduct" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
        
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='allreviews' element={<AllReviews></AllReviews>}></Route>
        <Route path='blog' element={<Blogs></Blogs>}></Route>
        <Route path='blog/:id' element={<BlogDetail></BlogDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
