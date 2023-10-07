import Nav from './pages/Nav/Nav'
import Home from './pages/Home'
import Announcements from './pages/Announcements'
import MyComment from './pages/MyComment'
import Comment from './pages/Comment'
import Donate from './pages/Donate'
import Help from './pages/Help'
import Events from './pages/Events'
import New from './pages/New'
import Public from './pages/Public'
import Polls from './pages/Polls'
import Vote from './pages/Vote'
import Results from './pages/Results'
import Login from './pages/Account/Login'
import Register from'./pages/Account/Register'
import Footer from './pages/Footer'
import Admin from './pages/Admin/Admin'
import CreateBlog from './pages/CreateBlog'
import Request from './pages/Admin/Request'
import Users from './pages/Admin/Users'
import EditUser from './pages/Admin/EditUser'
import EditVote from './pages/Admin/EditVote'
import CreateVote from './pages/Admin/CreateVote'
import AddEvents from './pages/Admin/AddEvents'
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/comment/:id" element={<Comment />} />
        <Route path="/mycomment/:id" element={<MyComment />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/help" element={<Help />} />
        <Route path="/events" element={<Events />} />
        <Route path="/new" element={<New />} />
        <Route path="/public" element={<Public />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/makevote/:id" element={<Vote />} />
        <Route path="/results" element={<Results />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addevents" element={<AddEvents />} />
        <Route path="/createblogs" element={<CreateBlog />} />
        <Route path="/proposals" element={<Request />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/votes/edit/:id" element={<EditVote />} />
        <Route path="/createvote" element={<CreateVote />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
