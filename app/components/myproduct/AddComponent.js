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
const ADD_COMPONENT = gql`
  mutation createComponent(
    $hwSpecification: String!
    $name: String!
    $manufacturerName: String!
    $supportNotes: String!
    $swSpecification: String!
    $version: String!
  ) {
    createComponent(
      hwSpecification: $hwSpecification
      name: $name
      manufacturerName: $manufacturerName
      supportNotes: $supportNotes
      swSpecification: $swSpecification
      version: $version
    ) {
      id
    }
  }
`;

export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdidting: false
        }
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
                onCompleted={() => {
                    this.setState({});
                }}
                mutation={ADD_COMPONENT}
            >
                {(createComponent, { data }) => (

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
                                <Title>Add Component</Title>
                            </Body>
                        </Header>
                        <Content contentContainerStyle={{ height: "100%" }}>
                            <ScrollView>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>Basic Details</Text>
                                <Formik
                                    initialValues={{
                                        hwSpecification: "",
                                        name: "",
                                        manufacturerName: "",
                                        supportNotes: "",
                                        swSpecification: "",
                                        version: ""
                                    }}
                                    onSubmit={values =>
                                        createComponent({ variables: values })
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
                                                    <Label>Product Name :</Label>
                                                    <Item stackedLabel>
                                                        <Input
                                                            disabled={!this.state.isEdidting}
                                                            onChangeText={handleChange("name")}
                                                            onBlur={handleBlur("name")}
                                                            value={values.name}
                                                            placeholder=""
                                                        />
                                                    </Item>
                                                    <Label>Version :</Label>
                                                    <Item stackedLabel>
                                                        <Input
                                                            disabled={!this.state.isEdidting}
                                                            onChangeText={handleChange("version")}
                                                            onBlur={handleBlur("version")}
                                                            value={values.version}
                                                            placeholder=""
                                                        />
                                                    </Item>
                                                    <Label>Manufacture Name :</Label>
                                                    <Item stackedLabel>
                                                        <Input
                                                            disabled={!this.state.isEdidting}
                                                            onChangeText={handleChange("manufacturerName")}
                                                            onBlur={handleBlur("manufacturerName")}
                                                            value={values.manufacturerName}
                                                            placeholder=""
                                                        />
                                                    </Item>
                                                    <Label>Notes on The Component :</Label>
                                                    <Item stackedLabel>
                                                        <Input
                                                            disabled={!this.state.isEdidting}
                                                            onChangeText={handleChange("supportNotes")}
                                                            onBlur={handleBlur("supportNotes")}
                                                            value={values.supportNotes}
                                                            placeholder=""
                                                        />
                                                    </Item>
                                                    <Label>Specification :</Label>
                                                    <Item stackedLabel>
                                                        <Input
                                                            disabled={!this.state.isEdidting}
                                                            onChangeText={handleChange("swSpecification")}
                                                            onBlur={handleBlur("swSpecification")}
                                                            value={values.swSpecification}
                                                            placeholder=""
                                                        />
                                                    </Item>
                                                    <Label>Hardware Specifications :</Label>
                                                    <Item stackedLabel>
                                                        <Input
                                                            disabled={!this.state.isEdidting}
                                                            onChangeText={handleChange("hwSpecification")}
                                                            onBlur={handleBlur("hwSpecification")}
                                                            value={values.hwSpecification}
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
                                                                this.setState({ isEdidting: false});
                                                                
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

                )}
            </Mutation>

        );
    }
}
