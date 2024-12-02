import React from 'react';
import BlogList from './components/BlogList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container my-4">
      <BlogList />
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item active">
            <a className="page-link" href="#">1</a>
          </li>&nbsp;&nbsp;&nbsp;
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>&nbsp;&nbsp;&nbsp;
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item space-next">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
