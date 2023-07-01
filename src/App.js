const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>XXXX</li>
        </ul>
        <nav>
          <p>Made by Anish</p>
        </nav>
      </section>
      <section className="main">
        <h1>ChatGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➢</div>
          </div>
          <p className="info">
            Chat GPT Clone Practice Project
          </p>
        </div>
      </section >
    </div>
  );
}

export default App;
