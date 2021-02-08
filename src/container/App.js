import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return <h1>LOADING....</h1>
        }else {
            return(
                <div className="tc">
                    <h1 className="f1">RoboDost</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={ filteredRobots } />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;