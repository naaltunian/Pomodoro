import React, { Fragment } from 'react';
import "./Task.css";

class SubTask extends React.Component {
    state = {
        strikeThrough: false
    }

    lineThrough = _ => {
        this.setState({strikeThrough: !this.state.strikeThrough})
    }

    render() {
        return(
            <Fragment>
                <span className="sub-task">
                    <p className={this.state.strikeThrough ? "strike": undefined} onClick={this.lineThrough}>{this.props.subTask}</p>
                    <p className="delete-btn" onClick={() => this.props.delete(this.props.id)}>X</p>
                </span>
            </Fragment>
        )
    }
}

export default SubTask;