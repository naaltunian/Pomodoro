import React from 'react';
import Logo from './Logo';
import Timer from './Timer';
import TimeController from './TimeController';
import Beep from './assets/beep-06.mp3';
import './Pomodoro.css';

class Pomodoro extends React.Component {

    state = {
        minutes: 25,
        seconds: 0,
        breakTimeMin: 5,
        start: false,
        isBreak: false,
        breakCount: 0
    }

    resetTime = () => {
        this.setState({
            minutes: 25,
            seconds: 0,
            breakTimeMin: 5,
            start: false,
            isBreak: false,
            breakCount: 0
        });
    }

    startTimer = () => {
        this.setState({ start: true });
        this.tickDown()
    }

    tickDown = () => {
        this.interval = setInterval(() => {
            const updatedSec = this.state.seconds === 0 ? 59 : this.state.seconds - 1;
            const updatedMin = this.state.seconds === 0 ? this.state.minutes - 1 : this.state.minutes;
            this.setState({
                seconds: updatedSec,
                minutes: updatedMin
            });
            this.ring();
        }, 1000);
    }

    stopTimer = () => {
        this.setState({ start: false });
        clearInterval(this.interval)
    }

    ring = () => {
        if(this.state.minutes === 0 && this.state.seconds === 0) {
            // make noise function
            const alarm = new Audio(Beep);
            alarm.play();
            clearInterval(this.interval);
            const { isBreak, breakCount, start } = this.state;
            const setBreak = !isBreak;
            const longerBreak = breakCount === 5 ? true : false;
            const newTime = !isBreak ? 5 : 25;
            if(longerBreak) {
                this.setState({
                    break: true,
                    start: false,
                    seconds: 0,
                    minutes: 20,
                    breakCount: 0
                });
                return;
            }
            this.setState({
                isBreak: setBreak,
                start: !start,
                seconds: 0,
                minutes: newTime,
                breakCount: breakCount + 1,
            });
        }
        return;
    }

    incrementMinTimer = () => {
        const updatedMin = this.state.minutes + 1;
        this.setState({ minutes: updatedMin });
    }

    incrementSecTimer = () => {
        const updatedSec = this.state.seconds >= 55 ? 0 : this.state.seconds + 5;
        this.setState({ seconds: updatedSec});
    }

    decrementMinTimer = () => {
        if(this.state.minutes === 0) return;
        const updatedMin = this.state.minutes - 1;
        this.setState({ minutes: updatedMin});
    }

    decrementSecTimer = () => {
        // const updatedSec = this.state.seconds >= 0 && this.state.seconds <= 5 ? 0 : this.state.seconds - 5;
        const { seconds } = this.state;
        let updatedSec;
        if(seconds > 0 && seconds <=5) {
            updatedSec = 0;
        } else if(seconds === 0) {
            updatedSec = 55;
        } else {
            updatedSec = seconds - 5;
        }
        this.setState({ seconds: updatedSec});
    }

    render() {
        const { minutes, seconds, isBreak, breakTimeMin, start } = this.state;
        return(
            <div className="pom-container">
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
                {isBreak ? <p className="break">Take a break :)</p> : <p className="break">Be productive :)</p>}
            </div>
        )
    }
}

export default Pomodoro;