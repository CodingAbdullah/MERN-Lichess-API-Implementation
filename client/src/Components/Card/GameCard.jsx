const GameCard = (props) => {

    const keysList = Object.keys(props.data);

    const mappedList = keysList.map(item => {
        return (
            <div className="card-body">
                <div className="row">
                    <h5>{item.charAt(0).toUpperCase() + item.substring(1)}</h5>
                </div>
                <div className="row">
                    <h5>Games: {props.data[item].games}</h5>
                </div>
                <div className="row">
                    <h5>Rating: {props.data[item].rating}</h5>
                </div>
                <div>
                    <h5>
                    <div className="row">
                        Progression: <h5 style={{color: props.data[item].prog < 0 ? "red" : "green" }}>{props.data[item].prog}</h5>
                    </div></h5>
                </div>
            </div>
        );
    });

    return (
        <div className="card" style={{padding: "1.0rem", borderRadius: "1.5rem"}}>
            <h4>Game Records</h4>
            { mappedList }
        </div>
    )
}

export default GameCard;