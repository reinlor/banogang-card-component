import placeholder from './assets/placeholder.png'
import placeholderSound from './assets/sound/placeholder.mp3'

function Card({ profile = placeholder, name = "Agent",
    description = "Wlang Title", ranks = "", 
    sounds = placeholderSound}) {
    function cardRank() {
        const rank = ranks;

        if (rank === "legendary") {
            return "hsl(51, 83%, 65%)"
        }
        else if (rank === "epic") {
            return "hsl(276, 63.30%, 71.20%)"
        }
        else if (rank === "rare") {
            return "hsl(204, 78%, 78%)"
        }
        else if (rank === "common") {
            return "hsla(41, 86%, 25%, 0.411)"
        }
        else {
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

    function cardSound() {
        const sound = new Audio(sounds);
        sound.play();
    }

    return (<>
        <div className="card" style={styles} onClick={cardSound}>
            <img className="cardImage" src={profile} alt="Profile Picture" />
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{description}</p>
        </div>
    </>
    );
}

export default Card;