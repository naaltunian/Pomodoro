import React from 'react';
import Logo from './Logo';
import Timer from './Timer';
import TimeController from './TimeController';

class Pomodoro extends React.Component {

    state = {
        minutes: 25,
        seconds: 0,
        breakTimeMin: 5,
        start: false,

    }

    resetTime = () => {
        this.setState({
            minutes: 25,
            seconds: 0,
            breakTimeMin: 5,
            start: false
        })
    }

    incrementMinTimer = () => {
        const updatedMin = this.state.minutes + 1;
        this.setState({ minutes: updatedMin });
    }

    incrementSecTimer = () => {
        const updatedSec = this.state.seconds + 1;
        this.setState({ seconds: updatedSec});
    }

    decrementMinTimer = () => {
        if(this.state.minutes === 0) return;
        const updatedMin = this.state.minutes - 1;
        this.setState({ minutes: updatedMin});
    }

    decrementSecTimer = () => {
        if(this.state.seconds === 0) return;
        const updatedSec = this.state.seconds - 1;
        this.setState({ seconds: updatedSec});
    }

    startTimer = () => {
        this.setState({
            start: true,
        })
    }

    // minTick = () => {
    //     if(thi)
    //     this.setState({})
    // }

    secondTick = () => {
        this.setState({ seconds: this.state.seconds === 0 ? 59 : this.state.seconds - 1 });
    }

    // ring = () => {
    //     if (this.state.minutes === 0 && this.state.seconds === 0) {
    //         // sound the alarm
    //     }
    // }

    render() {
        const { minutes, seconds, breakTimeMin, start } = this.state

        return(
            <div>
                <Logo />
                <Timer
                    minutes={minutes}
                    seconds={seconds}
                    breakTimeMin={breakTimeMin}
                    start={start}
                />
                <TimeController
                    minutes={minutes}
                    seconds={seconds}
                    addMin={this.incrementMinTimer}
                    addSec={this.incrementSecTimer}
                    subMin={this.decrementMinTimer}
                    subSec={this.decrementSecTimer}
                    reset={this.resetTime}
                />
            </div>
        )
    }
}

export default Pomodoro;