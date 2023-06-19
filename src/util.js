// Indexes on the board
// 0 1 2
// 3 4 5
// 6 7 8

const winLines = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // diagonally top left to bottom right
    [0, 4, 8],

    // diagonally bottom left to top right
    [6, 4, 2]
]

export const getWinLine = (board) => {
    for (const line of winLines) {
        const mark1 = board[line[0]];
        const mark2 = board[line[1]];
        const mark3 = board[line[2]];

        if (mark1 !== null && mark1 === mark2 && mark2 === mark3) {
            return line;
        }
    }
    return null;
}