import React from 'react';
import
{ View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

import  Categories from '../components/categories';
import Produtos from '../../produtos';
import Icon from 'react-native-vector-icons/Feather';

import Fundo from '../../assets/fundo.jpg';

import style from './style';

export default function Home({navigation}){
    return(
        <View style={style.container}>
            <ImageBackground style={style.fundoImg} source={Fundo}>
            <Text style ={style.logo}>Garagem Velha</Text>
            </ImageBackground>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
             style ={{width:"100%", height:80, marginTop:10,}}>
                 <Categories color="#839bd3"textColor='#fff' text='Fender'/>
                 <Categories color="#1b0080"textColor='#fff' text='Gibson'/>
                 <Categories color="#1d5e02"textColor='#fff' text='Suhr'/>
                 <Categories color="#757873"textColor='#fff' text='Ibanez'/>
                 <Categories color="#424242"textColor='#fff' text='Gretsch'/>
            </ScrollView>
        
            <ScrollView vertical showsHorizontalScrollIndicator={false}>
                {
                    Produtos.map((item , index) => {
                        return(
                        <View key={item.id} style={style.item}>
                            <Image style={{ width:100, height:100 }} source={{uri : item.img}}>

                            </Image>
                            <Text>{item.name}</Text>
                            <Text>{item.preco}</Text>
                            <TouchableHighlight onPress={() =>{}}>
                                <Icon name="shopping-bag" size={30} color="#000"></Icon>
                            </TouchableHighlight>

                        </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    );
}
