import React from "react";
class StudentCard extends React.Component{
    render(){
        return(
            <>
                <div className="sCard">
                    <h2>Name: {this.props.name}</h2>
                    <p> Age: {this.props.age}</p>
                </div>
            </>
        )
    }
}
export default StudentCard;

