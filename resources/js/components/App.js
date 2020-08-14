import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

// function Example() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card">
//                         <div className="card-header">React Component</div>

//                         <div className="card-body">I'm an react component!</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );y
if (document.getElementById('root')) {
    ReactDOM.render(<Navbar />, document.getElementById('root'));
}
