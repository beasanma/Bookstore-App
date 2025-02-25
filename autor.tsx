import Autores from "./Autores.tsx";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";

interface TipoAutor {
    id: number,
    nome: string,
    livros: number
}

function Autor() {

    const [authors, setAuthors] = useState<TipoAutor[]>([]);

    useEffect(() => {
        axios.get<TipoAutor[]>("https://livrariaupskill.store/autores", {}).then(res => {
            setAuthors(res.data);
        }).catch((e: AxiosError) => {
            console.error(e);
        })
    }, []);

    return (<div className={"Autores"}>
            {authors.map(a => (<Autores
                    key={a.id}
                    nome={a.nome}
                    livros={a.livros}
                />
            ))}
        </div>
    );
}

export default Autor;