import React, { Component } from 'react';
import './App.css';

import DynamicSelect from './components/DynamicSelect';
import HomePage from './components/pages/HomePage';
import AnimalsPage from './components/pages/AnimalsPage';
import BloodBanksPage from './components/pages/BloodBanksPage';
import BloodRequestsPage from './components/pages/BloodRequestsPage';
import ClinicsPage from './components/pages/ClinicsPage';
import DonationsPage from './components/pages/DonationsPage';
import MedicalChecksPage from './components/pages/MedicalChecksPage';
import StaffPage from './components/pages/StaffPage';
import UsersPage from './components/pages/UsersPage';

import { AddBox, Delete, Edit, Build } from '@material-ui/icons';


const color1 = '525252';
const color2 = '414141';
const color3 = '313131';
const color4 = 'ca3e47';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedValue: 'Nothing selected'
    }
  }

  handleSelectChange = (selectedValue) =>{
    this.setState({
      selectedValue: selectedValue
    });
  };

  render() {
    return (
        <div className="App">
          {/*<HomePage/>*/}

          <AnimalsPage/>
          {/*<BloodBanksPage/>*/}
          {/*<BloodRequestsPage/>*/}
          {/*<ClinicsPage/>*/}
          {/*<DonationsPage/>*/}
          {/*<MedicalChecksPage/>*/}
          {/*<StaffPage/>*/}
          {/*<UsersPage/>*/}

        </div>
    );
  }
}

export default App;
