'use client'

import { createRecipe } from "@/app/actions/recipe";

export default function Page() {

    return (
        <div className="px-8 py-4">
            <h1 className="font-bold text-xl pb-4">Ajouter une recette</h1>
            <form action={createRecipe} className="flex flex-col items-start justify-center gap-4">
                <input type="text" name="name" placeholder="Nom de la recette" className="border-b-1 py-1 px-2"/>
                <input type="number" name="nbPeople" placeholder="Nombre de personnes" className="border-b-1 py-1 px-2" />
                <input type="time" name="time" className="py-1 px-2" />
                <button type="submit" className="bg-black text-white py-1 px-3 font-bold rounded-sm">Ajouter</button>
            </form>
        </div>
    )
}