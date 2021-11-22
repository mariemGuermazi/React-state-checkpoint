import React from 'react'

const MyFooter = () => {

    const footerstyle = {
        color: "white",
        backgroundColor: "#0d6efd",
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "40px",
        width: "100%",
    };

    return (
        <div className="footer"  style ={footerstyle}>
        <p>GoMyCode 2021</p>
        </div>
    )
}

export default MyFooter