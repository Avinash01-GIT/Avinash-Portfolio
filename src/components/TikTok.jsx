import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGamepad, FaRedo } from "react-icons/fa";

const initialBoard = Array(9).fill(null);

const TikTok = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (currentBoard) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        return;
      }
    }

    if (currentBoard.every((square) => square !== null) && !winner) {
      setWinner("Draw");
    }
  };

  useEffect(() => {
    checkWinner(board);
  }, [board]);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    // AI move after player move
    if (isXNext) {
      setTimeout(() => {
        const availableSquares = newBoard.reduce(
          (acc, value, index) => (value === null ? acc.concat(index) : acc),
          []
        );

        if (availableSquares.length > 0 && !winner) {
          const randomIndex = Math.floor(Math.random() * availableSquares.length);
          const updatedBoard = [...newBoard];
          updatedBoard[availableSquares[randomIndex]] = "O";
          setBoard(updatedBoard);
          setIsXNext(true);

          // Check winner after AI move
          checkWinner(updatedBoard);
        }
      }, 500);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };



  return (
    <div className="pb-4 flex justify-center">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white flex text-center pb-1 ml-1">
            Tic Tac Toe
            <FaGamepad className="ml-2 text-3xl text-blue-300" />
          </h2>
          {winner && (
            <div className="text-center text-lg font-semibold mb-4 text-white">
              {winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}
            </div>
          )}
          <div className="grid grid-cols-3 gap-2">
            {board.map((value, index) => (
              <button
                key={index}
                className="w-12 h-12 bg-gray-700 text-white flex items-center justify-center text-xl font-bold rounded-md hover:bg-gray-600 transition-colors"
                onClick={() => handleClick(index)}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="text-center my-4 flex justify-center gap-4">
            <button
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-900 transition-colors"
              onClick={resetGame}
            >
              Restart <FaRedo className="inline ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TikTok;
