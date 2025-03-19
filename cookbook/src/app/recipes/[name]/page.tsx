import { prisma } from "@/lib/prisma"

export default async function Page({ params }: { params: Promise<{ name: string }> }) {

    const { name } = await params

    const recipe = await prisma.recipe.findUnique({
        where: {
            name: name.toLowerCase()
        }
    });

    if (!recipe) {
        return <div>Recette introuvable</div>
    }

    return (
        <div>{name}</div>
    )
}