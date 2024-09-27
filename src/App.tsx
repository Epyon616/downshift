import { Email } from 'react-obfuscate-email';
import './App.css'


function App() {
  return (
    <>
      <div className='header hazard-background'>&nbsp;</div>
      <div className="content">
        <div className="logo">
          <span data-text="DOWN"></span>
          <span data-text="SHIFT"></span>
        </div>
        <div className="code-text">
          <h2>The home of full stack developer Lee Richmond</h2>
          <p>My website is currently undergoing some exciting changes, but don't worry - it will be back online very soon!</p> 
          <p>Thanks for your patience and stay tuned for updates!</p>
          <p>In the meantime if you would like to discuss a project with me drop me an <Email email="lee@downshift.io" subject="Enquiery from your portfolio site">email</Email></p>
        </div>
      </div>
    </>
  )
}

export default App
