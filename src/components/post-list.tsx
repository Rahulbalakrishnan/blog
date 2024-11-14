import Link from "next/link";
import React from "react";
import prisma from "@/lib/db";

export default async function PostList() {

    const posts = await prisma.post.findMany()

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li className='p-2' key={post.id}>
                            <Link href={`/posts/${post.id}`}> {post.title} </Link>
                        </li>))
                }
            </ul>
        </div>
    );
}

