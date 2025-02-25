import "../Vendas/_vendas.scss";
import Vendas from "./Vendas.tsx";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Search, {useSearch} from "../Search/Search.tsx";

interface TipoVenda {
    id: number,
    data: string,
    cliente: string,
    valor: number,
    livro: string,
    livro_imagem: string,
}

function Venda() {

    const [vendas, setVendas] = useState<TipoVenda[]>([]);

    //filtrar as páginas para criar um "anterior" e um "próximo" que limita o nº de livros por páginas
    const [pagina, setPagina] = useState(0);
    const por_pagina = 5;
    const vendasPagina = vendas.slice(pagina * por_pagina, (pagina + 1) * por_pagina);

    const {filtro} = useSearch();

    useEffect(() => {
        axios.get<TipoVenda[]>("https://livrariaupskill.store/vendas", {
            params:{filtro}})
            .then(res => {
                setVendas(res.data);
            }).catch((e: AxiosError) => {
            console.error(e);
        })
    }, []);

    return (<div className={"Sales"}>
            <Search/>
            {vendasPagina.map(v => (<Vendas
                    key={v.id}
                    data={v.data}
                    cliente={v.cliente}
                    livro={v.livro}
                    livro_imagem={v.livro_imagem}
                />
            ))}

            <div className={"paginacao"}>
                {pagina > 0 && <div onClick={() => setPagina(pagina > 0 ? pagina - 1 : 0)}>
                    <FontAwesomeIcon icon={faChevronLeft}/> Anterior
                </div>}
                {(pagina + 1) < (vendas.length / por_pagina) && <div onClick={() => setPagina(pagina + 1)}>
                    Próxima <FontAwesomeIcon icon={faChevronRight}/>
                </div>}
            </div>
        </div>
    );
}

export default Venda;