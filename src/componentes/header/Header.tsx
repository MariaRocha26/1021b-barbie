import './Header.css'
function Header(){
    let texto = "ritinha"
    function mudaTexto(){
        texto = "ritinha"
    }
    return(
        <>
        <header>
            <div>
                logo
            </div>
            <nav>
                <ul>
                    <li>
                        <input className="barra-pesquisa" type="text"/>
                    </li>
                    <li>
                        <a href="#">Página Inicial</a>
                    </li>

                    <li>
                        <a href="#">Sobre</a>
                    </li>

                    <li>
                        <a href="#">Notícia</a>
                    </li>

                    <li>
                        <a href="#">Contato</a>
                    </li>
                    
                </ul>
            </nav>
        </header>
        <div>
            <p className='texto-digitado' onke>pesquisa: {texto}</p>
        </div>
        </>
    )
}
export default Header