import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EventPage from "./Pages/EventPage/EventPage";
import TicketsPage from "./Pages/TicketsPage/TicketsPage";
import CreateEvent from "./Pages/CreateEvent/CreateEvent";
import MyEventsPage from "./Pages/MyEventsPage/MyEventsPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/event/:userID/:eventId" element={<EventPage />} />
          <Route path="tickets/:userID/:eventId" element={<TicketsPage />} />
          <Route path="createEvent/:userID" element={<CreateEvent />} />
          <Route path="myEventsPage/:userID" element={<MyEventsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
