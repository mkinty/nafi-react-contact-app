import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../../Context'

export default class ListeContact extends Component {


    render() {
        return(
            <Consumer>
                {value => {
                    return(
                        // le React.Fragment permet de nous éviter les noeux unitils (des div qui n'ont lieu d'être)
                        <React.Fragment>
                            <h1 className="display-4 my-4">Nos contacts : </h1>
                            {/* Création des props (on utilise la fonction map) */}
                            {value.conctacts.map(contact => (
                                <Contact
                                key = {contact.id}
                                id = {contact.id}
                                nom = {contact.nom}
                                email = {contact.email}
                                tel = {contact.tel}
                                />
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}
