import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Events from "./pages/Events"
import BookTickets from "./pages/BookTickets";
import Header from "./MyComponents/Header";
 (

    <>
      <Router>
      <Header/>
        <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/book-tickets" element={<BookTickets />}></Route>
          
        </Routes>
      </Router>


    </>
  );



