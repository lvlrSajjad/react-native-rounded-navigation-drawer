import React, {Component} from 'react';
import {Animated, StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, Image} from 'react-native';

let {height, width} = Dimensions.get('window');

export class FancyNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            offsetY: new Animated.Value(100),
            fadeIn: new Animated.Value(0),
            innerOffsetX: new Animated.Value(-100),
            outerOffsetX: new Animated.Value(-150)
        };
        openNv = openNv.bind(this);
        closeNv = closeNv.bind(this);

    }

    render() {
        return (
            this.state.open ?
                <View style={styles.container}>
                    <Animated.View style={[{
                        backgroundColor: this.props.lightColor, opacity: this.state.fadeIn,
                        transform: [{translateX: this.state.outerOffsetX}]
                    }, styles.listContainer]}>
                        <Animated.View style={[{
                            backgroundColor: this.props.darkColor, opacity: this.state.fadeIn,
                            transform: [{translateX: this.state.innerOffsetX}]
                        }, styles.listInnerContainer]}>

                        </Animated.View>
                    </Animated.View>
                    <Animated.View

                        style={[{
                            opacity: this.state.fadeIn,
                            transform: [{translateY: this.state.offsetY}],
                        }, styles.closeButtonContainer]}>
                        <TouchableOpacity
                            style={[{
                                backgroundColor: this.props.darkColor
                            }, styles.closeButton]}
                            onPress={() => closeNv()}
                        >
                            <Image style={{alignSelf: 'center', width: 32, height: 32}}
                                   source={require('./close.png')}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                    <FlatList
                        style={{width: width, height: height - 300, position: 'absolute', left: 42, top: 58}}
                        data={this.props.data}
                        extraData={this.props.data}
                        keyExtractor={(item, index) => item.id}
                        renderItem={this._renderItem}
                    />
                    <Animated.Image
                        style={{opacity: this.state.fadeIn,position: 'absolute', width: 84, height: 84, borderRadius: 42, top: 42, right: 42}}
                        source={{uri: this.props.imageUri}}
                    />
                </View> :
                null

        );
    }

    _renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this.props.onItemPress(item)}>
            <Animated.View style={[{
                opacity: this.state.fadeIn,
                transform: [{translateX: this.state.outerOffsetX}]
            }]}>
                <Text style={{color: '#FFFFFF', height: 58, width: width, textAlign: 'left', fontSize: 24}}>
                    {item.title}
                </Text>
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFFcc',
        zIndex: 999
    },
    listContainer: {
        position: 'absolute',
        top: 0,
        height: height - 150,
        width: width * 2 - 100,
        borderBottomRightRadius: width * 2,
    },
    listInnerContainer: {
        position: 'absolute',
        top: 0,
        height: height - 150,
        width: width * 2 - 170,
        borderBottomRightRadius: width * 2,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    closeButtonContainer: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export function openNv() {

    this.setState({
        open: true,
        offsetY: new Animated.Value(100),
        fadeIn: new Animated.Value(0),
        innerOffsetX: new Animated.Value(-100),
        outerOffsetX: new Animated.Value(-150)
    }, () => {
        Animated.parallel([
            Animated.timing(
                this.state.offsetY,
                {
                    toValue: 0,
                    duration: 500,
                }),
            Animated.timing(
                this.state.fadeIn,
                {
                    toValue: 1,
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.innerOffsetX,
                {
                    toValue: 0,
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.outerOffsetX,
                {
                    toValue: 0,
                    duration: 500,
                }
            )
        ]).start();
    })

}

export function closeNv() {
    Animated.parallel([
        Animated.timing(
            this.state.offsetY,
            {
                toValue: 100,
                duration: 500,
            }),
        Animated.timing(
            this.state.fadeIn,
            {
                toValue: 0,
                duration: 500,
            }
        ),
        Animated.timing(
            this.state.innerOffsetX,
            {
                toValue: -100,
                duration: 500,
            }
        ),
        Animated.timing(
            this.state.outerOffsetX,
            {
                toValue: -150,
                duration: 500,
            }
        )
    ]).start(()=>this.setState({open: false}));

}
