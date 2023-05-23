import React from "react"

const TestDetails = props => {
  let today = new Date().toISOString().slice(0, 10)
  return(
    <div>
      <table className="App-table">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {props.test_name}
        </a>
        <p>{today}</p>
        <p>build: {props.build}</p>
        <p>Launcher: {props.launcher}</p>
        <tr>
          <td>Pass:</td>
          <td style={{color: "green"}}>{props.pass}</td>
        </tr>
        <tr>
          <td>Fail:</td>
          <td style={{color: "red"}}>{props.fail}</td>
        </tr>
        <tr>
          <td>Skip:</td>
          <td style={{color: "orange"}}>{props.skip}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{props.pass + props.fail + props.skip}</td>
        </tr>
      </table>
    </div>
  )
  }
  
  function AppContent() {
    return (
      <content className="App-content">
        <img src="stability.png" alt="stability" />
        <TestDetails test_name="Sanity" build="820014" launcher="47.8" pass={10} fail={5} skip={1} />
        <TestDetails test_name="PreATP" build="821245" launcher="54.9" pass={22} fail={1} skip={4} />
      </content>
    )
  }

  export default AppContent