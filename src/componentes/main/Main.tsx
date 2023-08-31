import Filme from "../filme/Filme";
import './Main.css'

export default function Main(){
    return(
        <main className="content-main">
            <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, 
            Barbie parte para o mundo humano em busca da verdadeira felicidade."
            imagem="barbie-capa.png"/>
            <Filme titulo="Barbie Castelo de Diamante" sinopse="Liana e Alexa saem da sua cabana humilde para vender flores na vila e acabam conhecendo Melody, a guardiã do Castelo de Diamante. As duas decidem ajudá-la a impedir que a chave do castelo seja roubada por Lídia, uma musa egoísta."
            imagem="castelo-diamante.png"/>
        </main>
    )
}