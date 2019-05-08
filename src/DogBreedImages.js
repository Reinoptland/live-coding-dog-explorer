import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

export default class DogBreedImages extends React.Component {
    state = {
        images: null
    }

    componentDidMount() {
        const breed = this.props.match.params.breed
        request
          .get(`https://dog.ceo/api/breed/${breed}/images`)
          .then(response => {
              console.log(response)
              this.setState({ images: response.body.message })
            })
          .catch(console.error)
    }

    render(){
        console.log(this.state)
        return (
            <div className="dog-breed-images">
                <h1>Dogs Breed Images</h1>
                <Link to="/">Go back to the index</Link>

                This page will show images of a { this.props.match.params.breed } 
                
                <br/>

                { this.state.images !== null && this.state.images.map(image => {
                    return <img key={image} src={image} />
                })}
            </div>
        )
    }
}