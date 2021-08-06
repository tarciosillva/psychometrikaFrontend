import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import GlobalStyle from "../src/styles/global"

import Login from "../src/pages/Login";
import Admin from "../src/pages/Admin"
import Student from "../src/pages/Student"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login}  />
          <Route path="/admin/materias" component={Admin}/>
          <Route path="/aluno/materias" component={Student}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
