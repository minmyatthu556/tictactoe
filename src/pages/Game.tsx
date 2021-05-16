import Square from '../components/Square'

interface Props {
  board: string[]

  handleClick(index: number): void
}

const Game = (props: Props) => {
  const { board, handleClick } = props
  const styles = {
    board: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      width: '300px',
      margin: 'auto',
      marginTop: '5em',
    },
  }
  return (
    <div style={styles.board} className="px-8">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  )
}
export default Game
