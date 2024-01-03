import { TwitterFollowCard } from "./TwitterFollowCard"

export function App (){
    // const roier = { initialIsFollowing: true, userName:"Roiereal", name:"Roier"}
    const users = [
        {
            userName: 'EstailusG',
            name: 'Estalius',
            initialIsFollowing: false
        },
        {
            userName: 'cellbit',
            name: 'rafael lange',
            initialIsFollowing: true
        },
        { 
            userName:"Roiereal", 
            name:"Roier",
            initialIsFollowing: true
        }
    ]
    return (
        <div className="App">
            {/* <TwitterFollowCard initialIsFollowing={false} userName="EstailusG" name="Estalius" />
            <TwitterFollowCard initialIsFollowing userName="cellbit" name="rafael lange" />
            <TwitterFollowCard {...roier} /> */}
            {users.map(({userName, name, initialIsFollowing}) => (
                <TwitterFollowCard
                    name={userName}
                    userName={userName}
                    initialIsFollowing={initialIsFollowing}
                >
                    {name}
                </TwitterFollowCard>
            ))}

        </div>
    )
}