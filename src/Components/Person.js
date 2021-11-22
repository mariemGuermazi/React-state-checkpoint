import React, { Component } from 'react'

export default class Person extends Component {

    constructor (props){
        super(props);
        this.state={
            fullName:"Mariem Guermazi" ,
            bio:"This is my bio" ,
            imgSrc:"https://media.istockphoto.com/vectors/woman-with-laptop-sitting-in-nature-and-leaves-concept-illustration-vector-id1139913278?k=20&m=1139913278&s=612x612&w=0&h=Ue0Nh74fYCnNd5hfwBCLwJ2VeZqjXxnI5iEXqqTLXb8=",
            profession:"Student"
        }
    }

    render() {
        return (
            <div style={{marginTop : "10px"}}>
                <img src={this.state.imgSrc} alt="profile pic" width="400" />
                <div>
                    FULLNAME: {this.state.fullName}<br/>
                    BIO: {this.state.bio}<br/>
                    PROFESSION: {this.state.profession}
                </div>
            </div>
        )
    }
}
