import { useReducer } from "react"
import From from "./components/From"
import { activityReducer, initialState } from "./reducers/activity-reducers"
import ActivityList from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between px-5">
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
          <From
            dispatch={dispatch}
          />
        </div>
      </section >

      <section className=" p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
        />
      </section>

    </>
  )
}

export default App
