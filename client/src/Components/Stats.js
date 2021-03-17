const Stats = (props) => {

    const onlineStatus = props.status === true ? "green" : "red";
    
    // More modification can be done later
    
    return (
        <div className="stat-box">
            <h3>First Name: {props.firstName}</h3>
            <h3>Last Name: {props.lastName}</h3>
            <h1>Statistics</h1>
            <h2 style={{color: onlineStatus}}>{props.status === true ? "Online" : "Offline"}</h2>
        </div>
    )
}

export default Stats;