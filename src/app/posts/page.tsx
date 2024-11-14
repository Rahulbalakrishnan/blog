import PostList from "@/components/post-list";
import {Suspense} from "react";

export default async function Page() {


    return (
        <main className='text-center pt-12 px-5'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-5'>
                All Posts
            </h1>
            <Suspense fallback={"loading"}>
                <PostList/>
            </Suspense>

        </main>
    );
}