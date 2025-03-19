import { prisma } from "../lib/prisma"

export default async function Page() {

    const ingredients = await prisma.ingredient.findMany();

    return (
        <div className="px-8 py-4">
            <h1 className="font-bold text-xl pb-4">Mes ingrédients</h1>
            {
                ingredients.length === 0 ? (
                    <div className="pb-2 italic">Aucun ingrédient trouvé.</div>
                ) : (
                    ingredients.map((ingredient) => (
                        <div className="pb-2" key={ingredient.id}>{ingredient.name}</div>
                    ))
                )
            }
        </div>
    )
}