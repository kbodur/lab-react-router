import React from "react";
import "./OwnerList.css"

const OwnersList = ({ owners }) => {
    return (
        <main>
            <h2>Our Owners</h2>
            <ul className="owner-list">
                {owners.map((owner) => (
                    <li className="owner-name" key={owner.id}>
                        <p><span> Name: </span>{owner.firstName} {owner.lastName}</p>
                        <p><span>zip code:</span> {owner.zipCode}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default OwnersList;
