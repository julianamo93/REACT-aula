import './App.css';
import ComponenteTeste02 from './ComponenteTeste02';
import ComponenteTeste03 from './ComponeteTeste03';

function App(){
    const paragrafo = {
        color:'mediumpurple',
        fontSize:'2em',
        margin:'50px'
    }

    return (
      <>
      <ComponenteTeste02></ComponenteTeste02>

      <h1>Hello World</h1>

      <h2 style={{fontSize:'2em', color:'lightcoral'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veritatis at, praesentium et expedita tempore eius mollitia ad nisi</h2>
      
      <ComponenteTeste03/>
      <p style = {paragrafo}>Lorem, ipsum</p>
      <p>lorem ipsum, lorem</p>
      <p className='exemplo'>Lorem ipsum dolor sit </p>
      </>
    )
}

export default App;