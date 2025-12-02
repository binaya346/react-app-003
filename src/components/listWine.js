import { useEffect, useState } from "react";
import Styled from "./listWine.module.css";

const ListWine = () => {
    const [wines, setWines] = useState([]);

    const getWines = async () => {
        try {
            const url = "https://api.sampleapis.com/wines/reds";
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setWines(data);
        } catch (error) {
            console.error("Error fetching wines:", error);
        }
    }

    useEffect(() => {
        getWines();
    },[]);

    return (
        <>
            <h1 className={Styled.heading}>Here will be the list of wines.</h1>
            <div className={Styled.list}>
                {wines.map((wine) => (
                    <div className={Styled.item}>
                        <img src={wine.image} alt="Wine 1" />
                        <h3>{wine.wine}</h3>
                        <div className={Styled.rating}>
                            <span>Average: {wine.rating?.average}</span>
                            <span>Reviews: {wine.rating?.reviews}</span>
                        </div>
                        <div className={Styled.location}>{wine.location}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListWine