import React from "react";
import AddBook from "./comps/NewBook";

function Home() {
  return (
    <div className='home'>
      <h2>“It is said that in some countries trees will grow, but will bear no fruit because there is no winter there.”<br></br>
      ― John Bunyan</h2>
      <AddBook />
    </div>
  )
}

export default Home;