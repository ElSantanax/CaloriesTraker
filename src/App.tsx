import From from "./components/From"

function App() {

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h2 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorías
          </h2>
          <button>
            Reinicar
          </button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <From />
        </div>
      </section >
    </>
  )
}

export default App
