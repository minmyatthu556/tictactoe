interface Props {
  index: number
  value: string

  handleClick(index: number): void
}

const Square = (props: Props) => {
  const { index, value, handleClick } = props
  return (
    <button
      className="box-border h-20 w-20 border-4 rounded-md text-3xl
      bg-blue-400 shadow-md flex justify-center items-center text-blue-900 md:h-32 md:w-32 md:text-6xl"
      onClick={() => handleClick(index)}
    >
      {value}
    </button>
  )
}
export default Square
