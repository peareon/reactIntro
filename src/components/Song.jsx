import React, {Component} from "react";
import '../App.css'

class Song extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <div>Título: {this.props.title}</div>
                    <div>Artista: {this.props.artist}</div>
                    <div>Duración: {this.props.duration}</div>
                </div>
            </div>
        )
    }
}

export default Song;