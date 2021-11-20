import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/login">Login</Link>
          <br></br>
          <Link to="/join">Join</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
