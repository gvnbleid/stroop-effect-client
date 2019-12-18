import React, { Component } from "react";
import meme from "../meme.png"

class EndScreen extends Component {
    render() {
        return (
            <div>
                <div className="textContainer">
                    <p className="text">Dziękujemy za udział w badaniu! </p> 
                    <br/> 
                    <p className="text">Celem badania jest zmierzenie wielkości efektu Stroopa w zależności od tego jakie słowa są wyświetlane na ekranie. Więcej na temat efektu Stroopa można przeczytać <a href="https://pl.wikipedia.org/wiki/Efekt_Stroopa">tutaj</a>.</p> 
                    <br/> 
                    <p className="text">W razie jakichkolwiek pytań prosimy o kontakt: a.bialokozowi2@student.uw.edu.pl</p>
                </div>
                <div className="buttonsContainer">
                    <img src={meme} alt="Smieszny mem"/>
                </div>
            </div>
        )
    }
}

export default EndScreen;