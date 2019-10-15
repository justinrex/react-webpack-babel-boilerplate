import React from 'react';
import { render } from 'react-dom';
import './style.css'

const App = () => (
  <div>
    Hello Hello
    <div className="image" />
  </div>
)

render(
    <App />,
    document.getElementById('root')
)