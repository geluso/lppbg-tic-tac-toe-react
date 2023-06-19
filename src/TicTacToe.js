import './TicTacToe.css';
import { useState } from 'react';
import { getWinLine } from './util';
import { TicTacToeCell } from './TicTacToeCell';

export const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('X');
    const [turns, setTurns] = useState(0);
    const [winLine, setWinLine] = useState(null);

    const handleClick = (index) => {
        if (winLine) {
            return;
        }

        if (board[index] !== null) {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);
        
        const newTurns = turns + 1;
        setTurns(newTurns);

        const line = getWinLine(newBoard);
        if (line) {
            console.log(turn, 'won', line);
            setWinLine(line);
            return
        }

        if (turn === 'X') {
            setTurn('O');
        } else {
            setTurn('X');
        }
    }

    const reset = () => {
        setBoard(Array(9).fill(null));
        setTurn('X');
        setTurns(0);
        setWinLine(null);
    }

    const displayPrompt = () => {
        if (turns < 9 && winLine === null) {
            return <div>{turn}'s turn</div>
        } else {
            return <div>
                <div>{winOrCats()}</div>
                <div><button onClick={reset}>reset</button></div>
            </div>
        } 
    }

    const winOrCats = () => {
        if (winLine !== null) {
            return turn + ' won!';
        } else {
            return 'CATS!';
        }
    }

    return <div>
        <div>
            <TicTacToeCell board={board} index={0} winLine={winLine} handleClick={handleClick}></TicTacToeCell>
            <TicTacToeCell board={board} index={1} winLine={winLine} handleClick={handleClick}></TicTacToeCell>
            <TicTacToeCell board={board} index={2} winLine={winLine} handleClick={handleClick}></TicTacToeCell>
        </div>
        <div>
            <TicTacToeCell board={board} index={3} winLine={winLine} handleClick={handleClick}></TicTacToeCell>
            <TicTacToeCell board={board} index={4} winLine={winLine} handleClick={handleClick}></TicTacToeCell>
            <TicTacToeCell board={board} index={5} winLine={winLine} handleClick={handleClick}></TicTacToeCell>
        </div>
        <div>
            <TicTacToeCell board={board} index={6} winLine={winLine} handleClick={handleClick}></TicTacToeCell>
            <TicTacToeCell board={board} index={7} winLine={winLine} handleClick={handleClick}></TicTacToeCell>
            <TicTacToeCell board={board} index={8} winLine={winLine} handleClick={handleClick}></TicTacToeCell>
        </div>
        {displayPrompt()}
    </div>
}