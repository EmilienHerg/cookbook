'use server'

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma"

export default async function createRecipeAction(recipe: {
    name: string,
    nbPeople: number,
    time: number
}) {
    try {
        await prisma.recipe.create({
            data: {
                name: recipe.name,
                nbPeople: recipe.nbPeople,
                time: recipe.time
            }
        })

        redirect('/recipes');

    } catch(error) {
        return {
            error: "Error while reacting the recipe."
        }
    }
}