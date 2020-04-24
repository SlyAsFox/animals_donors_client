import {Component} from "react";
import React from "react";
import DynamicSelect from '../DynamicSelect'
import axios from "axios";
import Menu from '../Menu';
import Table from "../tables/AnimalsTable";

class AnimalsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            breeds: [],
            types: []
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

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/animals/breeds`)
            .then((response) => {
                const breeds = [];
                response.data.forEach((breed) => {
                    breeds.push({
                        id: breed,
                        name: breed
                    })
                });
                this.setState({
                    breeds: breeds
                })
            });

        axios.get(`http://localhost:5000/api/v1/animals/types`)
            .then((response) => {
                const types = [];
                response.data.forEach((type) => {
                    types.push({
                        id: type,
                        name: type
                    })
                });
                this.setState({
                    types: types
                })
            })
    }

    render() {
        return (
            <div className="AnimalsPage">
                <Menu />
                <h1>Animals</h1>
                <h5>Вивести інформацію про тварин (Ім’я, дата народження, колір, стать), що належать до певного виду та породи.</h5>

                <div className={'selects'}>
                    <DynamicSelect className={'select1'} arrayOfData={this.state.types} onSelectChange={this.handleSelect1Change}/>
                    <DynamicSelect className={'select2'} arrayOfData={this.state.breeds} onSelectChange={this.handleSelect2Change} />
                </div>
                <br /><br />

                <div>
                    {/*{this.state.breeds.map( (breed, key) => {*/}
                        {/*return <p key={key}>{breed.name}</p>*/}
                    {/*})}*/}
                    {/*<p>breeds: {this.state.breeds}</p>*/}
                    Selected value: {this.state.select1Value} & {this.state.select2Value}
                </div>
                <Table/>
            </div>
        );
    }
}

export default AnimalsPage;
