import { useState } from "react";

export function TwitterFollowCard ({ initialIsFollowing, userName, name}){
    //Destructuración
    //devuelve un array de 2 posiciones: (valor del estado, función que nos va a permitir actualizar el estado)
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) 
    //Es equivalente a:
    //- const state = useState(false)
    //- const isFollowing = state[0]
    //- const setIsFollowing = state[1]

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    
    const handleClick = () =>{
        setIsFollowing(!isFollowing) //cambia el interruptor
    }
    return (
        //class ya es una palabra reservada, por lo que se tiene que utilizar className
        <article className="tw-followCard">  
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/twitter/${userName}`} alt="Profile Picture" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}