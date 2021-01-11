import React, { Component } from 'react'
import {Consumer} from '../../Context'

export default class Contact extends Component {

    state = {
        show : false
    }

    supprimeContact = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id})
    }

    monterContact = () => {
        // changer le state lors d'un evenement avec this.setState
        this.setState({
            show : !this.state.show
        })
    }

    render() {
        return(
            <Consumer>
                {value => {
                    return(
                        <div className="card card-body mb-3 text-center">  
                            {/* &nbsp pour faire de l'espace */}
                            <h4>{this.props.nom}&nbsp; 
                                <i className="fas fa-sort-down" style={{cursor:'pointer'}} onClick={this.monterContact}></i>
                                <i className="fas fa-times" style={{cursor:'pointer', float:'right', color:'red'}} 
                                onClick = {() => {this.supprimeContact(this.props.id, value.dispatch)}} ></i>
                            </h4>
                            {this.state.show ? (
                                <ul className="card card-body mb-3">
                                    <li className="list-group-item">Email : {this.props.email}</li>
                                    <li className="list-group-item">Téléphone : {this.props.tel}</li>
                                </ul>
                            ): null }
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
