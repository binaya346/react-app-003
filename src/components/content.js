
const Content = (props) => {
    const { company } = props;
    return (
        <main>
            <div>Content View</div>
            This is my first React App!
            <div>{company}</div>
        </main>
    )
}

export default Content;