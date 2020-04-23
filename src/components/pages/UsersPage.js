import {Component} from "react";
import React from "react";
import DynamicSelect from '../DynamicSelect'

const arrayOfData1 = [
    {
        id: 'All',
        name: 'All'
    },
    {
        id: 'Jerry',
        name: 'Jerry'
    },
    {
        id: 'Elaine',
        name: 'Elaine'
    },
    {
        id: 'Kramer',
        name: 'Kramer'
    },
    {
        id: 'George',
        name: 'George'
    }
];

const arrayOfData2 = [
    {
        id: 'All',
        name: 'All'
    },
    {
        id: 'Jerry',
        name: 'Jerry'
    },
    {
        id: 'Elaine',
        name: 'Elaine'
    },
    {
        id: 'Kramer',
        name: 'Kramer'
    },
    {
        id: 'George',
        name: 'George'
    }
];

class UsersPage extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedValue: 'Nothing selected'
        }
    }

    state = {

    };

    handleSelect1Change = (selectedValue) =>{
        this.setState({
            select1Value: selectedValue
        });
    };

    handleSelect2Change = (selectedValue) =>{
        this.setState({
            select2Value: selectedValue
        });
    };
    render() {
        return (
            <div className="UsersPage">
                <h1>Users</h1>
                <h5>Вивести інформацію про користувачів (ПІБ, місто проживання, стать, дата народження, номер телефону) за певною електронною адресою та мають більше 1 тварини.</h5>

                <input type="text"/>
            </div>
        );
    }
}

export default UsersPage;
