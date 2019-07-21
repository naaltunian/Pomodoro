import React, { Fragment } from 'react';
import "./Task.css";

class SubTask extends React.Component {
    state = {
        strikeThrough: false
    }

    lineThrough = _ => {
        console.log("click")
        this.setState({strikeThrough: !this.state.strikeThrough})
    }

    render() {
        return(
            <Fragment>
                <p className={this.state.strikeThrough && "strike"} onClick={this.lineThrough}>{this.props.subTask}</p>
            </Fragment>
        )
    }
}

export default SubTask;