import FeaturedBook from '../components/featuredBook';
import Header from '../components/header'
import HeroSection from '../components/herosection';
import LatestAuthors from '../components/latestAuthors';
import KeyFeatures from '../components/keyFeatures';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <FeaturedBook />
            <LatestAuthors />
            <KeyFeatures />
        </>
    );
};

export default Home;