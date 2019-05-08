import React, {Component} from 'react'
import request from 'superagent'
import DogsList from './DogsList';

export default class DogsListContainer extends Component {
    state = { dogBreeds: null }

    componentDidMount(){
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                this.setState({ 
                    dogBreeds: Object.keys(response.body.message)
                })
            })
            .catch(console.error)
    }

    render() {
      return <DogsList dogBreeds={this.state.dogBreeds} /> 
    }
}