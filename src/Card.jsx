function Card(props) {
    function cardRank(){
        const rank = props.rank;

        if(rank === "legendary"){
            return "hsl(51, 83%, 65%)"
        }
        else if(rank === "rare"){
            return "hsl(204, 78%, 78%)"
        }
        else if(rank === "common"){
            return "hsla(41, 86%, 25%, 0.411)"
        }
        else{
            return "white"
        }
    }

    const styles = {
        border: "1px solid hsl(0, 0%, 80%)",
        borderRadius: "10px",
        boxShadow: "5px 5px 5px hsla(0, 0%, 0%, 0.1)",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        maxWidth: "200px",
        display: "inline-block",
        backgroundColor: cardRank()
    };

    return (<>
        <div className="card" style={styles}>
            <img className="cardImage" src={props.profile} alt="Profile Picture" />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.description}</p>
        </div>
        </>
    );
}

export default Card;