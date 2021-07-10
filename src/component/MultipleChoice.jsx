import React, { Fragment } from "react";

class MultipleChoice extends React.Component {

    onSiteChanged = (e) => {
       this.props.selectedAnswer(this.props.index, e.target.value);
    }

    render() {
        const { quetionData } = this.props;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mt-3 title-box mb-4">
                            <div className="text-center mt-3">
                                <h2>{quetionData.text}</h2>
                                {quetionData.options.map((option, index) => {
                                    return <Fragment key={index}>
                                        <input 
                                            type="radio" name="site_name"
                                            value={option}
                                            checked={quetionData.answer === option}
                                            onChange={this.onSiteChanged} /> {option}
                                    </Fragment>
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default MultipleChoice;
