import React, { Component } from 'react';
import Loading from '../images/loading.gif';
import {Link} from 'react-router-dom';

class PokemonCard extends Component {

    state = {
        url: this.props.pokemon.url,
        pokemonName: this.props.pokemon.name,
        img: null,
        color: null
    }

    getColor = async (name) => {
        await fetch("https://pokeapi.co/api/v2/pokemon-species/"+name)
            .then(res => res.json())
            .then(data => {
                // console.log(data.color.name)
                this.setState({color: data.color.name})
                console.log(`${name} color is ${data.color.name}`);
            })
    }

    componentDidMount = async () => {
        fetch(this.state.url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({img: data.sprites.other.dream_world.front_default})
                this.getColor(this.state.pokemonName)
            })
    }


    render() {

        return (
            <Link to={`/pokemon/${this.state.pokemonName}`} className="poke-card-link">
                <div className="card pokemon-card" style={{backgroundColor: this.state.color}}>
                    {this.state.img ? (
                        <img src={this.state.img} alt="" className="card-img-top image" />
                    ) : (
                        <img src={Loading} alt="" className="card-img-top image" />
                    )}
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.state.pokemonName
                                .toLowerCase()
                                .split(" ")
                                .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                            }
                        </h4>
                    </div>
                </div>
            </Link>
        );
    }
}

export default PokemonCard;
