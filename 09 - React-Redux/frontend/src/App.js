import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu';

function App() {
  const [inputListas, setInputListas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");

  const listas = useSelector((state) => state.listasReducer.listas)
  const titulo = useSelector((state) => state.tituloReducer.titulo)
  

  const dispatch = useDispatch();
  
  function adicionarLista(event){
    event.preventDefault();

    const objLista = {
      nome: inputListas
    }

    dispatch({type: "ADICIONAR", value: objLista});
  }
  
  function alterarTitulo(event){
    setInputTitulo(event.target.value)
    dispatch({type: "ALTERAR", value:event.target.value});

  }

  return (
    <div>
      
      <Menu />
       
      
      <label>Título</label>
      <form>
        <input placeholder="Digíte o título da sua lista..." value = {inputTitulo} onChange={alterarTitulo}/>
      </form>

      <h1>{titulo}</h1>
      <form onSubmit={adicionarLista}>

        <input placeholder="Digíte sua tarefa..." value = {inputListas} onChange={(event) => setInputListas(event.target.value)}/>

        <button>
          Enviar
        </button>

      </form>
     {
      listas.map((lista,index)=>{
        return(
          <li key={index}>{lista.nome}</li>
        )
      })
     }  
    </div>
  );
}

export default App;
