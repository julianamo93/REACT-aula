import './App.css';
import ComponenteTeste from './componentes/ComponenteTeste';
import ComponenteExArrow from './componentes/ComponenteExArrow';
import Footer from './componentes/Footer';

function App(){

    const paragrafo ={
        color:'lightgreen',
        fontSize:'14px',
        margin:'50px'
    }

    return (
        <>
            <h1>AULA 03</h1>
            <p>Lorem ipsum <br/> dolor sit amet.</p>
            <h2 style={{fontSize:'18px',color:'rosybrown'}}>TITULO 02</h2>
            <p style={paragrafo}>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit.</p>

            <p className='exemplo01'>Lorem, ipsum dolor.</p>
            <ComponenteTeste></ComponenteTeste>
            <ComponenteExArrow></ComponenteExArrow>
            <Footer></Footer>
        </>
    )
}
export default App;
