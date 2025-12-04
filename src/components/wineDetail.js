import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Styled from "./listWine.module.css";

const WineDetail = () => {
    const [wine, setWine] = useState({ wine: "", image: "", rating: { average: "", reviews: "" }, location: "" });

    const { id } = useParams();

    const getWineById = async () => {
        try {
            const url = `https://api.sampleapis.com/wines/reds/${id}`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            setWine(data);
        } catch (error) {
            console.error("Error fetching wines:", error);
        }
    }

    useEffect(() => {
        getWineById();
    }, [id]);

    return (
        <div>
            <h2>Wine Detail Page</h2>
            <p>Details about a specific wine will be displayed here.</p>
            <div className={Styled.item}>
                <img src={wine.image} alt="Wine 1" />
                <h3>{wine.wine}</h3>
                <div className={Styled.rating}>
                    <span>Average: {wine.rating?.average}</span>
                    <span>Reviews: {wine.rating?.reviews}</span>
                </div>
                <div className={Styled.location}>{wine.location}</div>
            </div>
            <Link to={`/wines/${parseInt(id) + 1}`}>Next</Link> |
            <Link to="/wines">Back to Wines List</Link>
        </div>
    );
}

export default WineDetail;