import React, { Fragment } from "react";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

class DateRange extends React.Component {

    onSiteChanged = (start, end, label) => {
        const dateRange = {
            "startDate": start,
            "endDate": end,
        }
        this.props.selectedAnswer(this.props.index, dateRange);
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
                                <DateRangePicker onCallback={this.onSiteChanged}>
                                    <input type="text" onCallback={this.onSiteChanged} className="form-control" />
                                </DateRangePicker>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default DateRange;
