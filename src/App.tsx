import { useReducer, useEffect, useMemo } from "react"
import From from "./components/From"
import { activityReducer, initialState } from "./reducers/activity-reducers"
import ActivityList from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between px-5 sm:px-0 items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorías
          </h1>
          <button
            className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
            disabled={!canRestartApp}
            onClick={() => dispatch({ type: 'restart-app' })}
          >
            Reinicar
          </button>
        </div>
      </header >

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <From
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section >

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>

    </>
  )
}

export default App
