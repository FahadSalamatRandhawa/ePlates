import Link from "next/link";

export default function Header(){
    return(
        <div className=" w-full h-[100px] flex bg-yellow justify-between px-[30px] items-center">
            <h2>Icon here</h2>

            <div className=" flex gap-3">
                <Link href="/">Home</Link>
                <Link href="platebuilder">Plate Builder</Link>
            </div>

            <div className=" flex gap-3">
                <p>Navigation</p>
                <p>Cart</p>
            </div>
        </div>
    )
}