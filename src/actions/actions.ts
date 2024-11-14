'use server'

import prisma from "@/lib/db";
import {revalidatePath} from "next/cache";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function createPost(formData: FormData) {


    // Auth Check
    const {isAuthenticated} = getKindeServerSession();
    if (!(await isAuthenticated())) {
        redirect('/api/auth/login');
    }


    // Validate the FormData here rather passing the data type


    const title = formData.get('title') as string
    const body = formData.get('body') as string

    await prisma.post.create({
        data: {
            title,
            body
        }
    })

    revalidatePath('/posts')
}