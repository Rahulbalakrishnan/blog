import prisma from "@/lib/db";
import {notFound} from "next/navigation";

export default async function Page({params}: { params: { id: string } }) {

    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id),
        },
    })

    if (!post) {
        notFound()
    }
    return (
        <main className='pt-24 px-7 text-center'>
            <h1 className='text-5xl mb-7 font-semibold'>{post.title}</h1>
            <p className='max-w-[700px] mx-auto'>{post.body}</p>

        </main>
    );
}