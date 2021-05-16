import { useState, useMemo, FormEvent } from 'react'

interface Props {
  handleStart(players: string[]): void
}

const Start = (props: Props) => {
  const { handleStart } = props

  const [players, setPlayers] = useState(['', ''])

  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players]
    newPlayers.splice(index, 1, event.currentTarget.value)
    setPlayers(newPlayers)
  }

  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players]
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canStart) return
    handleStart(players)
  }

  return (
    <div className="w-full px-8 sm:max-w-xl mx-auto">
      <h1
        className="text-center uppercase tracking-wide font-bold
      bg-blue-500 text-white rounded py-3 mb-14 text-2xl"
      >
        Tic Tac Toe
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div>
          <label
            htmlFor="player1"
            className="block text-gray-700 text-lg font-semibold mb-2"
          >
            Player 1: X
          </label>
          <input
            placeholder="Enter the player 1 name"
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="player1"
            value={players[0]}
            onInput={(e) => handleInput(e, 0)}
          />
        </div>
        <div>
          <label
            htmlFor="player2"
            className="block text-gray-700 text-lg font-semibold mb-2"
          >
            Player 2: O
          </label>
          <input
            placeholder="Enter the player 2 name"
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="player2"
            value={players[1]}
            onInput={(e) => handleInput(e, 1)}
          />
        </div>
        <div className="text-center">
          <button
            className="w-28 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
            rounded focus:outline-none focus:shadow-outline transform hover:-translate-y-0.5
            transition uppercase tracking-wider shadow-md"
            type="submit"
            disabled={!canStart}
          >
            Start
          </button>
        </div>
      </form>
    </div>
  )
}

export default Start
