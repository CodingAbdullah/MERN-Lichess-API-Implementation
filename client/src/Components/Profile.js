import { Component } from 'react';
import Title from '../Components/Title';
import Stats from '../Components/Stats';

// Setting values for account information
class Profile extends Component {

    constructor(props){
        super(props);

        // Set initial state to empty/null
        this.state = {
            accountUserName: "",
            firstName: "",
            lastName: "",
            games: {},
            stats: {},
            status: null
        }
    }

    componentDidMount = () => {

        // Fetch to call node server api endpoint which then calls lichess API endpoint to fetch data
        fetch("http://localhost:9000/") 
        .then(res => res.json())
        .then(response => {
            console.log(response.data.username);
            const { username, perfs, profile, count, online } = response.data;
            
            // Populate fields with corresponding values
            this.setState({ accountUserName: username, firstName : profile.firstName,
            lastName: profile.lastName, games: perfs, stats: count, status: online });
        })
        .catch(err => {
            console.log("There was an error fetching data " + err);
        })
    }

    // Presenting the status of lichess account information 
    render = () => {
        return (
            <div className="profile">
                <Title name={ this.state.accountUserName } />
                <Stats firstName={this.state.firstName} lastName={this.state.lastName} games={this.state.games} stats={this.state.stats} status={this.state.status} />
            </div>
        )
    }
}

export default Profile;