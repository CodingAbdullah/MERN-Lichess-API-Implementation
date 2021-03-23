import { Component } from 'react';
import StatusCard from '../Components/Card/StatusCard.jsx';
import ProfileCard from './Card/ProfileCard.jsx';
import GameCard from './Card/GameCard.jsx';

class Test extends Component {

    constructor(props) {
        super(props);

            this.state = {
                error: null,
                isLoaded: false,
                userData: []
            };
        }

        componentDidMount = () => {

            const options = {
                headers : {
                    "accepts": "application/json",
                    "content-type" : 'application/json',
                    "Authorization" : "Bearer <Token Goes Here>"  // Concatenate token value
                }
            }

        fetch("/api/account", options)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                userData: Array(result)
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }
    
    render = () => {
        const { error, isLoaded, userData } = this.state;

        const arrayUserData = Object(userData[0]).username;
        const online = Object(userData[0]).online;
        const profile = Object(userData[0]).profile;
        const data = Object(userData[0]).perfs;
        const completion = Object(userData[0]).completionRate;

        if (error) {
          return <div>Error: {error.message}</div>;
        } 
        else if (!isLoaded) {
          return <div>Loading...</div>;
        } 
        else {
          return (
            <span>
              <StatusCard username={arrayUserData} status={online} />
              <ProfileCard information={profile} rate={completion} />
              <GameCard data={data} />
            </span>
          );
        }
    }
}

export default Test;