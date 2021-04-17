import React from 'react';
import MainPage from './pages/MainPage/MainPage.components';

import './App.scss';



// function App() {
//   return (
//     <div className="App">
//         <MainPage />   
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <MainPage />
    );
  }
}

export default App;
