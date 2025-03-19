'use server'

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma"
import timeToNumber from "../utils/timeToNumber"

export async function createRecipe(form: FormData) {

    const isFormValid = FormData.name;
    console.log(isFormValid);

    try {
        await prisma.recipe.create({
            data: {
                name: form.get('name') as string,
                nbPeople: Number(form.get('nbPeople')),
                time: timeToNumber(form.get('time'))
            }
        })

        redirect('/recipes');
    } catch (error) {
        console.log(error);
    }
}