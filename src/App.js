import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ol className="navbar-nav mr-auto">
     <li className="nav-item active">
      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
     </li>
     <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
     </li>
     <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Something else here</a>
      </div>
     </li>
     <li className="nav-item">
      <a className="nav-link disabled" href="#">Disabled</a>
     </li>
     </ol>
     <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
     </form>
    </div>
   </nav>
  )
 }
 
 function MainContent() {
  return (
   <div>
    <h1 style={{color: "green"}}>MENU</h1>
    <ol>
     <li>Car 1</li>
     <li>Car 2</li>
     <li>Car 2</li>
     <li>Car 4</li>
    </ol>
   </div>
  )
 }
 
 function MyTable() {
  return (
   <table>
   <tr>
    <th>Name</th>
    <th>Last Name</th>
   </tr>
   <tr>
    <td>John</td>
    <td>Smith</td>
   </tr>
   <tr>
    <td>Elsa</td>
    <td>Jhonson</td>
   </tr>
   </table>
  )
 }
 
 const menu = (
  <nav>
   <Navbar />
   <MainContent />
   <h1 style={{color: "red"}}>Bob's Bistro</h1>
   <ul>
    <li>Menu</li>
    <li>About</li>
    <li>Contact</li>
   </ul>
   <MyTable />
  </nav>
 )
 
 const tableStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "8px",
  fontFamily: "Sans-Serif"
 }
 
 const TestResults = props => {
  return(
   <table>
    <tr>
     <th>Pass:</th>
     <th>Fail:</th>
     <th>Skip:</th>
     <th>Total:</th>
    </tr>
    <tr>
     <td style={{color: "green"}}>{props.pass}</td>
     <td style={{color: "red"}}>{props.fail}</td>
     <td style={{color: "orange"}}>{props.skip}</td>
     <td>{props.pass + props.fail + props.skip}</td>
    </tr>
   </table>
  )
 }
 
 const TesTitle = props => {
  let today = new Date().toISOString().slice(0, 10)
  return(
   <p>[{today}] - Sanity test execution - build:[{props.build}] Launcher:[{props.launcher}]</p>
  )
 }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TesTitle build="820014" launcher="47.8"/>
        <TestResults pass={10} fail={5} skip={1} />
      </header>
    </div>
  );
}

export default App;
