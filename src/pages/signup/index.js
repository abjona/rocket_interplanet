import React,{ useState } from "react";
import api from "@/configs/api";
import { Container, Form, BtnSignUp, TextBtn } from "./styles";

import {
    Icon,
    IconCol,
    Input,
    InputCol,
    InputContainer
} from "@/pages/login/styles";

import { showMessage } from "react-native-flash-message";
import { ActivityIndicator } from "react-native";
import Header from "@/components/header";

export default function signup({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");
    const [load, setLoad] = useState(false);

    const handleSignUp = async() => {
        setLoad(true);
        if(validate()){
            const response = await api.post('/store',{
                name,
                email,
                password
            });
    
            const { error, message } = response.data;
            if(error){
                showMessage({
                    message: "Error",
                    description: message,
                    type: "danger",
                    duration: 2500
                });
                setLoad(false);
            }
            else{
                setName("");
                setEmail("");
                setPassword("");
                setRpassword("");
                
                showMessage({
                    message: "Success",
                    description: message,
                    type: "success",
                    duration: 2500
                });
                setLoad(false);
            }
        }
        else{
            setLoad(false);
        }
    }

    const validate = () => {
        if(!name){
            showMessage({
                message: "Required",
                description: "name required",
                type: "danger",
                duration: 2500
            });
        }
        else if(!email){
            showMessage({
                message: "Required",
                description: "e-mail required",
                type: "danger",
                duration: 2500
            });
        }
        else if(!password){
            showMessage({
                message: "Required",
                description: "password required",
                type: "danger",
                duration: 2500
            });
        }

        else if(!rpassword){
            showMessage({
                message: "Required",
                description: "repeat password required",
                type: "danger",
                duration: 2500
            });
        }
        else if(password != rpassword){
            showMessage({
                message: "Error",
                description: "passwords do not match",
                type: "danger",
                duration: 2500
            });
        }
        else{
            return true;
        }
    }

    return (
        <>
            <Header name="Create an Account" back={navigation.goBack} />
            <Container>
                <Form>
                    <InputContainer>
                        <IconCol>
                            <Icon name="user" />
                        </IconCol>
                        <InputCol>
                            <Input 
                                autoCorrect={false}
                                autoCapitalize="none"
                                value={name} 
                                onChangeText={setName} 
                                placeholder={'Name'} 
                            />
                        </InputCol>
                    </InputContainer>
                    <InputContainer>
                        <IconCol>
                            <Icon name="user" />
                        </IconCol>
                        <InputCol>
                            <Input 
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType={"email-address"}
                                value={email} 
                                onChangeText={setEmail} 
                                placeholder={'E-mail'} 
                            />
                        </InputCol>
                    </InputContainer>

                    <InputContainer>
                        <IconCol>
                            <Icon name="lock" />
                        </IconCol>
                        <InputCol>
                            <Input 
                                value={password} 
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={setPassword} 
                                secureTextEntry={true} 
                                placeholder={'Password'} 
                            />
                        </InputCol>
                    </InputContainer>

                    <InputContainer>
                        <IconCol>
                            <Icon name="lock" />
                        </IconCol>
                        <InputCol>
                            <Input 
                                value={rpassword} 
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={setRpassword} 
                                secureTextEntry={true} 
                                placeholder={'Repeat Password'} 
                            />
                        </InputCol>
                    </InputContainer>

                    <BtnSignUp onPress={()=> handleSignUp()}>
                        {load ? <ActivityIndicator color="#fff" /> : <TextBtn>Create</TextBtn>}
                    </BtnSignUp>
                </Form>

            </Container>
        </>
    );
}