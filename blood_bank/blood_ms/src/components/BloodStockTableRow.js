import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class BloodStockTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.stk_id}</td>
                <td>{this.props.obj.hospital_name}</td>
                <td>{this.props.obj.bld_grp}</td>
                <td>{this.props.obj.stk_num}</td>
            </tr>
        )
    }
}