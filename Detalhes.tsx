import "./_detalhes.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as faBookmarkSolid, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {useParams} from "react-router-dom";
import {useMarcadores} from "../Favoritos.tsx";
import venda from "../Vendas/Venda.tsx";

interface ParamsDetalhes {
    id_livro: string;
}

interface DetalheLivro {
    id: number,
    titulo: string,
    ano_publicacao: number,
    autor: string,
    sinopse: string,
    imagem: string,
    vendas: VendaLivro[]
}

interface VendaLivro {
    data: string,
    cliente: string
}

function Detalhes() {
    //const [Bookmarked, setBookmarked] = useState(false);

    const {id_livro} = useParams<ParamsDetalhes>();
    const idLivro = parseInt(id_livro);
    const [detalhes, setDetalhes] = useState<DetalheLivro | null>(null);

    const {marcadores, toggleMarcador} = useMarcadores();

    const [Bookmarked, setBookmarked] = useState(marcadores.includes(idLivro));

    const handleToggleMarcador = () => {
        toggleMarcador(idLivro);
        setBookmarked(prev => !prev);
    }


    useEffect(() => {
        axios.get<DetalheLivro>(`https://livrariaupskill.store/livros/${idLivro}`).then(res => {
            setDetalhes(res.data);
        }).catch((e: AxiosError) => {
            console.error(e);
        })
    }, [idLivro]);

    if(!detalhes) {
        return <div> carregando...</div>
    }

    // pode ser utilizado para buscar detalhes dependendo do id dado
    return (
        <div className="detalhes_container">

                <div className="detalhes_header" style={{backgroundImage: `url(${detalhes.imagem})`}}>
                    <div className="blur">
                        <img src={detalhes?.imagem} alt="capa livro" className="book_cover"/>
                    </div>
                </div>
            <div className="content_box">
                <div className="book_content">
                    <h1>{detalhes.titulo}</h1>
                    <p>{detalhes.autor}</p>
                    <span className="ano">{detalhes.ano_publicacao}</span>
                </div>
                {/* permite fazer toggle do icon com um boolean */}
                * <div className="bookmark_icon" onClick={handleToggleMarcador}>
                <FontAwesomeIcon
                    icon={Bookmarked ? faBookmarkSolid : faBookmark}
                />
                {/* <FontAwesomeIcon
                            icon={Bookmarked ? faBookmarkSolid : faBookmark}
                            onClick={() => setBookmarked(!Bookmarked)}/>*/}
                    </div>
            </div>
            {/* faz split do parágrafo com base no símbolo \n */}
            <div className="sinopse"> {detalhes.sinopse.split("\n").map((paragrafo, id) => {
                return <p key={id}>{paragrafo.trim()}</p>
            })}
            </div>
                <div className="vendas_box">
                    <div className="header_plus_icon">
                        <div className="head_text">
                            <h3>Vendas</h3>
                        </div>
                        <div className="text_icon">
                            <FontAwesomeIcon icon={faChevronDown}/></div>
                    </div>


                                <span className="data">
                {new Date(venda.data).toLocaleDateString("pt-PT", {
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                })}
                                </span>
                            </div>
                        ))
            </div>
            );
        }
export default Detalhes;