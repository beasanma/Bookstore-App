import "./_autores.scss";

interface Autores {
    nome: string,
    livros: number
}


function Autores(props: Autores) {

    return (
        <div className="autor_container">
            <div className="autor_box">
                <div className="autor_info">
                    <span className="cliente">{props.nome}</span>
                    <span className="livros">{props.livros} livros{props.livros != 1 ? "s" : ""} </span>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Autores;