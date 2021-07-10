import React, { Fragment } from "react";
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class NumericRange extends React.Component {

    onSiteChanged = (range) => {
        this.props.selectedAnswer(this.props.index, range);
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
                                <>
                                    <Range onChange={this.onSiteChanged} />
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default NumericRange;
