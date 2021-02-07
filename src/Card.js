import React from "react";


const Card = ({name, id, email}) => {
    return (
        <div className="tc dib bg-blue hover-bg-light-blue br4 grow ma2 pa3 bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="profile_pic"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;