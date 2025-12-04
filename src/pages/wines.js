import ListWine from "../components/listWine";
import Navbar from "../components/navbar";

const Wines = () => {
    return (
        <div>
            <Navbar />
            <h1>Wines Page</h1>
            <p>Explore our selection of fine wines.</p>
            <ListWine />
        </div>
    );
};

export default Wines;