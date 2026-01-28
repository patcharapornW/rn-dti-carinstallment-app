import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const car = require('@/assets/images/car.png');

const DOWN_PAYMENT = ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"];
const MOUNT_OPTIONS = ["24", "36", "48", "54", "60"];

export default function Input() {
    //สร้าง state สำหรับเก็บค่าต่างๆ ที่ผู้ใช้ป้อน
    const [carPrice, setCarPrice] = useState(" ");
    const [carDownPayment, setCarDownPayment] = useState(" ");
    const [carInstallment, setCarInstallment] = useState(null);
    const [carMonth, setCarMonth] = useState(" ");
    const [carInterest, setCarInterest] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, padding: 20 }}
            >
                {/* การแสดงรูป */}
                <Image source={car} style={styles.car} />

                {/* ส่วนของฟอร์มการป้อนข้อมูล */}
                <View style={styles.inputContainer}>
                    <Text
                        style={{
                            fontSize: 30, fontWeight: 'bold',
                            fontFamily: 'Kanit_700Bold',
                            marginBottom: 10,
                        }}>
                        คำนวนค่างวดรถ
                    </Text>

                    <Text style={styles.inputTitle}>ราคารถ (บาท)</Text>
                    <TextInput
                        placeholder='เช่น 850000'
                        keyboardType='numeric'
                        style={styles.inputValue}
                        value={carPrice}
                        onChangeText={setCarPrice}
                    />
                    <Text style={styles.inputTitle}>เลือกเงินดาวน์ (%)</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {DOWN_PAYMENT.map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.downPayment,
                                    carDownPayment === item && styles.downPaymentSelect
                                ]}
                                onPress={() => setCarDownPayment(item.toString())}
                            >
                                <Text
                                    style={[
                                        styles.downLabel,
                                        carDownPayment === item && styles.downLabelSelect
                                    ]}
                                >
                                    {item}%
                                </Text>
                            </TouchableOpacity>
                        ))}

                    </ScrollView>


                    <Text style={styles.inputTitle}>ระยะเวลาผ่อน (งวด)</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {MOUNT_OPTIONS.map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.monthOption,
                                    carMonth === item && styles.monthOptionSelect
                                ]}
                                onPress={() => setCarMonth(item.toString())}
                            >
                                <Text
                                    style={[
                                        styles.monthLabel,
                                        carMonth === item && styles.monthLabelSelect
                                    ]}
                                >
                                    {item} งวด
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <Text style={styles.inputTitle}>ดอกเบี้ย (% ต่อปี)</Text>
                    <TextInput
                        placeholder='เช่น 2.50'
                        keyboardType='numeric'
                        style={styles.inputValue}
                        value={carInterest}
                        onChangeText={setCarInterest}
                    />
                    <TouchableOpacity style={styles.btnCal}>
                        <Text style={styles.labelCal}>คำนวนค่างวด</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView >
        </KeyboardAvoidingView >
    );
}

const styles = StyleSheet.create({
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