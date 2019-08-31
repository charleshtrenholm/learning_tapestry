import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Edit from './components/Edit/Edit';
import EditTable from './components/EditTable/EditTable';

function App() {
  return (
    <Router>
      <Route exact path="/" component={EditTable} />
      <Route path="/e/:id" component={Edit} />
    </Router>
  );
}

export default App;
