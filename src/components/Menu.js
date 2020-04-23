import React, {Component} from 'react';
import { Typography, Link } from '@material-ui/core'
import logo from '../images/logo.png'
import styles from '../styles/Menu.css';

class Menu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {/*<img src={logo} alt={"logo"} className={'logo'}/>*/}
                <Typography className="Menu">
                    <Link href="/" className="link">
                        <img src={logo} alt={"logo"} className={'logo'}/>
                    </Link>
                    <Link href="/animals" className="link">
                        Animals
                    </Link>
                    <Link href="/bloodBanks" className="link">
                        Blood Banks
                    </Link>
                    <Link href="/bloodRequests" className="link">
                        Blood Requests
                    </Link>
                    <Link href="/clinics" className="link">
                        Clinics
                    </Link>
                    <Link href="/donations" className="link">
                        Donations
                    </Link>
                    <Link href="/medicalChecks" className="link">
                        Medical Checks
                    </Link>
                    <Link href="/staff" className="link">
                        Staff
                    </Link>
                    <Link href="/users" className="link">
                        Users
                    </Link>
                </Typography>
            </div>
        )
    }
}

export default Menu;
