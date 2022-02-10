import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT, SPACE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  onSpace: (value: string) => void
  guesses: string[]
}

export const Keyboard = ({
  onChar,
  onDelete,
  onSpace,
  onEnter,
  guesses,
}: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1) {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="1" onClick={onClick} status={charStatuses['1']} />
        <Key value="2" onClick={onClick} status={charStatuses['2']} />
        <Key value="3" onClick={onClick} status={charStatuses['3']} />
        <Key value="4" onClick={onClick} status={charStatuses['4']} />
        <Key value="5" onClick={onClick} status={charStatuses['5']} />
        <Key value="6" onClick={onClick} status={charStatuses['6']} />
        <Key value="7" onClick={onClick} status={charStatuses['7']} />
        <Key value="8" onClick={onClick} status={charStatuses['8']} />
        <Key value="9" onClick={onClick} status={charStatuses['9']} />
        <Key value="0" onClick={onClick} status={charStatuses['0']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="Q" onClick={onClick} status={charStatuses['Q']} />
        <Key value="W" onClick={onClick} status={charStatuses['W']} />
        <Key value="E" onClick={onClick} status={charStatuses['E']} />
        <Key value="R" onClick={onClick} status={charStatuses['R']} />
        <Key value="T" onClick={onClick} status={charStatuses['T']} />
        <Key value="Y" onClick={onClick} status={charStatuses['Y']} />
        <Key value="U" onClick={onClick} status={charStatuses['U']} />
        <Key value="I" onClick={onClick} status={charStatuses['I']} />
        <Key value="O" onClick={onClick} status={charStatuses['O']} />
        <Key value="P" onClick={onClick} status={charStatuses['P']} />
        <Key value="Å" onClick={onClick} status={charStatuses['Å']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="A" onClick={onClick} status={charStatuses['A']} />
        <Key value="S" onClick={onClick} status={charStatuses['S']} />
        <Key value="D" onClick={onClick} status={charStatuses['D']} />
        <Key value="F" onClick={onClick} status={charStatuses['F']} />
        <Key value="G" onClick={onClick} status={charStatuses['G']} />
        <Key value="H" onClick={onClick} status={charStatuses['H']} />
        <Key value="J" onClick={onClick} status={charStatuses['J']} />
        <Key value="K" onClick={onClick} status={charStatuses['K']} />
        <Key value="L" onClick={onClick} status={charStatuses['L']} />
        <Key value="Ø" onClick={onClick} status={charStatuses['Ø']} />
        <Key value="Æ" onClick={onClick} status={charStatuses['Æ']} />
        <Key value="'" onClick={onClick} status={charStatuses["'"]} />
      </div>
      <div className="flex justify-center mb-1">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key value="Z" onClick={onClick} status={charStatuses['Z']} />
        <Key value="X" onClick={onClick} status={charStatuses['X']} />
        <Key value="C" onClick={onClick} status={charStatuses['C']} />
        <Key value="V" onClick={onClick} status={charStatuses['V']} />
        <Key value="B" onClick={onClick} status={charStatuses['B']} />
        <Key value="N" onClick={onClick} status={charStatuses['N']} />
        <Key value="M" onClick={onClick} status={charStatuses['M']} />
        <Key value="." onClick={onClick} status={charStatuses['.']} />
        <Key value="-" onClick={onClick} status={charStatuses['-']} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
      <div className="flex justify-center mb-2">
        <Key width={300} value=" " onClick={onClick}>
          {SPACE_TEXT}
        </Key>
      </div>
    </div>
  )
}
