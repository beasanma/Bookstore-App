import {createContext, ReactNode, useContext, useState} from "react";
import "./Paginacao.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

interface PaginationContextType {
    pagina: number;
    setPagina: (page: number) => void;
}

const PaginationContext = createContext<PaginationContextType>({} as PaginationContextType);

function Pagination() {
    const {pagina, setPagina} = useContext(PaginationContext);

    return (
        <div className="paginacao">
            {pagina > 0 && (
                <div className="before" onClick={() => setPagina(pagina > 0 ? pagina - 1 : 0)}>
                    <FontAwesomeIcon icon={faChevronLeft}/> Anterior
                </div>
            )}
                <div className="after" onClick={() => setPagina(pagina + 1)}>
                    Próxima <FontAwesomeIcon icon={faChevronRight}/>
                </div>
        </div>
    );
}

function PaginationProvider({children}: { children: ReactNode }) {
    const [pagina, setPagina] = useState(0);

    return (
        <PaginationContext.Provider value={{pagina: pagina, setPagina}}>
            {children}
        </PaginationContext.Provider>
    );
}

function usePagination() {
    return useContext(PaginationContext);
}

export default Pagination;
export {PaginationProvider, usePagination};

