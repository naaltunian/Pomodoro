import React from 'react';
import Logo from './Logo';
import Timer from './Timer';
import TimeController from './TimeController';

class Pomodoro extends React.Component {

    state = {
        minutes: 25,
        seconds: 0,
        breakTimeMin: 5,
        start: false
    }

    resetTime = () => {
        this.setState({
            minutes: 25,
            seconds: 0,
            breakTimeMin: 5,
            start: false
        })
    }

    startTimer = () => {
        this.setState({ start: true });
        console.log('start timer')
        this.tickDown()
    }

    tickDown = () => {
        this.interval = setInterval(() => {
            const updatedSec = this.state.seconds - 1;
            console.log("tick");
            this.setState({
                seconds: updatedSec
            });
        }, 1000)
    }

    stopTimer = () => {
        console.log('stop timer')
        this.setState({ start: false });
        clearInterval(this.interval)
    }

    incrementMinTimer = () => {
        const updatedMin = this.state.minutes + 1;
        this.setState({ minutes: updatedMin });
    }

    incrementSecTimer = () => {
        const updatedSec = this.state.seconds === 55 ? 0 : this.state.seconds + 5;
        this.setState({ seconds: updatedSec});
    }

    decrementMinTimer = () => {
        if(this.state.minutes === 0) return;
        const updatedMin = this.state.minutes - 1;
        this.setState({ minutes: updatedMin});
    }

    decrementSecTimer = () => {
        const updatedSec = this.state.seconds === 0 ? 55 : this.state.seconds - 5;
        this.setState({ seconds: updatedSec});
    }

    render() {
        const { minutes, seconds, breakTimeMin, start } = this.state

        return(
            <div>
                <Logo />
                <Timer
                    minutes={minutes}
                    seconds={seconds}
                    breakTimeMin={breakTimeMin}
                />
                <TimeController
                    minutes={minutes}
                    seconds={seconds}
                    addMin={this.incrementMinTimer}
                    addSec={this.incrementSecTimer}
                    subMin={this.decrementMinTimer}
                    subSec={this.decrementSecTimer}
                    reset={this.resetTime}
                    startTimer={this.startTimer}
                    stopTimer={this.stopTimer}
                    start={start}
                />
            </div>
        )
    }
}

export default Pomodoro;