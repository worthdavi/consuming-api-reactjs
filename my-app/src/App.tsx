import React, { useState } from 'react';
import GitHub from './pages/github/github';
import { SelectInput, SelectBox } from './styles';

function App() {
  const [apiSelected, setApiSelected] = useState("")
  function selectApi(e : React.ChangeEvent<HTMLSelectElement>){
    setApiSelected(e.target.value)
  }
  return (
    <div>
      <SelectBox>
        <strong>Selecione a API: </strong>
        <SelectInput onChange={selectApi} name="api" id="api" defaultValue="Escolher">
          <option key="Escolher" value="Escolher">Escolher</option>
          <option key="GitHub" value="GitHub">GitHub</option>
        </SelectInput>
      </SelectBox>      
      {apiSelected === 'GitHub' && <GitHub user="worthdavi"/>}
      {apiSelected === 'Outro' && 'Sexo com animais'}
    </div>
  );
}

export default App;
