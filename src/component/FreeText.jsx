import React, { Fragment } from "react";

class FreeText extends React.Component {

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
                                <textArea onChange={this.onSiteChanged} >{quetionData.answer}
                                </textArea>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default FreeText;
