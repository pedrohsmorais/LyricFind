import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { View, StyleSheet, Text, ScrollView, Alert, Switch } from 'react-native';

const statusBarHeigth = StatusBar.currentHeigth ? StatusBar.currentHeigth : 40;

export default function LyricScreen({ route }) {

    const { autor, music } = route.params;
    
    const [lyric, setLyric] = useState(undefined);
    const [name, setName] = useState('');
    const [traducao, setTraducao] = useState(false);
    const [data, setData] = useState([]);
    const [isEnabled, setIsEnabled] = useState(false);
    
    
    useEffect(() => {
        async function getLyric() {
            try {
                const response = await fetch(`http://api.vagalume.com.br/search.php?art=${autor}&mus=${music}`);
                const lyric = await response.json();
    
                if (lyric.type !== 'exact') {
                    Alert.alert(`Não encontramos a música pesquisada!`);
                } else {
                    setData(lyric);
                    setLyric(lyric);
                    setTraducao(lyric.mus[0].lang === 2);
                    setName(lyric.art.name);
                }
            } catch (error) {
                console.error("Erro ao obter a letra:", error);
            }
        }
    
        getLyric();
    }, []);
    
    const toggleSwitch = () => setIsEnabled(!isEnabled);
    
    
 return (
     <View style={styles.container}>
        { traducao ? (<View style={styles.switchContainer}>            
                    {
                        isEnabled ? <Text>Traduzir para o Inglês</Text>
                        :
                        <Text>Traduzir para o Português</Text>
                    }
                    <Switch
                    trackColor={{ false: "#767577", true: "blue" }}
                    thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>) : <></>}
        {lyric ? (isEnabled ? 
        <View style={styles.container}> 
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.lyricContainer}>
                <Text style={styles.responseDescription}>{data.art.name} - {data.mus[0].name}</Text>
                <Text style={styles.lyricText}>{lyric.mus[0].translate[0].text}</Text>
                </View>
            </ScrollView>
        </View> :
        <View style={styles.container}> 
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.lyricContainer}>
                <Text style={styles.responseDescription}>{data.art.name} - {data.mus[0].name}</Text>
                    <Text style={styles.lyricText}>{lyric.mus[0].text}</Text>
                </View>
            </ScrollView>
        </View>) : <View style={styles.loading}><Text>Carregando...</Text></View>}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    switchContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 10,
    },
    responseDescription: {
        fontSize: 26,
        marginVertical: 16
    },
    lyricContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    lyricText:{
        width: '90%',
        fontSize: 15,   
    },
    loading:{ 
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});