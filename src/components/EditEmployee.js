import React, { Component } from 'react';

class EditEmployee extends Component {

    state = {
        empId: '',
        ename: '',
        age: '',
        salary: '',
        achievements: '',
        formError: {
            enameError: '',
            ageError: ''
        },
        fieldValidity: {
            enameValidity: false,
            ageValidity: false
        },
        formValid: false,
        succesMessage: ''

    }


    validateName = (e) => {
        let name = e.target.value;
        let formError = this.state.formError;
        let fieldValidity = this.state.fieldValidity;
        this.setState({ ename: e.target.value });
        if (name.length <= 6) {
            formError.enameError = "The Length Must be greater than 6";
            fieldValidity.enameValidity = false;

        }
        else {
            formError.enameError = "";
            fieldValidity.enameValidity = true;
        }
        this.setState({ fieldValidity: fieldValidity });
        this.setState({ formValid: fieldValidity.enameValidity && fieldValidity.ageValidity });
    }

    validateAge = (e) => {
        let age = e.target.value;
        let formError = this.state.formError;
        let fieldValidity = this.state.fieldValidity;
        this.setState({ age: e.target.value });
        if (age <= 21) {
            formError.ageError = "The Age should not be lesser than 21";
            fieldValidity.ageValidity = false;

        }
        else {
            formError.ageError = "";
            fieldValidity.ageValidity = true;
        }
        this.setState({ fieldValidity: fieldValidity });
        this.setState({ formValid: fieldValidity.enameValidity && fieldValidity.ageValidity });
    }

    validateSalary = (e) => {
        let salary = e.target.value;
        this.setState({ salary: salary });
    }

    validateAchievement = (e) => {
        let achievements = e.target.value;
        this.setState({ achievements: achievements })
    }
    update = (e) => {
        e.preventDefault();
        if (this.state.formValid) {
            var formJSON = {
                empId: this.props.match.params.empId,
                ename: this.state.ename,
                age: this.state.age,
                salary: this.state.salary,
                achievements: this.state.achievements
            }
            //console.log(JSON.stringify(formJSON))
        }
        this.setState({ succesMessage: JSON.stringify(formJSON) });
    }
    render() {
        return (
            <div style={{width:500,margin:'0px auto'}}>
                <h1 className="text-center">The Selected Id is {this.props.match.params.empId}</h1>
                <form style={{textAlign:"left"}}>
                    <div className="form-group">
                        <label>Employee ID:</label>
                        <input className="form-control" type="text" disabled value={this.props.match.params.empId} />
                    </div>

                    <div className="form-group">
                        <label>Employee Name:</label>
                        <input className="form-control" type="text" onChange={this.validateName} value={this.state.ename} />
                    </div>
                    <span className="text-danger">{this.state.formError.enameError}</span>


                    <div className="form-group">
                        <label>Employee Age:</label>
                        <input className="form-control" type="text" onChange={this.validateAge} value={this.state.age} />
                    </div>
                    <span className="text-danger">{this.state.formError.ageError}</span>

                    <div className="form-group">
                        <label>Salary:</label>
                        <select className="form-control" onChange={this.validateSalary} value={this.state.salary}>
                            <option value="10000">10000</option>
                            <option value="20000">20000</option>
                            <option value="30000">30000</option>
                        </select>
                    </div>

                    <div className="form-group" >
                        <label>Achievements:</label>
                        <textarea className="form-control" onChange={this.validateAchievement} value={this.state.achievements}></textarea>

                    </div>

                    <button type="button" className="btn btn-success" onClick={this.update} disabled={!this.state.formValid}>Update</button>
                    <span className="text-success">{this.state.succesMessage}</span>
                </form>

            </div>
        );
    }
}

export default EditEmployee;