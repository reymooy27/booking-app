import React from 'react';
import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Tickets = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Choose ticket',
      headerStyle:{
        backgroundColor: '#172132',
        shadowColor: 'transparent'
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: 'OpenSans-SemiBold',
        color: '#C4C4C5',
      },
      headerLeft: ()=> 
        <TouchableOpacity onPress={()=> navigation.goBack()} style={{marginLeft: 20}}>
          <Ionicon name="chevron-back-outline" color="#C4C4C5" size={24}/>
        </TouchableOpacity>,
      headerRight: ()=> 
        <TouchableOpacity style={{marginRight: 20}}>
          <Ionicon name="menu-outline" color="#C4C4C5" size={24}/>
        </TouchableOpacity>,
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      {/* button */}
      <View style={{marginVertical: 40, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#2E394F', borderRadius: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, marginRight: 10}}>
          <Ionicon name="person-outline" size={14} color="#C4C4C5" style={{marginRight: 3}}/>
          <Text style={{fontFamily: 'OpenSans-SemiBold', color: '#C4C4C5'}}>1 Adult</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#2E394F', borderRadius: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',padding: 10, marginRight: 10}}>
          <Ionicon name="alarm-outline" size={14} color="#C4C4C5" style={{marginRight: 3}}/>
          <Text style={{fontFamily: 'OpenSans-SemiBold', color: '#C4C4C5'}}>12/12/2021</Text>
        </TouchableOpacity>
      </View>

      {/* Tickets */}
      <View>
          <Ticket orange/>
          <Ticket/>
          <Ticket/>
          <Ticket/>
      </View>
    </ScrollView>
  );
};

export default Tickets;

const Ticket = ({orange}) =>{
  return (
    <TouchableOpacity>
      <View style={{borderRadius: 20, height: 220, backgroundColor: orange ? '#EE8E45' : '#2E394F', padding: 20, marginBottom: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 20, color: orange ? 'black' : '#EE8E45', marginBottom: 5}}>SUB</Text>
            <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 12, color: orange ? 'black' : '#C4C4C5'}}>Surabaya</Text>
            <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 16, color: orange ? 'black' : '#C4C4C5', marginBottom: 5}}>18:30 PM</Text>
              <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 12, color: orange ? 'black' : '#C4C4C5'}}>1 January 2022</Text>
            </View>
          </View>
          <View style={{alignSelf: 'baseline', justifyContent: 'center'}}>
            <Ionicon name="airplane" size={20} color={orange ? "black" : "#C4C4C5"}/>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 20, color: '#5A66E5', marginBottom: 5}}>CGK</Text>
            <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 12, color: orange ? 'black' : '#C4C4C5'}}>Jakarta</Text>
            <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 16, color: orange ? 'black' : '#C4C4C5', marginBottom: 5}}>20:00 PM</Text>
              <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 12, color: orange ? 'black' : '#C4C4C5'}}>1 January 2022</Text>
            </View>
          </View>
        </View>
        {/* separator */}
        <View style={{borderBottomColor: orange ? 'black' : '#C4C4C5', borderBottomWidth: 1, marginVertical: 20}}></View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <Image style={{width: 20, height: 20}} source={{uri: 'https://o.remove.bg/downloads/c1801600-37b5-498e-be86-fbe160630b2b/kisspng-logo-airplane-garuda-indonesia-airline-members-benefits-ppia-unimelb-5b6cf86a2abe25.8661047215338681381751-removebg-preview.png'}}/>
          <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 16, color: orange ? 'black' : '#C4C4C5'}}>IDR 745.000</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#172132',
    paddingHorizontal : 20,
  },
});
