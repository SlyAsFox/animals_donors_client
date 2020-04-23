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

class DonationsPage extends Component {
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
            <div className="DonationsPage">
                <h1>Donations</h1>
                <h5>Вивести інформацію про здачі крові(дата здачі, кінцевий термін зберігання, донор, лікар) за кількістю потрібної крові та групою.</h5>

                <div className={'selects'}>
                    <DynamicSelect className={'select1'} arrayOfData={arrayOfData1} onSelectChange={this.handleSelect1Change}/>
                    <DynamicSelect className={'select2'} arrayOfData={arrayOfData2} onSelectChange={this.handleSelect2Change} />
                </div>
                <br /><br />
                <div>
                    Selected value: {this.state.select1Value} & {this.state.select2Value}
                </div>
            </div>
        );
    }
}

export default DonationsPage;
