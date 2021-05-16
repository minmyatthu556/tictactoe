import React from 'react'
import Start from './pages/Start'
import Finished from './pages/Finished'
import Game from './pages/Game'
import useTicTacToe from './hooks/useTicTacToe'

function App() {
  const game = useTicTacToe()
  return (
    <div className="bg-gray-100 h-screen pt-8">
      {game.status === 'created' && <Start handleStart={game.handleStart} />}
      {game.status === 'finished' && (
        <Finished name={game.winner} handleRestart={game.handleRestart} />
      )}
      {game.status === 'started' && (
        <Game board={game.board} handleClick={game.handleClick} />
      )}
      <div className="absolute bottom-0 py-3 text-gray-300 w-full">
        <p className="text-center ">by MMT</p>
      </div>
    </div>
  )
}

export default App
