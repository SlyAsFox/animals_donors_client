import {Component} from "react";
import React from "react";
import DynamicSelect from '../DynamicSelect'
import axios from "axios";
import Menu from '../Menu';

let arrayOfData1 = [
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

class AnimalsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            breeds: []
        }
    }

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
    //             return response.data
    //         })
    //         // .then((response) => {
    //             // let breedArr = [];
    //             // for(let breed of response.data){
    //             //     breedArr.push({
    //             //         id: breed,
    //             //         name: breed
    //             //     })
    //             // }
    //         // })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(`[getBreeds]: ${error}`);
    //         });
    // };

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/animals/breeds`)
            .then((response) => {
                const breeds = [];
                response.data.forEach((breed, key ) => {
                    breeds.push({
                        id: key,
                        name: breed
                    })
                });
                this.setState({
                    breeds: breeds
                })
            })
    }

    arr = ['1', '2'];

    render() {
        // console.log(this.state.breeds);
        return (
            <div className="AnimalsPage">
                <Menu />
                <h1>Animals</h1>
                <h5>Вивести інформацію про тварин (Ім’я, дата народження, колір, стать), що належать до певного виду та породи.</h5>

                <div className={'selects'}>
                    <DynamicSelect className={'select1'} arrayOfData={this.state.breeds} onSelectChange={this.handleSelect1Change}/>
                    <DynamicSelect className={'select2'} arrayOfData={arrayOfData2} onSelectChange={this.handleSelect2Change} />
                </div>
                <br /><br />

                <div>
                    {this.state.breeds.map( (breed, key) => {
                        return <p key={key}>{breed.name}</p>
                    })}
                    {/*<p>breeds: {this.state.breeds}</p>*/}
                    Selected value: {this.state.select1Value} & {this.state.select2Value}
                </div>
            </div>
        );
    }
}

export default AnimalsPage;
