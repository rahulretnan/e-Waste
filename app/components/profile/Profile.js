import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Label,
  Input,
  Icon,
  Title,
  Content,
  Item,
  Form,
  Textarea
} from "native-base";
import styles from "./Styles";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Formik } from "formik";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdidting: false
    };
  }
  static navigationOptions = {
    drawerLabel: "Profile",
    header: null,
    drawerIcon: ({ tintColor }) => (
      <Icon name="person" style={{ fontSize: 24, color: "grey" }} />
    )
  };
  render() {
    return (
      <Mutation
        mutation={gql`
          mutation profileUpdate(
            $username: String!
            $email: String!
            $lastName: String!
            $firstName: String!
          ) {
            profileUpdate(
              username: $username
              email: $email
              lastName: $lastName
              firstName: $firstName
            ) {
              customuser {
                id
              }
            }
          }
        `}
      >
        {(profileUpdate, { loadingM, errorM, dataM }) => {
          if (loadingM) return <Text>Loading...</Text>;
          if (errorM) return <Text>Error :(</Text>;
          return (
            <Query
              query={gql`
                {
                  me {
                    id
                    name
                    email
                    firstName
                    lastName
                    username
                    phoneNumber
                  }
                }
              `}
            >
              {({ loading, error, data }) => {
                if (loading) return <Text>Loading...</Text>;
                if (error) return <Text>Error :(</Text>;
                return (
                  <Container style={styles.container}>
                    <Header style={styles.header} iosBarStyle={"light-content"}>
                      <Left>
                        <Icon
                          name="menu"
                          onPress={() => this.props.navigation.openDrawer()}
                          style={{ color: "white" }}
                        />
                      </Left>
                      <Body style={{ flex: 1 }}>
                        <Title>Profile</Title>
                      </Body>
                    </Header>
                    <Icon
                      name="contact"
                      style={{
                        fontSize: 150,
                        color: "grey",
                        alignSelf: "center",
                        marginTop: 15
                      }}
                    />
                    <Content contentContainerStyle={{ height: "100%" }}>
                      <ScrollView>
                        <Formik
                          initialValues={{
                            id: "",
                            name: "",
                            email: "",
                            firstName: "",
                            username: "",
                            lastName: "",
                            phoneNumber: "",
                            ...data.me
                          }}
                          onSubmit={values =>
                            profileUpdate({ variables: values })
                          }
                          render={({
                            values,
                            handleSubmit,
                            handleChange,
                            handleBlur
                          }) => (
                            <React.Fragment>
                              <Form
                                style={{
                                  alignSelf: "center",
                                  marginBottom: 30
                                }}
                              >
                                <Label>First Name :</Label>
                                <Item stackedLabel>
                                  <Input
                                    onChangeText={handleChange("firstName")}
                                    onBlur={handleBlur("firstName")}
                                    value={values.firstName}
                                    placeholder=""
                                  />
                                </Item>
                                <Label>Last Name :</Label>
                                <Item stackedLabel>
                                  <Input
                                    onChangeText={handleChange("lastName")}
                                    onBlur={handleBlur("lastName")}
                                    value={values.lastName}
                                    placeholder=""
                                  />
                                </Item>
                                <Label>Email :</Label>
                                <Item stackedLabel>
                                  <Input
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    value={values.email}
                                    placeholder=""
                                  />
                                </Item>
                                <Label>Username :</Label>
                                <Item stackedLabel>
                                  <Input
                                    onChangeText={handleChange("username")}
                                    onBlur={handleBlur("username")}
                                    value={values.username}
                                    placeholder=""
                                  />
                                </Item>
                                <Label>Mobile :</Label>
                                <Item stackedLabel>
                                  <Input
                                    onChangeText={handleChange("phoneNumber")}
                                    onBlur={handleBlur("phoneNumber")}
                                    value={values.phoneNumber}
                                    placeholder=""
                                  />
                                </Item>
                                {/* 
                          <Label>Address :</Label>
                          <Textarea rowSpan={4} bordered placeholder="" /> */}

                                <View
                                  style={{
                                    justifyContent: "center",
                                    alignItem: "center",
                                    flexDirection: "row"
                                  }}
                                >
                                  <Button
                                    rounded
                                    style={{
                                      top: 15,
                                      alignSelf: "center",
                                      width: 80,
                                      justifyContent: "center",
                                      alignItem: "center"
                                    }}
                                    disabled={!this.state.isEdidting}
                                    onPress={e => {
                                      handleSubmit(e);
                                      this.setState({ isEdidting: false });
                                    }}
                                  >
                                    <Text style={{ color: "white" }}>Save</Text>
                                  </Button>

                                  <Button
                                    onPress={() => {
                                      this.setState({ isEdidting: true });
                                    }}
                                    disabled={this.state.isEdidting}
                                    rounded
                                    style={{
                                      top: 15,
                                      marginLeft: 10,
                                      alignSelf: "center",
                                      width: 80,
                                      justifyContent: "center",
                                      alignItem: "center"
                                    }}
                                  >
                                    <Text style={{ color: "white" }}>Edit</Text>
                                  </Button>
                                </View>
                              </Form>
                            </React.Fragment>
                          )}
                        />
                      </ScrollView>
                    </Content>
                  </Container>
                );
              }}
            </Query>
          );
        }}
      </Mutation>
    );
  }
}
