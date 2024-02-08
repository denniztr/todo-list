import Link from "next/link";

export default function Page() {
    return (
        <>
            <header className='flex justify-between items-center'>
                <h1 className='text-2xl tracking-wider font-mono font-semibold'>New</h1>
            </header>
            <form className='flex gap-2 flex-col' >
                <input
                    className='text-xs tracking-wide border border-white bg-transparent rounded-md p-2 focus:outline-none focus:border-slite-100 my-10' type="text" name="title" />
                <div className='flex gap-2 justify-end'>
                    <Link
                        className='text-xs tracking-wide border-2 rounded-md px-2 py-1 bg-transparent hover:bg-zinc-50/10 focus-within:bg-zinc-50/10 outline-none'
                        href='..'
                    >
                        Cancel
                    </Link>
                    <button
                        className='text-xs tracking-wide border-2 rounded-md px-2 py-1 bg-transparent hover:bg-zinc-50/10 focus-within:bg-zinc-50/10 outline-none'
                        type='submit'
                    >
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}