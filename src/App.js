import './App.css';
import Header from './components/Header.js'

function App() {
  return (
    <div className="App">
      <Header />
      <div class="arena-liveblog" data-publisher="testnetlify" data-event="mkn7" data-version="2"></div>
    </div>
  );
}

export default App;
