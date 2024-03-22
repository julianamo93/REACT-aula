
import logo from '../assets/logo.png'; //IMPORTANDO O LOGO


const Header = () =>{
    return(

        <header className='bg-blue-500 text-white p-4'>
            <div className='container mx-auto flex justify-between items-center '>
            <img src={logo} alt="LOGO DA CLINICA" className='h-14'/>
            <h1 className='text-lg'>CLÍNICA DA MENTE</h1>
            <nav>
                <ul className='flex gap-4'>
                    <li><a href='#home' className='hover:text-red-900'>INÍCIO</a></li>
                    <li><a href='#sobre' className='hover:text-red-900'>SOBRE</a></li>
                    <li><a href='#servicos' className='hover:text-red-900'>SERVIÇOS</a></li>
                </ul>
            </nav>
            </div>
        </header>


    )
}

export default Header;