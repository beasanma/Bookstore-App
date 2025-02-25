import "./_vendas.scss";

interface Vendas {
    data: string;
    cliente: string;
    livro: string;
    livro_imagem: string;
}

function Vendas(props: Vendas) {

    return (
        <div className="vendas_container">
            <div className="vendas_card">
                <div className="venda_desc">
                    <span className="livros">{props.livro}</span>
                    <span className="cliente">{props.cliente} </span>
                    <span className="data">
                {new Date(props.data).toLocaleDateString("pt-PT", {
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                })}</span>
                </div>
                <div className="venda_book">
                    <img src={props.livro_imagem} alt="book_img"/>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Vendas;