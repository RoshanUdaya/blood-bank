import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class PatientTableRow extends Component {
    
    render() {
        var nic = this.props.obj.pat_nic;
        // console.log(nic);
        function between(x, min, max) {
            return [x >= min && x <= max , x-min];
            }
        function Days(sex){
        
        var nums = [0,31,60,91,121,152,182,213,244,274,305,335,367];
            
            for(var i =0; nums.length>i;i++){
            if(between(sex,nums[i],nums[i+1])[0]){
                var day = between(sex,nums[i],nums[i+1])[1];
                var month;
                if(i==0){
                month = '01';
                }else if(i==1){
                month ='02';
                }
                else if(i==2){
                month ='03';
                }
                else if(i==3){
                month ='04';
                }
                else if(i==4){
                month ='05';
                }
                else if(i==5){
                month ='06';
                }
                else if(i==6){
                month ='07';
                }
                else if(i==7){
                month ='08';
                }
                else if(i==8){
                month ='09';
                }
                else if(i==9){
                month ='10';
                }else if(i==10){
                month ='11';
                }else if(i==11){
                month ='12';
                }
                return [month,day];
            }
            }
        }

        function getAge(DOB) {
            var today = new Date();
            var birthDate = new Date(DOB);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age = age - 1;
            }

            return age;
        }
            
        var pat_sex; 
        var pat_age;
        if(nic.length==10){
        var year = "19" + nic.slice(0,2);
        var sex = nic.slice(2,5);
        var month,day,DOB,pat_dob;
        if(sex<367 && sex >0){
            console.log("male");
             month = Days(sex)[0];
             day = Days(sex)[1];
             DOB = month+"/"+day+"/"+year;
             pat_dob = day+"/"+month+"/"+year;
            console.log(year + ' ' + month +' '+ day);
            console.log(getAge(DOB));
            pat_sex="male";
            pat_age=getAge(DOB);
        }
        else if(sex>500 && sex< 866){
            sex = sex -500;
             month = Days(sex)[0];
             day = Days(sex)[1];
             DOB = month+"/"+day+"/"+year;
            console.log(year + ' ' + month +' '+ day);
            console.log(getAge(DOB));
            console.log("female");
            pat_sex="female";
            pat_age=getAge(DOB);
            pat_dob = day+"/"+month+"/"+year;
        }
        }
        else if(nic.length== 12){
             year = nic.slice(0,4);
             sex = nic.slice(4,7);
        if(sex<367 && sex >0){
            console.log("male");
             month = Days(sex)[0];
             day = Days(sex)[1];
             DOB = month+"/"+day+"/"+year;
            console.log(year + ' ' + month +' '+ day);
            console.log(getAge(DOB));
            pat_sex="male";
            pat_age=getAge(DOB);
            pat_dob = day+"/"+month+"/"+year;
        }
        else if(sex>500 && sex< 866){
            sex = sex -500;
             month = Days(sex)[0];
             day = Days(sex)[1];
             DOB = month+"/"+day+"/"+year;
            console.log(year + ' ' + month +' '+ day);
            console.log(getAge(DOB));
            console.log("female");
            pat_sex="female";
            pat_age=getAge(DOB);
            pat_dob = day+"/"+month+"/"+year;
        }
        }else{
        console.log('invalid nic');
     
        

}

        
        return (
            
            <tr>
                <td>{this.props.obj.pat_id}</td>
                <td>{this.props.obj.pat_name}</td>
                <td>{this.props.obj.pat_nic}</td>
                <td>{pat_sex}</td>
                <td>{pat_dob}</td>
                <td>{pat_age}</td>
                <td>{this.props.obj.pat_mobile}</td>
                <td>{this.props.obj.pat_address}</td>
                <td>{this.props.obj.pat_email}</td>
                <td>{this.props.obj.pat_bldgroup}</td>
                <td>{this.props.obj.pat_qty}</td>
                <td>
                    {/* <Link className="edit-link" to={"/edit-doner/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <button className="btn btn-sm success">Conform</button> */}
                </td>
            </tr>
        )
    }
}