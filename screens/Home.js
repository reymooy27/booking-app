import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import { SearchBar } from 'react-native-elements/dist/searchbar/SearchBar';
import data from '../data';

const Home = ({navigation}) => {

  const [search, setSearch] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Indonesia',
      headerStyle:{
        backgroundColor: '#172132',
        shadowColor: 'transparent'
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: 'OpenSans-Bold',
        color: '#C4C4C5',
      },
      headerLeft: ()=> 
        <TouchableOpacity style={{marginLeft: 20}}>
          <Ionicon name="menu-outline" color="#C4C4C5" size={20}/>
        </TouchableOpacity>,
      headerRight: ()=> 
        <TouchableOpacity style={{marginRight: 20}}>
          <Avatar
            rounded
            source={{
              uri: 'https://i.pinimg.com/564x/df/c6/ee/dfc6ee8d269617c0812194b3f5422e22.jpg'
            }}
          />
        </TouchableOpacity>,
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={{marginBottom: 20, marginTop: 40, paddingHorizontal: 20}}>
        <Text style={{fontFamily: 'OpenSans-Bold', color: '#C4C4C5', fontSize: 20, paddingBottom: 10}}>Hi Rey,</Text>
        <Text style={{fontFamily: 'OpenSans-Regular', color: '#C4C4C5', fontSize: 14}}>Let's Discover a New Adventure!</Text>
      </View>

    {/* SearcBar */}
      <View style={{marginBottom: 40, paddingHorizontal: 20}}>
        <SearchBar
        containerStyle={{backgroundColor: '#2E394F', borderRadius: 60, height: 50,justifyContent: 'center', borderTopWidth: 0, borderBottomWidth: 0}}
        style={{fontSize: 16, color: '#C4C4C5'}}
        searchIcon={()=> <Ionicon name='search-outline' color='#C4C4C5' size={24} style={{marginRight: -10}}/>}
        placeholder="Search Hotel, Taxi etc..."
        placeholderTextColor='#C4C4C5'
        onChangeText={(text)=> setSearch(text)}
        value={search}
        />
      </View>

      {/* buttons */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <MenuButton name='airplane' title='Flight' onPress={()=> navigation.navigate('Tickets')}/>
        <MenuButton name='bed' title='Hotel'/>
        <MenuButton name='train' title='Train'/>
        <MenuButton name='grid-outline' title='More'/>
      </View>

      {/* Recommended */}
      <View style={{marginVertical: 40,}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, paddingHorizontal: 20}}>
          <Text style={{fontFamily: 'OpenSans-Bold', color: '#C4C4C5', fontSize: 16}}>Recommended</Text>
          <TouchableOpacity>
            <Text style={{fontFamily: 'OpenSans-Regular', color:'#EE8E45', fontSize: 14}}>View All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item)=> `${item.id}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={220}
          />
        </View>
      </View>

    </ScrollView>
  );
};

export default Home;

const MenuButton = ({name, title, onPress})=>{
  return (
    <TouchableOpacity onPress={onPress} style={{alignItems: 'center'}}>
      <View style={{width: 60, height: 60, backgroundColor: '#2E394F', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Ionicon name={name} size={30} color='#C4C4C5'/>
      </View>
      <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 12, color: '#C4C4C5', marginTop: 5}}>{title}</Text>
    </TouchableOpacity>
  );
};

const renderItem = ({item})=>{
  return (
    <TouchableOpacity>
      <View style={{padding: 20, borderRadius: 20, width: 250, height: 320, backgroundColor: '#2E394F', marginHorizontal: 10, alignItems: 'center'}}>
        <Image source={{uri: item.image}} style={{width: '100%', height: 180, borderRadius: 20}}/>
        <Text style={{fontFamily: 'OpenSans-SemiBold', fontSize: 14, color: '#C4C4C5', marginTop: 10}}>{item.title}</Text>
        <View style={{position: 'absolute', bottom: 20, left: 20, right: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicon name='location' color='#636BF1' size={12} style={{marginRight: 3}}/>
            <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 12, color: '#C4C4C5'}}>{item.location}</Text>
          </View>
          <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 12, color: '#C4C4C5'}}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#172132',
    // paddingHorizontal: 20
  },
});
