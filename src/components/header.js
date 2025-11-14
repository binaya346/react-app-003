import Navbar from './navbar';

const Header = (props) => {
    const { top, main, company } = props;
    const number = 2;


    return (
        <header>
            <div>{top} &nbsp; &nbsp; &nbsp; {company}</div>
            <div>{main}</div>
            <div>{number}</div>
            <Navbar />
        </header>
    )
}

export default Header;