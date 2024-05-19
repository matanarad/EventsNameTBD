import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EventPage from "./Pages/EventPage/EventPage";
import TicketsPage from "./Pages/TicketsPage/TicketsPage";
import CreateEvent from "./Pages/CreateEvent/CreateEvent";
import OwnerPage from "./Pages/OwnerPage/OwnerPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/event/:eventId" element={<EventPage />} />
          <Route path="tickets/:eventId" element={<TicketsPage />} />
          <Route path="createEvent/:ownerId" element={<CreateEvent />} />
          <Route path="ownerPage/:ownerId" element={<OwnerPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
