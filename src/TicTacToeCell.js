const winClass = (winLine, index) => {
    if (winLine && winLine.includes(index)) {
        return "win";
    }
    return "";
}

export const TicTacToeCell = ({board, index, winLine, handleClick}) => {
    return <div className={"cell " + winClass(winLine, index)} onClick={() => handleClick(index)}>
        {board[index] || '_'}
    </div>
}