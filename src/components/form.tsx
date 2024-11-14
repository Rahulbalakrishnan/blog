import createPost from "@/actions/actions";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Form() {
    return (

        <form className='flex flex-col max-w-[400px] mx-auto gap-2 my-10 content-center '
              action={createPost}>
            <input
                type='text'
                name='title'
                placeholder='Title'
                className='border rounded px-3 '
                required
            />
            <textarea name='body'
                      placeholder='Write a post...'
                      className='border rounded px-3 py-2'
                      rows={6}
                      required

            />
            <button className=' bg-blue-500 text-white p-1 rounded'>
                Submit
            </button>
            <LogoutLink className=' p-1 rounded'>Logout</LogoutLink>
        </form>
    );
}