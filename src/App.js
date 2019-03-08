import React, { Component } from "react";
import ImgCards from "./components/ImgCards";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./components/info";
import cards from "./cards.json";

let name = "";
let usedCards = [];
let score = 0;
let best = 0;
let guessText = "";

//function to shuffel cards from stack overflow
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

//funtion to reset values of game to start
const reset = () => {
  score = 0;
  name = "";
  usedCards = [];
  guessText = "";
};

class App extends Component {
  // Setting vertiables in the state
  state = {
    cards,
    name,
    score, 
    best, 
    guessText,
  };

  
// when the cards is clicked
  handleCardClick = (name) => {
    //if we already lost or won do nothing
    if(this.state.guessText === "You lose" || this.state.guessText === "You win") {
      return
    
    //otherwise we check to see if we have already clicked that card and haven't won
    } else if (usedCards.includes(name) && this.state.score < 14) {
     
     //if we have already clicked the card we lose
          this.setState({
          guessText: "You lose",
          name: ""
          });

        } else {
          //if we haven't lost we add the card to the used cards
          usedCards.push(name);
          console.log(usedCards)

        // then update the state to the new score
          this.setState({
            score: this.state.score + 1,
            best: this.state.score >= this.state.best 
                  ? this.state.best + 1 
                  : this.state.best 
          });

          // then update the state to relect weather we won 
          this.setState({
          guessText: this.state.score < 15 
                      ? "You guessed "
                      : "You win",
            name:  this.state.score < 15 
                      ? name
                      : "",
          })


        // and call the shuffel cards function
         this.setState({ cards: shuffle(this.state.cards) });

        };

  };

    handleRest = () => {
       reset ()
          this.setState({
            name: name,
            score: score,
            guessText: guessText
          });
        };

  render() {
    return (
      <div className="App">
        <Header>  
          <ul>
            <li>
              <button onClick={this.handleRest}>
              Restart
              </button> 
            </li>
          <li>
            <h2 className="guess">  
            {this.state.guessText}
            {this.state.name}
            </h2>
          </li>
          <li>
            <h5> 
              Score: {this.state.score} |
              Best:  {this.state.best} 
            </h5>
          </li>
      </ul>
        </Header>
        <Info />
        <Wrapper>
          {this.state.cards.map(cards => (

              <div onClick={()=> this.handleCardClick(cards.name)}>
                <ImgCards
                  key={cards.id}
                  name={cards.name}
                  image={cards.image}>
                </ImgCards>
              </div>

          ))}
        </Wrapper>
        <Footer />
      </div>
        );
      }
    }
    
    export default App;
  