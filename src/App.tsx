import Board from "./components/Board"


function App() {

  return (
    <div className="h-screen overflow-auto flex justify-center items-center">
      <div className="h-screen w-[450px] md:w-[650px] flex items-center">
        <Board />
      </div>
    </div>
  )
}

export default App
