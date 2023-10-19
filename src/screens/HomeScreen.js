import { 
  StyleSheet, 
  Text, View, 
  SafeAreaView, 
  Alert,
  Platform,
  Pressable,
  Image,
  TextInput,
  ScrollView
} from 'react-native'
import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import DressItem from '../components/DressItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from '../redux/ProductReducer';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const product = useSelector((state) => state.product.product);
  console.log("cart: ",cart)
  console.log("product: ",product)
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);

  const total = cart.map((item) => item.quantity * item.price).reduce((curr,prev) => curr + prev,0);
  const navigation = useNavigation();

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation(); 
  }, [])

  const checkIfLocationEnabled = async() => {
    try {
      let enabled = await Location.hasServicesEnabledAsync();
      if(!enabled){
        Alert.alert('Location Services not Enabled', 'Please enable the location services', [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }else{
        setlocationServicesEnabled(enabled);
      }
      
    } catch (error) {
      console.log(error)
    }
  };
  const getCurrentLocation = async() => {
    try {

      let {status} = await Location.requestForegroundPermissionsAsync();
  
      if(status !== 'granted'){
        Alert.alert('Permissions Denied', 'Allow app to use location services', [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
  
      const {coords} = await Location.getCurrentPositionAsync();
      console.log(coords);
  
      if(coords){
        const {latitude, longitude} = coords;
  
        let response = await Location.reverseGeocodeAsync({latitude, longitude});
        console.log(response);
  
        for(let item of response){
          let address = `${item.name} ${item.city} ${item.district}`;
          console.log('Address: ', address);
          setdisplayCurrentAddress(address);
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if(product.length > 0) return
    const fetchProducts = () => {
      services.map((service) => {
        dispatch(getProducts(service));
      })
    }
    fetchProducts();
  }, [])
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Profile and location */}
        <View style={styles.profileheader}>
          <MaterialIcons name="location-on" size={24} color="#fd5c63" />
          <View>
            <Text style={styles.home}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>
          <Pressable style={{marginLeft: 'auto', marginRight: 7}}>
            <Image style={styles.profileImage} source={{uri: 'https://lh3.googleusercontent.com/ogw/AKPQZvynNC7WnhRu4HH_oKtvd8g7mnpf0amtWnMq27XhJA=s32-c-mo'}}/>
          </Pressable>
        </View>

        {/* Search baar */}
        <View style={styles.searchBar}>
          <TextInput placeholder="Search for items or More" />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>

        {/* Image Carousel */}
        <Carousel/>

        {/* Services */}
        <Services/>

        {/* Render all products */}
        {product.map((item, index) => (
          <DressItem item={item} key={index}/>
        ))}

      </ScrollView>

      {total === 0 ? (
        null
      ) : (
        <Pressable style={styles.proceedNext}>
          <View>
            <Text style={{fontSize:17,fontWeight:"600",color:"white"}}>{cart.length} item(s) | $ {total}</Text>
            <Text style={{fontSize:15,fontWeight:"400",color:"white",marginVertical:6}}>Extra charges might apply</Text>
          </View>
  
          <Pressable onPress={() => navigation.navigate("PickUp")}>
            <Text style={{fontSize:17,fontWeight:"600",color:"white"}}>Proceed to Pickup</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  ) 
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 40 : 0,
    backgroundColor: '#F0F0F0'
  },
  home: {
    fontSize: 18, fontWeight: "600"
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  profileheader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  searchBar: {
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.8,
    borderColor: "#C0C0C0",
    borderRadius: 7,
  },
  proceedNext: {
    backgroundColor: "#088F8F",
    padding: 10,
    marginBottom: 40,
    margin: 15,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
  },
})