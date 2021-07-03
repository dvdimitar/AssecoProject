import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import UserService from "../../Service/UserService";
import {withRouter} from "react-router-dom";

class  Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            email: "",
            username: "",
            password: "",
            repeatedPassword: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        event.preventDefault();
        let user = {name:this.state.name,surname:this.state.surname,email:this.state.email,username: this.state.username,
        password:this.state.password,repeatedPassword: this.state.repeatedPassword};
        UserService.registerUser(user).then(res => {
            this.props.history.push("/blogs");
        });

    }

    render() {
        return (
            <div className="Login">
                <link rel={"stylesheet"} href={"./Login.css"}/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group size="lg" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            id="name"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group size="lg" >
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            id="surname"
                            name="surname"
                            type="text"
                            value={this.state.surname}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group size="lg" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            id="email"
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group size="lg" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            id="username"
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Repeat Password </Form.Label>
                        <Form.Control
                            type="password"
                            name="repeatedPassword"
                            placeholder="Password"
                            value={this.state.repeatedPassword}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <button id="submit" name="submit" onClick={this.handleSubmit} className={"btn btn-primary"}>Register</button>
                </Form>
            </div>
        );
    }
}
export default withRouter(Register);