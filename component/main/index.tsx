import { useSession, signOut } from "next-auth/react"

const Main = () => {
    const { data: session } = useSession()

    return (
        <>
            {/* <div>{session.user.name}</div>  */}
            <button onClick={() => signOut()}>Log out</button>
        </>
    )

}

export default Main