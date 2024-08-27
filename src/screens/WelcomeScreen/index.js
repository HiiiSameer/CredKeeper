import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <View>
        <View
          style={{
            marginVertical: '5%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: 800, color: '#000'}}>
            Welcome to Cred Keeper
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: '#000',
              textAlign: 'center',
            }}>
            Sign in with your Google Account to get started
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#24a0ed',
            borderRadius: 8,
            borderWidth: 0.2,
            borderColor: '#000',
            marginVertical: '5%',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{fontSize: 16, fontWeight: 700, color: '#fff'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 30,
            backgroundColor: '#e4eefc',
            borderRadius: 8,
            borderWidth: 0.2,
            borderColor: '#000',
            marginBottom: '5%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{fontSize: 16, fontWeight: 700, color: '#000'}}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
