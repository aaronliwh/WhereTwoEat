import React from "react";
import { View, Text, Image } from "react-native";


export default function RestaurantAbout(props) {
  
  const { restaurant, name, image, price, reviews, rating, categories, alias } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • ${rating} ★ (${reviews}+)`;

  function address(){
    let restAdd = ''
    let data = restaurant.location.display_address;

    for(let i = 0; i < data.length; i++) {
      if(i != 0){
        restAdd += ' '
      }
      restAdd += data[i]
    }
    console.log(restAdd)
    return restAdd
  }
    
    
  
  return (
    <View style={{paddingBottom: 20}}>
      {/* <Image source={{ uri: 'https://s3-media4.fl.yelpcdn.com/bphoto/ZMV_6YVtVn3jCFpIIiHLqw/o.jpg' }} style={{ width: "100%", height: 180 }} /> */}
      {/* <RestaurantImage image={image} /> */}
      {/* <RestaurantName name={image} /> */}
      <RestaurantName name={name} />
      <RestaurantDescription description={description + `\n` + 'Location: ' + address()} />
     
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15,
    }}
  >
    {props.description}
  </Text>
);