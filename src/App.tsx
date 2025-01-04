import Board from "./components/Board"


function App() {

  return (
    <div className="h-screen overflow-auto flex justify-center items-center">
      <div className="h-screen w-full flex items-center max-w-[650px]">
        <Board />
      </div>
    </div>
  )
}

export default App
