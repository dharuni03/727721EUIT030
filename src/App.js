// // // src/App.js
// // import React from 'react';
// // import ProductDisplay from './ProductDisplay';

// // function App() {
// //     return (
// //         <div className="App">
// //             {/* <h1>Ebay</h1> */}
// //             <ProductDisplay />
// //         </div>
// //     );
// // }

// // export default App;

// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProductDisplay from './ProductDisplay';
// import ProductDetail from './ProductDetail';

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 {/* <h1>Product Display</h1> */}
//                 <Routes>
//                     <Route path="/" element={<ProductDisplay />} />
//                     <Route path="/product/:id" element={<ProductDetail />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDisplay from './ProductDisplay';
import ProductDetail from './ProductDetail';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Product Display</h1>
                <Routes>
                    <Route path="/" element={<ProductDisplay />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
