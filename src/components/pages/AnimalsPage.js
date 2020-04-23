import Menu from '../Menu';
import {Component} from "react";
import React from "react";
import DynamicSelect from '../DynamicSelect'
import axios from "axios";

let arrayOfData1 = [];

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

class AnimalsPage extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedValue: 'Nothing selected'
        }
    }

    state = {

    };

    handleSelect1Change = (selectedValue) => {
        this.setState({
            select1Value: selectedValue
        });
    };

    handleSelect2Change = (selectedValue) => {
        this.setState({
            select2Value: selectedValue
        });
    };

    // getBreeds = () => {
    //     axios.get(`http://localhost:5000/api/v1/animals/breeds`)
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .then((response) => {
    //             let breedArr = [];
    //             for(let breed of response.data.data){
    //                 breedArr.push({
    //                     id: breed,
    //                     name: breed
    //                 })
    //             }
    //             this.setState({
    //                 breeds: breedArr
    //             });
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(`[getBreeds]: ${error}`);
    //         });
    // };

    // componentDidMount() {
    //     this.getBreeds();
    // }

    render() {
        return (
            <div className="AnimalsPage">
                <h1>Animals</h1>
                <h5>Вивести інформацію про тварин (Ім’я, дата народження, колір, стать), що належать до певного виду та породи.</h5>

                <div className={'selects'}>
                    <DynamicSelect className={'select1'} arrayOfData={arrayOfData1} onSelectChange={this.handleSelect1Change}/>
                    <DynamicSelect className={'select2'} arrayOfData={arrayOfData2} onSelectChange={this.handleSelect2Change} />
                </div>
                <br /><br />
                <div>
                    <p>breeds: {this.state.breeds}</p>
                    Selected value: {this.state.select1Value} & {this.state.select2Value}
                </div>
            </div>
        );
    }
}

export default AnimalsPage;
