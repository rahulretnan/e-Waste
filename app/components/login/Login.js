import React, { Component } from "react";
import { Text, View, ImageBackground, Image, Button } from "react-native";
import { Container, Item, Input, Icon } from "native-base";
import { Formik } from "formik";
import styles from "./Styles";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { connect } from "react-redux";
import { setAuth } from "./../../redux/actions/auth-actions";

const Sign_In = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    return (
      <Mutation
        onCompleted={data => {
          this.props.setAuth(data.tokenAuth.token);
          this.props.navigation.navigate("Home");
          // localStorage.setItem("token", data.tokenAuth.token)
        }}
        mutation={Sign_In}
      >
        {tokenAuth => {
          return (
            <Container>
              <ImageBackground
                source={require("../../img/bg.jpg")}
                style={styles.container}
              >
                <View style={styles.logoContainer}>
                  <Image
                    source={require("../../img/logo.png")}
                    style={styles.logo}
                  />
                  <Text style={styles.text}>Get Your Components Here!</Text>
                </View>
                <Formik
                  initialValues={{ username: "", password: "" }}
                  onSubmit={values => tokenAuth({ variables: values })}
                  render={({
                    values,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    errors,
                    touched,
                    setFieldTouched,
                    isValid,
                    isSubmitting
                  }) => (
                    <React.Fragment>
                      <Item rounded style={styles.input}>
                        <Icon name={"ios-person"} style={styles.inputIcon} />
                        <Input
                          placeholder="Username"
                          onChangeText={handleChange("username")}
                          onBlur={handleBlur("username")}
                          value={values.username}
                          style={{ color: "white" }}
                          placeholderTextColor={"rgba(225, 225, 255, 0.7)"}
                        />
                      </Item>
                      <Item rounded style={styles.input}>
                        <Icon name={"ios-lock"} style={styles.inputIcon} />
                        <Input
                          placeholder="Password"
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          value={values.password}
                          style={{ color: "white" }}
                          secureTextEntry={true}
                          placeholderTextColor={"rgba(225, 225, 255, 0.7)"}
                        />
                        <Icon name={"ios-eye"} style={styles.inputIcon} />
                      </Item>

                      <View style={styles.btnlContainer}>
                        <View style={styles.loginContainer}>
                          <Button
                            onPress={handleSubmit}
                            title="Sign in"
                            color="rgba(20, 58, 198, 0.52)"
                          />
                        </View>
                      </View>
                      <View style={styles.btnrContainer}>
                        <View style={styles.loginContainer}>
                          <Button
                            onPress={() =>
                              this.props.navigation.navigate("Register")
                            }
                            title="Reister"
                            color="rgba(20, 58, 198, 0.52)"
                          />
                        </View>
                      </View>
                    </React.Fragment>
                  )}
                />
              </ImageBackground>
            </Container>
          );
        }}
      </Mutation>
    );
  }
}
export default connect(
  null,
  { setAuth }
)(Login);
