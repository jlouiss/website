import './App.scss';

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col text-center">
          <h1 className="title">
            <span className="hi">Hi,{'\u00A0'}</span><span className="im">I'm{'\u00A0'}</span><span className="jean">Jean.</span>
          </h1>
          <p className="subtitle"><a href="https://github.com/jlouiss/website" rel="noreferrer">Nice to meet you. :)</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
