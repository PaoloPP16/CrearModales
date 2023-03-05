import './App.css';
import {openModal,openModalAccount} from './components/openModal';

function App() {



  function handleOpenModal(){
    openModal();
  }
  function handleOpenModal2(){
    openModalAccount();
  }
  return (
    <div className="App">
        <button onClick={handleOpenModal}> Abrir Modal </button>
        <button onClick={handleOpenModal2}> Abrir Modal 2 </button>
    </div>
  );





}

export default App;
