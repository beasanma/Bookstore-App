import '../Cabecalho/_cabecalho.scss';
import capa_fundo from "../../images/livraria_upskill.png";

interface Cabecalho {
    header: string;
}

function Cabecalho() {
    return (
        <div className="header">
            <img src={capa_fundo} className="image_header" alt="Header"/>
        </div>
    )
}

export default Cabecalho;