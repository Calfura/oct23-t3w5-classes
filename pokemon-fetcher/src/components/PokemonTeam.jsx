

import React from "react";

export default class PokemonTeam extends React.Component {
    constructor(props){
        super(props);
    }


        // Get random pokemon number
        getRandomPokemonID(){
            return Math.floor(Math.random() * 1025) + 1;
        };

    // Makes requests from PokeAPI
    // on comonent load
    async componentDidMount() {

        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.getRandomPokemonID()).catch(error => error);
        let data = await response.json();
        console.log(data.name);
    }

    // Store data from each request

    // Pass each data to PokemonCard components

    // How do we render HTML in class component?
    render(){
        return(
            <div>
                <h1>Pokemon data here</h1>
            </div>
        )
    }

}