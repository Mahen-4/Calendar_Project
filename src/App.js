import CalendarComponent from "./components/calendar";
import TimeLine from './components/timeLine'
import Header from './components/header/header'
import React from "react";
import MobileBottomBar from "./components/footer/mobileBottomBar";

function App() {


  return (
    <div className="container">
      <Header />
      <TimeLine/>
      <CalendarComponent />
      <MobileBottomBar />
    </div>
  );
}

export default App;
