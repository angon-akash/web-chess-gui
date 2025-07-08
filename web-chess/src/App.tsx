import { useState } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
import './App.css'

function App() {
  const [game, setGame] = useState(new Chess())

  function onPieceDrop({ sourceSquare, targetSquare }: { sourceSquare: string; targetSquare: string | null }) {
    if (!targetSquare) return false
    const next = new Chess(game.fen())
    const move = next.move({ from: sourceSquare, to: targetSquare, promotion: 'q' })
    if (move === null) return false
    setGame(next)
    return true
  }

  return (
    <div className="app">
      <h1>Web Chess</h1>
      <Chessboard options={{ position: game.fen(), onPieceDrop }} />
    </div>
  )
}

export default App
