import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import logo from '../../logo.svg';
import '../../App.css';

const LearnReact = () => {
  useEffect(() => {
    console.log('LearnReact comp Re-renders/Update')
  })
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
    </header>
   
    
  </div>

    
  )
}

export default LearnReact

LearnReact.propTypes = {
  homeLink: PropTypes.string,
}
