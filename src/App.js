import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import data from './components/QuoteList.json'
import Card from './components/Cards/Card';

function App(Props) {
  return (
    <div className="App">
      <Header />
      {
             data.map((quote)=>{
              return <Card {...quote}/>
             })
      }
      <Footer />
      {/* <Button  buttonData="Jaiten"/> */}
    </div>
  );
}

export default App;
