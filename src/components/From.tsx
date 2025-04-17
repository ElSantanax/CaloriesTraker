import { Dispatch, useState } from "react"
import { Activity } from "../types"
import { categories } from "../data/db"
import { ActivityActions } from "../reducers/activity-reducers"

type FromProps = {
    dispatch: Dispatch<ActivityActions>
}

const initialState = {
    category: 1,
    name: '',
    calories: 0
}

export default function From({ dispatch }: FromProps) {

    const [activity, setActivity] = useState<Activity>(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: "save-activity", payload: { newActivity: activity } })
        setActivity(initialState)
    }

    return (
        <form
            className="space-y-5 bg-white p-5 rounded-lg shadow"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría</label>
                <select
                    className="border border-slate-300 bg-white rounded-lg w-full p-2"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad</label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 bg-white rounded-lg w-full p-2"
                    placeholder="Ej. Alimentos consumidos o ejercicios realizados"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorías</label>
                <input
                    id="calories"
                    type="number"
                    className="border border-slate-300 bg-white rounded-lg w-full p-2"
                    placeholder="Calorías, Ej. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>
            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
                disabled={!isValidActivity()}
            />
        </form >
    )
}
