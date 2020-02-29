import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }

    renderMessage(correct, gameWon, clear = false) {
        let message, className
        if (clear) {
            className = ''
        }
        else if (correct === undefined) {
            message = 'Click an image to begin'
            className = ''
        } else {
            message = gameWon ? 'You won the game!!!' : (correct ? 'You guessed correctly!' : 'You guessed incorrectly')
            className = correct ? 'correct' : 'incorrect'
        }

        window.clearTimeout(this.timeout)
        if (!clear & correct !== undefined) {
            this.timeout = window.setTimeout(this.renderMessage, gameWon ? 3000 : 1000, gameWon ? undefined : correct, false, true)
        }
        return <li key={Math.random()} className={className}>{message}</li>
    }

    render() {
        return (
            <nav className="pinned">
                <div>
                    <ul className="center navList">
                        <li className="logo">Clicky Game</li>
                        {this.renderMessage(this.props.correct, this.props.gameWon)}
                        <li>Score: {this.props.score} | High Score: {this.props.highScore}</li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Nav