import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';

function CadastroVideo() {
    return (
        <div>TESTE</div>
    );
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/teste" component={CadastroVideo}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
