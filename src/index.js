import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import CadastroVideo from "./components/CadastroVideo/CadastroVideo";

const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cadastro/video" component={CadastroVideo}/>
            <Route component={Pagina404}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
