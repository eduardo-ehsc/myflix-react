import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField'
import {Link} from 'react-router-dom';

function CadastroCategoria(){
    const [categorias, setCategorias] = useState([])
    
    const valoresIniciais = {
        nome: "Nome da Categoria",
        descricao: "Descrição da categoria",
        cor: "#000000"
    }

    const [valores, setValores] = useState(valoresIniciais);

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategorias([
            ...categorias,
            valores
        ])

        setValores({
            nome: '',
            descricao: '',
            color: '#000'
        });
    } 

    const setValor = (chave, valor) => {
        setValores({
            ...valores,
            [chave]: valor
        });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValor(
            name, 
            value
        );
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit={handleSubmit}>

                <FormField 
                    label="Nome da Categoria"
                    value={valores.nome}
                    onChange={handleChange}
                    type="text"
                    name="nome"
                />

                <FormField 
                    label="Descrição da Categoria"
                    value={valores.descricao}
                    onChange={handleChange}
                    type="text"
                    name="descricao"
                />

                <FormField 
                    label="Cor"
                    value={valores.cor}
                    onChange={handleChange}
                    type="color"
                    name="cor"
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={indice}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>


            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;