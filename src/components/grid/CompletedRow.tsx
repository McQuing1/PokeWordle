import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { solution } from '../../lib/words'

type Props = {
  guess: string
}

export const CompletedRow = ({ guess }: Props) => {
  const statuses = getGuessStatuses(guess)

  if (guess.length < solution.length) {
    guess = guess + ' '
  }
  if (guess.length < solution.length) {
    guess = guess + ' '
  }
  if (guess.length < solution.length) {
    guess = guess + ' '
  }
  if (guess.length < solution.length) {
    guess = guess + ' '
  }
  if (guess.length < solution.length) {
    guess = guess + ' '
  }
  if (guess.length < solution.length) {
    guess = guess + ' '
  }
  if (guess.length < solution.length) {
    guess = guess + ' '
  }
  if (guess.length < solution.length) {
    guess = guess + ' '
  }
  return (
    <div className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[i]} />
      ))}
    </div>
  )
}
