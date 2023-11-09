import CalendarComponent from "./components/calendar";
import TimeLine from './components/timeLine'
import Header from './components/header/header'
import React from "react";

function App() {


  return (
    <div className="container">
      <Header />
      <TimeLine/>
      <CalendarComponent />
    </div>
  );
}

export default App;
