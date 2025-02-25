import Livro from "../Livro/Livro.tsx";
import "./_livros.scss";
import {useEffect, useState} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import Search, {useSearch} from "../Search/Search.tsx";
import Pagination, {usePagination} from "../Paginacao/Paginacao.tsx";

export interface TipoLivro {
    id: number,
    titulo: string,
    ano_publicacao: number,
    autor: string,
    vendas: number,
    imagem: string,
}

function Livros() {

    const [Livros, setLivros] = useState<TipoLivro[]>([]); // useState da interface
    //const [filtro, setFiltro] = useState(""); // o state guarda o search input do user
    //const [pagina, setPagina] = useState(0); // filtro inicia vazio, se colocar "saramago" devolve só os livros de saramago
    //const por_pagina = 13; //filtra 4 livros por página
    //filtrar sempre primeiro! depois é que se pagina

    const {filtro} = useSearch();

    //paginação:
    const {pagina, setPagina} = usePagination();
    const por_pagina = 4;


    {/* function handleChange(e: ChangeEvent<HTMLInputElement>) { //atualiza o filtro quando o utilizador escreve
        setFiltro(e.target.value)
        // setPagina(0); //volta para a página 0 quando a search é alterada (usado em vez de useEffect)
    }*/
    }

    /*cria um array de livros em que o titulo "matches" a query pesquisada
    let livros_filtrados = lista_livros.filter(livro =>
        livro.titulo.toLowerCase().includes(filtro.toLowerCase()) || //filtra pelo título
        livro.autor.toLowerCase().includes(filtro.toLowerCase()) || //filtra pelo autor
        livro.ano_publicacao.toString().includes(filtro) //filtra pelo ano
    );

    // fornece os elementos filtrados, vai buscar a nova lista aos livros_filtrados
    let livros_paginados = livros_filtrados.slice(pagina * por_pagina, (pagina + 1) * por_pagina);*/

    useEffect(() => {
      setPagina(0);
    }, [filtro, setPagina]); //dependência é o filtro

    //import axios
    useEffect(() => {
        axios.get<TipoLivro[]>("https://livrariaupskill.store/livros", {
            params: {
                pagina: pagina,
                filtro: filtro,
                por_pagina: por_pagina
            }
        }).then((res: AxiosResponse) => {
            setLivros(res.data);

        }).catch((e: AxiosError) => {
            console.error(e);
        })
    }, [pagina, filtro]);

    //o <input> visa as alterações
    return <div className={"Livros"}>
        {/*<input
                type="text"
                placeholder="Pesquisar Livro"
                onChange={handleChange}
                value={filtro}
            />*/}
        <Search/>
        {Livros.map(l => <Livro //sem a função de paginacao fica livros_filtrados, com o useEffect para o axios é Livros
            key={l.id} id={l.id}
            imagem={l.imagem}
            titulo={l.titulo}
            autor={l.autor}
            ano_publicacao={l.ano_publicacao}
        />)}
        <Pagination/>

        {/*<div className={"paginacao"}>
            {pagina > 0 && <div onClick={() => setPagina(pagina > 0 ? pagina - 1 : 0)}>
                <FontAwesomeIcon icon={faChevronLeft}/> Anterior
            </div>}
            {<div onClick={() => setPagina(pagina + 1)}>
                Próxima <FontAwesomeIcon icon={faChevronRight}/>
            </div>}
        </div>*/}
    </div>;
}

export default Livros;

