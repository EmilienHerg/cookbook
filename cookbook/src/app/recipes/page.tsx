import Link from "next/link";
import { prisma } from "../lib/prisma";
import slugify from "../utils/slugify";

export default async function Page() {

    const recipes = await prisma.recipe.findMany();

    return (
        <div className="px-8 py-4">
            <h1 className="font-bold text-xl pb-4">Mes recettes</h1>
            {
                recipes.length === 0 ? (
                    <div className="pb-2 italic">Aucune recette trouvée.</div>
                ) : (
                    recipes.map((recipe) => (
                        <div key={recipe.id}>
                            <Link href={`/recipes/${slugify(recipe.name)}`} className="pb-2" >{recipe.name}</Link>
                        </div>
                    ))
                )
            }
        </div>
    )
}