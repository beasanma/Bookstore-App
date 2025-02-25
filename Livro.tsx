import '../Livro/_livro.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    ano_publicacao: number;
    imagem: string;
}

function Livro(props: Livro) {
    return (
        <div className="book_container">
            <div className="book_card">
                <div className="book_img">
                    <img
                        src={props.imagem} alt={props.titulo} className="image"
                    />
                </div>
                <div className="book_details">
                    <h3 className="livro-titulo">{props.titulo}</h3>
                    <p className="livro-autor">{props.autor}</p>
                    <span className="livro_ano">{props.ano_publicacao}</span>
                </div>
                <div className="eye_icon">
                    <Link to={`/detalhes/${props.id}`}>
                        <FontAwesomeIcon icon={faEye} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Livro;
