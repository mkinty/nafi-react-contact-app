import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './composants/interface/Header'
import {Provider} from './Context'
import ListeContact from './composants/contact/ListeContact'
import AddContact from './composants/contact/AddContact'
import APropos from './composants/pages/APropos'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Erreur from './composants/pages/Erreur'

//Class component (les composants de type class)
class App extends Component {
  render() {
    return (
      // On entour tout l'app avec Provider
      <Provider>
        <Router>
          <div className="App"> 
            <Header />
            <div className="container">
              {/* <AddContact/> */}
              <Switch>
                <Route exact path="/liste" component={ListeContact}/>
                <Route exact path="/" component={ListeContact}/>
                <Route exact path="/ajoute" component={AddContact}/>
                <Route exact path="/apropos" component={APropos}/>
                <Route component={Erreur}/>
              </Switch>
            </div>
          </div>
        </Router>
    </Provider>
    );
  }
  
}

export default App;
