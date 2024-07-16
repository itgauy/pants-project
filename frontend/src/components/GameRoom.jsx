const GameRoom = () => {
  return (
    <>
      <div className="game-room-container">
        <div className="pants-table">
          <div className="category">P</div>
          <div className="category">A</div>
          <div className="category">N</div>
          <div className="category">T</div>
          <div className="category">S</div>
        </div>

        <div className="chat-with-timer">
          <div className="chat">Chat messages go here</div>
          <div className="timer">00:00</div>
        </div>

      </div>
    </>
  )
}

export default GameRoom