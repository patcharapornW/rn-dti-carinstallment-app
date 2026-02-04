import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const car = require('@/assets/images/car.png');

const DOWN_PAYMENT = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const MOUNT_OPTIONS = [24, 36, 48, 54, 60];

export default function Input() {

    const [carPrice, setCarPrice] = useState('');
    const [carDownPayment, setCarDownPayment] = useState('');
    const [carMonth, setCarMonth] = useState('');
    const [carInterest, setCarInterest] = useState('');

    const handleCalClick = () => {
        //validate
        if (!carPrice || !carDownPayment || !carMonth || !carInterest) {
            Alert.alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        //คำนวน

        //เงินดาวน์
        let downPayment = (Number(carPrice) * Number(carDownPayment)) / 100;

        //ยอดจัด
        let carPayment = Number(carPrice) - downPayment;

        //ดอกเบี้ยรวม
        let totalInterest = (carPayment * (Number(carInterest) / 100) * (Number(carMonth) / 12));

        //ผ่อนต่อเดือน
        let installment = (carPayment + totalInterest) / Number(carMonth);

        // ส่งไปแสดงผล //result
        router.push({
            pathname: '/result',
            params: {
                installment: installment.toFixed(2),
                carPrice: Number(carPrice).toFixed(2),
                carPayment: carPayment.toFixed(2),
                downPayment: downPayment.toFixed(2),
            }
        });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView style={{ flex: 1, padding: 20 }}>

                <Image source={car} style={styles.car} />

                <View style={styles.inputContainer}>
                    <Text style={styles.title}>คำนวณค่างวดรถ</Text>

                    <Text style={styles.inputTitle}>ราคารถ (บาท)</Text>
                    <TextInput
                        placeholder="เช่น 850000"
                        keyboardType="numeric"
                        style={styles.inputValue}
                        value={carPrice}
                        onChangeText={setCarPrice}
                    />

                    <Text style={styles.inputTitle}>เลือกเงินดาวน์ (%)</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {DOWN_PAYMENT.map(item => (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.downPayment,
                                    carDownPayment === item.toString() && styles.downPaymentSelect
                                ]}
                                onPress={() => setCarDownPayment(item.toString())}
                            >
                                <Text style={styles.downLabel}>{item}%</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <Text style={styles.inputTitle}>ระยะเวลาผ่อน (งวด)</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {MOUNT_OPTIONS.map(item => (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.monthOption,
                                    carMonth === item.toString() && styles.monthOptionSelect
                                ]}
                                onPress={() => setCarMonth(item.toString())}
                            >
                                <Text style={styles.monthLabel}>{item} งวด</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <Text style={styles.inputTitle}>ดอกเบี้ย (% ต่อปี)</Text>
                    <TextInput
                        placeholder="เช่น 2.50"
                        keyboardType="numeric"
                        style={styles.inputValue}
                        value={carInterest}
                        onChangeText={setCarInterest}
                    />

                    <TouchableOpacity style={styles.btnCal} onPress={handleCalClick}>
                        <Text style={styles.labelCal}>คำนวณค่างวด</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Kanit_700Bold',
        marginBottom: 10,
    },

    btnCal: {
        backgroundColor: '#e483b8',
        padding: 20,
        borderRadius: 15,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelCal: {
        fontFamily: 'Kanit_600SemiBold',
        fontSize: 20,
        color: '#ffffff',
    },
    downPayment: {
        backgroundColor: '#f8e1ef',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        margin: 5,
    },
    downPaymentSelect: {
        backgroundColor: '#e483b8',
    },
    downLabel: {
        fontFamily: 'Kanit_500Medium',
        fontSize: 18,
        color: '#000000',
    },
    downLabelSelect: {
        backgroundColor: '#e483b8',
    },
    monthOption: {
        backgroundColor: '#f8e1ef',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        margin: 5,
    },
    monthOptionSelect: {
        backgroundColor: '#e483b8',
    },
    monthLabel: {
        fontFamily: 'Kanit_500Medium',
        fontSize: 18,
        color: '#000000',
    },
    monthLabelSelect: {
        backgroundColor: '#e483b8',
    },



    inputValue: {
        backgroundColor: '#ffdef2',
        fontFamily: 'Kanit_400Regular',
        fontSize: 18,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#918f8f',
        padding: 10,


    },
    inputTitle: {
        fontSize: 18,
        fontFamily: 'Kanit_400Regular',
        marginTop: 15,
        marginBottom: 10,
        color: '#000000'
    },
    inputContainer: {
        backgroundColor: '#ffffff',

        marginTop: -30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    car: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        marginBottom: 20,

    },
});