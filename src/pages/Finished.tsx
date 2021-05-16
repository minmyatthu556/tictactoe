interface Props {
  name: string | null

  handleRestart(): void
}

const Finished = (props: Props) => {
  const { name, handleRestart } = props

  return (
    <div className="w-full max-w-xl mx-auto">
      <h1 className="text-center uppercase tracking-wide font-bold py-3 mb-3.5 text-2xl text-blue-500">
        {name && `Player ${name} won the game`}
        {!name && "It's a tie"}
      </h1>
      <div className="text-center">
        <button
          className="w-28 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
            rounded focus:outline-none focus:shadow-outline transform hover:-translate-y-0.5
            transition uppercase tracking-wider shadow-md"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
    </div>
  )
}

export default Finished
