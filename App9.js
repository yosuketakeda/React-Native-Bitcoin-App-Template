/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
    Switch,
    Dimensions
} from 'react-native';

import App10 from './App10';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    stateDim = Dimensions.get('window');
    constructor() {
        super();
        this.state = {
            switch1Value: false,
            switch2Value: false,
        }
    }
    toggleSwitch1 = (value) => {
        this.setState({switch1Value: value})
        console.log('Switch 1 is: ' + value)
    }
    toggleSwitch2 = (value) => {
        this.setState({switch2Value: value})
        console.log('Switch 2 is: ' + value)
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.png')} style={{width:this.stateDim.width, height:this.stateDim.height,}}>
                    <View style={styles.nav_Bar}>
                        <TouchableOpacity onPress={this._onPressButton} style={styles.nav_touchImage1}>
                            <Image
                                style={styles.iconStyle}
                                source={require('./images/myarticle_list.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.nav_touchImage2}>
                            <Text style={{fontSize:18, color:'white'}}>Edit coin Transaction</Text>
                        </View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('App10')} style={styles.nav_touchImage3}>
                            <Image
                                style={styles.iconStyle}
                                source={require('./images/icon_wallet.png')}
                            />
                        </TouchableOpacity>
                    </View>



                    <View style={{height:'19%'}}></View>

                    <TouchableOpacity style={styles.button_container}>
                        <View style={styles.button}>
                            <View style={styles.textContainer}>
                                <Text style={styles.childText}>Exchange</Text>
                                <Text style={styles.mainText}>Global Average</Text>
                            </View>
                            <Image
                                style={styles.arrowImg}
                                source={require('./images/nextpageIcon.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_container}>
                        <View style={styles.button}>
                            <View style={styles.textContainer}>
                                <Text style={styles.childText}>Trading Pair</Text>
                                <Text style={styles.mainText}>BTC/USD</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{marginLeft:'5%', backgroundColor:'#404041', width:'90%', height:'8%', marginTop:'1%', flexDirection:'row'}}>
                        <TextInput
                            style={{paddingLeft: '7%', fontSize:18, color:'white',width:'70%'}}
                            underlineColorAndroid = 'transparent'
                            placeholder = 'Buy Price in USD'
                        />
                        <TouchableOpacity style={{flexDirection:'row',backgroundColor:'grey',width:'30%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:15,color:'#adb8ef'}}>
                                Per coin
                            </Text>
                            <Image source={require('./images/nextpageIcon.png')} style={{left:'7%', width:17, height:30}}>
                            </Image>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.button_container}>
                        <View style={styles.button}>
                            <Text style={{fontSize:18, color:'white', paddingLeft:'7%', paddingTop: '3%', justifyContent:'center'}}>Amount Bought</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_container}>
                        <View style={styles.button}>
                            <View style={styles.textContainer}>
                                <Text style={styles.childText}>Date & time</Text>
                                <Text style={styles.mainText}>Thu, 25 Jan 2018, 18:57</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ height:'8%',
                        width:'100%',
                        marginTop:'25%',
                        alignItems:'center',}}>
                        <View style={{ width:'85%',
                            height: 50,
                            flexDirection:'row',
                            backgroundColor:'#000',
                            overflow:'hidden',alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:18, color:'white', }}>UPDATE TRANSACTION</Text>
                        </View>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: 'white'
    },
    nav_Bar:{
        width:'100%',
        height:'7%',
        flexDirection:'row',
        marginTop:'2%',
    },
    nav_touchImage1:{
        alignItems:'center',
        justifyContent:'center',
        height:'90%',
        width:'10%',
        marginLeft:'5%',
    },
    nav_touchImage2:{
        alignItems:'center',
        justifyContent:'center',
        height:'90%',
        width:'50%',
        marginLeft:'10%',
    },
    nav_touchImage3:{
        alignItems:'center',
        justifyContent:'center',
        height:'90%',
        width:'11%',
        marginLeft:'10%',
    },
    iconStyle:{
        width:'80%',
        height:'80%',
    },
    ImageIconStyle:{
        width:30,
        height:30
    },
    buySellButton:{
        height:'8%',
        flexDirection:'row',
        marginTop:'2%',
    },
    buyButton:{
        width:'43%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4cda64',
        overflow:'hidden',
        marginLeft:'5%'
    },
    sellButton:{
        width:'43%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000',
        overflow:'hidden',
        marginLeft:'4%'
    },
    button:{
        width:'90%',
        height: 50,
        flexDirection:'row',
        backgroundColor:'#404041',
        overflow:'hidden',
    },
    button2:{
        width:'85%',
        backgroundColor:'#000',
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
    },
    button_container:{
        height:'8%',
        width:'100%',
        marginTop:'1%',
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontSize: 18
    },

    mainText:{
        fontSize:18,
        color:'white',
    },
    childText:{
        fontSize:12,
        color:'#adb8ef',
    },
    arrowImg:{
        width:17,
        height:30,
        marginTop:'3%'
    },
    textContainer:{
        height:40,
        width:'85%',
        marginLeft:'7%',
        marginTop:2,
    }
});
