import React, { Fragment } from "react";
import './App.css';
import DateRange from "./component/DateRange";
import FreeText from "./component/FreeText";
import NumericRange from "./component/NumericRange";
import MultipleChoice from "./component/MultipleChoice";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { quetionsData: [
      {
        id: 1,
        type: "MULTIPLE",
        text: "do you have any dietary prefarences",
        options: ["Avoid Gultin", "Avoid Wheat", "Avoid dairy", "vegan", "Vegetaraian"],
        answer: ""
      },
      {
        id: 2,
        type: "NUMERIC",
        text: "",
        options: [],
        answer: ""
      },
      {
        id: 3,
        type: "DATERANGE",
        text: "what is covid lockdown first wave duration?",
        options: [],
        answer: ""
      },
      {
        id: 4,
        type: "FREETEXT",
        text: "Any Adition Comments",
        options: [],
        answer: ""
      },
    ]
  }
  }

  selectedAnswer = (index, answer)=>{
    const currentState = [...this.state.quetionsData];
      currentState[index].answer = answer;
         this.setState({
           quetionsData : currentState
         });
  }


  renderQuetions = () => {
    const quetionsData = [...this.state.quetionsData];
    return quetionsData.map((quetion, index) => {
      switch (quetion.type) {
        case 'MULTIPLE':
          return <MultipleChoice selectedAnswer={this.selectedAnswer} quetionData={quetion} index={index}/>;
        case 'NUMERIC':
          return <NumericRange selectedAnswer={this.selectedAnswer} quetionData={quetion} index={index} />;
        case 'DATERANGE':
          return <DateRange selectedAnswer={this.selectedAnswer} quetionData={quetion} index={index} />;
        case 'FREETEXT':
          return <FreeText selectedAnswer={this.selectedAnswer} quetionData={quetion} index={index} />;
        default:
          return "hello";
      }
    })

  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            {this.renderQuetions()}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default App;

