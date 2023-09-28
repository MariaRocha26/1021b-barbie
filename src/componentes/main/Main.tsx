import { useState } from "react";
import Filme from "../filme/Filme";
import './Main.css'
type FilmesType = {
    id: number,
    titulo: string,
    sinopse: string,
    imagem: string
}

export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")

    const filmes:FilmesType[] = [
        {
            id: 1,
            titulo:"Barbie",
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/barbie-capa.png" 
        },
        {
            id: 2,
            titulo:"Barbie Castelo de Diamante",
            sinopse:"Liana e Alexa saem da sua cabana humilde para vender flores na vila e acabam conhecendo Melody, a guardiã do Castelo de Diamante. As duas decidem ajudá-la a impedir que a chave do castelo seja roubada por Lídia, uma musa egoísta.",
            imagem:"/castelo-diamante.png"
        },
        {
        id: 3,
        titulo:"Barbie Escola de Princesas",
        sinopse:"Blair é uma garota simples e órfã que foi sorteada para estudar na exclusiva Escola de Princesas. A escola é um lugar incrível, onde as meninas aprendem dança, etiqueta, arte e outras habilidades indispensáveis a uma princesa. Blair adora suas aulas, suas novas fadinhas assistentes e suas novas amigas, as princesas Hadley e Isla. Porém, quando a malvada Dama Devin desconfia que Blair é a princesa e herdeira desaparecida, ela faz de tudo para impedir que Blair assuma o trono.",
        imagem:"/escola-de-princesas.png"
        }

    ]
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
        setTexto(e.target.value)
    }
    return(
        <>
        <div className="pesquisa">
            <p>Buscar Filme</p>
            <input className="barra-pesquisa" type="text" onChange={mudaTexto}/>
            <div>
                <p className='texto-digitado'>pesquisa: {texto}</p>
            </div>
        </div>
            

        <main className="content-main">
            {filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map((filme:FilmesType)=>
            <Filme key={filme.id}
                   titulo={filme.titulo}
                   sinopse={filme.sinopse}
                   imagem={filme.imagem}
                   />
                )
            }
            
            
        </main>
        </>
    )
}