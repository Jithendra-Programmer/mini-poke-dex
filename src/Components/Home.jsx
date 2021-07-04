import React, { Component } from 'react';
import axios from 'axios'
import PokemonCard from './Layouts/PokemonCard';
import './styles/home.css';
import Loading from './images/loading.gif';
import Navbar from './Layouts/Navbar'

class home extends Component {

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/',
        pokemons: null
    }

    // componentDidMount = async () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/")
    //         .then(response => response.json())
    //         .then(pokemons => {
    //             this.setState({pokemons: pokemons.results})
    //         })
    // }

    async componentDidMount() {
        const res = await axios.get(this.state.url)
        this.setState({pokemons: res.data['results']})
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="cards">
                        {this.state.pokemons ? (                            
                            this.state.pokemons.map((pokemon, index) => (
                                <PokemonCard pokemon={pokemon} key={index} />
                            ))
                        ) : (
                            <div className="loading">
                                <img src={Loading} alt="" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default home;
