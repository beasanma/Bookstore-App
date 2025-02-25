import './_App.scss'
import Cabecalho from "./components/Cabecalho/Cabecalho.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Livros from "./components/Livros/Livros.tsx";
import Autor from "./components/Autores/autor.tsx";
import Marcador from "./components/Marcadores/marcador.tsx";
import {MarcadorProvider} from "./components/Favoritos.tsx";
import venda from "./components/Vendas/Venda.tsx";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Detalhes from "./components/Detalhes/Detalhes.tsx";
import {SearchProvider} from "./components/Search/Search.tsx";
import {PaginationProvider} from "./components/Paginacao/Paginacao.tsx";
import Formulario from "./components/Formulario/Formulario.tsx";

function App() {

    return <BrowserRouter>
        <div className="App">
            <Cabecalho/>
            <SearchProvider>
                <MarcadorProvider>
                    <PaginationProvider>
                        <Switch>
                            <Route path="/livros" component={Livros}/>
                            <Route path="/autores" component={Autor}/>
                            <Route path="/marcadores" component={Marcador}/>
                            <Route path="/vendas" component={venda}/>
                            <Route path="/detalhes/:id_livro" component={Detalhes}/>
                            <Route path="/formulario" component={Formulario}/>
                            <Redirect to={"/livros"}/>
                        </Switch>
                    </PaginationProvider>
                        <NavBar/>
                </MarcadorProvider>
            </SearchProvider>
        </div>
    </BrowserRouter>;
}

export default App;
