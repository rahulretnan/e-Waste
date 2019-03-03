import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Left, ListItem, CheckBox, Body, Right, Button, Icon, Title, Card, CardItem, Content, Item, Thumbnail, Label } from 'native-base';
import styles from './Styles'

export default class Delivery extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Container >
                <Header style={styles.header} iosBarStyle={"light-content"}>
                    {/* <Left >
                        <Icon style={{ width: 20 }} name='arrow-round-back' onPress={() => this.props.navigation.navigate('ItemView')} style={{ color: 'white' }} />
                    </Left> */}
                    <Body>
                        <Title>Payments</Title>
                    </Body>
                    <Right>
                        <View style={{ marginRight: 20 }}>
                            <Icon name='search' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
                        </View>
                        <View style={{ marginRight: 20 }}>
                            <Icon name='heart' onPress={() => this.props.navigation.navigate('Wishlist')} style={{ color: 'white' }} />
                        </View>
                        <View >
                            <Icon name='cart' onPress={() => this.props.navigation.navigate('Cart')} style={{ color: 'white' }} />
                        </View>
                    </Right>
                </Header>
                <ScrollView>
                    <Container style={styles.card} >
                        <Content>
                            <Card>
                                <CardItem cardBody >
                                    <View style={{ flex: 1 }}>
                                        <ListItem>
                                            <CheckBox style={{ borderRadius: 45 }} checked={true} />
                                            <Body>
                                                <Text style={{ marginStart: 15 }}>Credit / Debit / ATM Card</Text>
                                            </Body>
                                        </ListItem>
                                        <ListItem>
                                            <CheckBox style={{ borderRadius: 45 }} checked={false} />
                                            <Body>
                                                <Text style={{ marginStart: 15 }}>PhonePe / BHIM UPI</Text>
                                            </Body>
                                        </ListItem>
                                        <ListItem>
                                            <CheckBox style={{ borderRadius: 45 }} checked={false} />
                                            <Body>
                                                <Text style={{ marginStart: 15 }}>Net Banking</Text>
                                            </Body>
                                        </ListItem>
                                        <ListItem>
                                            <CheckBox style={{ borderRadius: 45 }} checked={false} />
                                            <Body>
                                                <Text style={{ marginStart: 15 }}>Cash on Delivery</Text>
                                            </Body>
                                        </ListItem>
                                    </View>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>

                    <Container style={styles.card} >
                        <Content>
                            <Card>
                                <CardItem>
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Item style={{ marginBottom: 5 }}>
                                            <Label style={{ fontSize: 13 }}>Price Details</Label>
                                        </Item>
                                        <Item style={{ marginTop: 5, flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }}>
                                                <Label style={{ fontSize: 12 }}>Price(1 items)</Label>
                                                <Label style={{ fontSize: 12, marginLeft: '60%' }}>₹100</Label>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Label style={{ fontSize: 12, marginBottom: 10 }}>Deliver caharge</Label>
                                                <Label style={{ fontSize: 12, marginLeft: '58%' }}>₹50</Label>
                                            </View>
                                        </Item>
                                        <Item style={{ marginTop: 5 }}>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Label style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 5 }}>Amount Payable</Label>
                                                <Label style={{ fontSize: 12, marginLeft: '54%' }}>₹50</Label>
                                            </View>
                                        </Item>
                                    </View>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>
                </ScrollView>
                <View style={{ padding: 10, flexDirection: 'row', alignSelf: 'center' }}>
                    <Button transparent style={{ flexDirection: 'column', width: '50%', alignItems: 'center', justifyContent: 'flex-start', height: 50 }}>
                        <Text style={{ marginEnd: 80, marginTop: 5, fontWeight: '100' }}>Total Amount</Text>
                        <Text style={{ marginEnd: 110, fontWeight: '700' }}>₹1000</Text>
                    </Button>
                    <Button rounded style={{ width: '50%', alignItems: 'center', justifyContent: 'center', height: 50 }}>
                        <Text style={{ fontSize: 16, color: 'white' }}>CONTINUE</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}
