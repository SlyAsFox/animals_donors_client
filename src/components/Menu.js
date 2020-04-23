import React, {Component} from 'react';
import { Typography, Link } from '@material-ui/core';
import styles from '../styles/Menu.css';

class Menu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Typography className="Menu">
                    <Link href="#" className="link">
                        Table1
                    </Link>
                    <Link href="#" className="link">
                        Table2
                    </Link>
                    <Link href="#" className="link">
                        Table3
                    </Link>
                    <Link href="#" className="link">
                        Table4
                    </Link>
                    <Link href="#" className="link">
                        Table5
                    </Link>
                    <Link href="#" className="link">
                        Table6
                    </Link>
                    <Link href="#" className="link">
                        Table7
                    </Link>
                    <Link href="#" className="link">
                        Table8
                    </Link>
                    <Link href="#" className="link">
                        Table9
                    </Link>
                </Typography>
            </div>
        )
    }
}

export default Menu;
