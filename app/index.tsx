import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { use, useEffect } from 'react'
import { router } from 'expo-router';


const carlogo = require('@/assets/images/carlogo.png');

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/input');
    }, 3000);
  },[]);

  return (
    <View style={styles.container}>
      <Image style={styles.carlogo} source={carlogo} />
      <Text style={styles.appnameen}>Smart Auto Loan</Text>
      <Text style={styles.appnameth}>วางแผนออกรถฉบับมือโปร</Text>
      <ActivityIndicator
        size="large"
        color="#fff"
        style={{ marginTop: 30 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  appnameen: {
    fontSize: 30,
    fontFamily: 'Kanit_700Bold',
    color: '#fff',
    marginBottom: 10
  },
  appnameth: {
    fontSize: 18,
    fontFamily: 'Kanit_400Regular',
    color: '#fff',

  },
  carlogo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e483b8'
  }
})