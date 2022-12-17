// import logo from './logo.svg';
import './App.css';
import Header from "./component/Header"
import Calci from './component/Calci';

function App(){
  return(
          <> 
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                {/* <title>Document</title> */}
            </head> 
            <Header title="Calci Master"/>
            <Calci/>
          </>
  )
  
}

export default App;
