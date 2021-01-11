import React, {Component} from 'react'


// Créer un context API
const Context = React.createContext() ;

// reducer nos permet de créer des switch d'actions
const reducer = (state, action) => {

    switch(action.type) {
        case 'DELETE_CONTACT' :
            return {
                conctacts : state.conctacts.filter(contact =>
                    // On ne garde que les id différents de l'id cliqué (payload)
                    contact.id !== action.payload) 
            };
        case 'ADD_CONTACT' :
            return {
                // On ajoute dans le tableau contacts action.payload (l'element saisi) et le state existant
                conctacts: [action.payload, ...state.conctacts]
            }
        default:
            return state;
    }
}


// Provider permet de fournir le state
export class Provider extends Component {
    state = {
        conctacts : [
            {
                id : 1,
                nom : 'Moustapha Kinty',
                email : 'contact@kmyprod.com',
                tel : '789-789-7899',
                
            },
            {
                id : 2,
                nom : 'Moustapha Kinty',
                email : 'contact@kmyprod.com',
                tel : '789-789-7899',
                
            },
            {
                id : 3,
                nom : 'Moustapha Kinty',
                email : 'contact@kmyprod.com',
                tel : '789-789-7899',

            }
        ],
        // envoyer l'action
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render(){
        return(
            // on prend tout le state et on le stock dans value (value = this.state)
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer ;