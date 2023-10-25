import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react';
import LottieView from 'lottie-react-native';

const OrderScreen = () => {
  return (
    <SafeAreaView>
        <LottieView source={require('../../assets/thumbs.json')} style={styles.lottieThumbs} autoPlay loop={false} speed={0.7}/>
        <Text style={styles.text}>Your Order has been Placed</Text>
        <LottieView source={require('../../assets/sparkle.json')} style={styles.lottieSparkle} autoPlay loop={false} speed={0.7}/>
    </SafeAreaView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    lottieThumbs: {
        height: 360,
        width: 300,
        alignSelf: 'center',
        marginTop: 40,
        justifyContent: 'center'
    },
    text: {
        marginTop: 40,
        fontSize: 19,
        fontWeight: "600",
        textAlign: "center",
    },
    lottieSparkle: {
        height: 300,
        position: "absolute",
        top: 100,
        width: 300,
        alignSelf: "center",
    }
})