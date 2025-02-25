import {ChangeEvent, createContext, ReactNode, useContext, useState} from "react";
import "./_search.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

interface SearchContextType {
    filtro: string,
    setFiltro: Function
}

const SearchContext = createContext<SearchContextType>({} as SearchContextType);

function Search() {
    const {filtro, setFiltro} = useContext(SearchContext);

    function handleChange(e : ChangeEvent<HTMLInputElement>) {
        setFiltro(e.target.value);
    }

    return <div className={"Search"}>
        <input onChange={handleChange} value={filtro}/>
        <FontAwesomeIcon icon={faSearch}/>
    </div>
}

function SearchProvider(props : {children:ReactNode}) {
    const [filtro, setFiltro] = useState("");

    return <SearchContext.Provider value={{filtro, setFiltro}}>
        {props.children}
    </SearchContext.Provider>
}

function useSearch() {
    return useContext(SearchContext);
}

export default Search;

export {useSearch, SearchProvider};