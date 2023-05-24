import React from "react"

export default function AppFooter() {
	return (
		<header className="App-footer">
			<div className="jenkins-footer">
			<img src="jenkins.png" alt="react_logo" />
				<a className="App-link" href="http://192.168.153.11:8080/" target="_blank" rel="noopener noreferrer">
					Jenkins pipelines
				</a>
			</div>
			<div className="confluence-footer">
				<img src="confluence.png" alt="react_logo" />
				<a className="App-link" href="https://oregannetworks.atlassian.net/wiki/spaces/MA/pages/2304802857/Oregan+QA+Automation+Framework" target="_blank" rel="noopener noreferrer">
					Confluence documentation
				</a>
			</div>
		</header>
	)
}