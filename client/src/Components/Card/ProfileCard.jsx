const ProfileCard = (props) => {
    const { bio, country, firstName, lastName, location } = props.information;    

    return (
        <div className="card" style={{padding: "1.0rem", borderRadius: "1.5rem"}}>
            <div className="card-body">
                <h4>About Me</h4>
                <div className="row">
                    <h5>First Name: {firstName}</h5>
                </div>
                <div className="row">
                    <h5>Last Name: {lastName}</h5>
                </div>
                <div className="row">
                    <h5>Location: {location}</h5>
                </div>
                <div className="row">
                    <h5>Bio: {bio}</h5>
                </div>
                <div className="row">
                    <h5>Country: {country}</h5>
                </div>
                <div className="row">
                    <h5>Completion Rate: {props.rate}%</h5>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;