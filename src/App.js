import { useState } from 'react';
import Banner from './componente/Banner/Banner';
import Formulario from './componente/Formulario/Formulario';
import Time from './componente/Time/Time';

function App() {

  const times =[
     {
      nome:'Devops',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
     },
     {
      nome:'Sistemas Integrados',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
     },
     {
      nome:'BI',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
     },
     {
      nome:'Inovação',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
     },
     {
      nome:'Gestão',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
     },
     {
      nome:'Superitendência',
      corPrimaria: '#FFBAOS',
      corSecundaria: '#FFFSD9'
     },
     {
      nome:'Suporte',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
     }
]
  const [colaboradores,setColaboradores] = useState([])
  const aoNovoColaboradorAdiconado = (colaborador) =>{
    //console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time=>time.nome)} aoColaboradorCadastrado={colaborador=>aoNovoColaboradorAdiconado(colaborador)} />  
      {times.map(time=> <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador=>colaborador.time === time.nome)}
        />)}
            
    </div>

  ); 
}

export default App;
