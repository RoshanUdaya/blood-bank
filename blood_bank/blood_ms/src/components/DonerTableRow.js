import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class DonerTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.donor_id}</td>
                <td>{this.props.obj.donor_name}</td>
                <td>{this.props.obj.user_name}</td>
                <td>{this.props.obj.donor_nic}</td>
                <td>{this.props.obj.donor_bldgroup}</td>
                <td>{this.props.obj.donor_age}</td>
                <td>{this.props.obj.donor_sex}</td>
                <td>{this.props.obj.donor_mobile}</td>
                <td>{this.props.obj.donor_add}</td>
                <td>{this.props.obj.donated_date}</td>
                <td>{this.props.obj.donated_place}</td>
                <td>{this.props.obj.tested_deseases}</td>
            </tr>
        )
    }
}
