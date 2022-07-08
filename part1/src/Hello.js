const Hello = ({ name, age }) => {

    const bornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            <p>Hello {name}! You are {age} years old!</p>
            <p>So you were probably born in {bornYear()}</p>
            <br />
        </div>
    )
}

export default Hello;