import React from "react";
import { Text } from "react-native";
import { Searchbar } from 'react-native-paper';
import { List, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from "react-native";
import { DataTable } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Chip } from 'react-native-paper';
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { VictoryPie } from 'victory-native';

export default function Fooddetails({ route, navigation }) {


    /* constructor =()=> {
 
         super()
        this.state = {
 
             checkbox: false
         }
     } 
    
         
 */
    const [showMore, setShowMore] = React.useState(false);
    const [showChart, setShowChart] = React.useState(false);


    const { item } = route.params;


    return (


        <ScrollView>
            <View>

                <Card>

                    <Card.Cover style={{ height: 240, borderRadius: 0 }} source={item.Image} />
                    <Card.Title style={{ borderRadius: 0, backgroundColor:'#f5f5f5' }} title={item.title} subtitle="" />

                </Card>
                <View style={style.chip}  >


                    <Chip style={{ margin: 6 }} icon="" > <Text style={{ fontSize: 10 }}> tavuk göğsü</Text></Chip>
                    <Chip style={{ margin: 6 }} icon="" ><Text style={{ fontSize: 10}}>bezelye</Text></Chip>
                    <Chip style={{ margin: 6 }} icon="" ><Text style={{ fontSize: 10 }}>kabak</Text></Chip>
                    <Chip style={{ margin: 6 }} icon="" ><Text style={{ fontSize: 10 }}>patates</Text></Chip>
                    <Chip style={{ margin: 6 }} icon="" ><Text style={{ fontSize: 10 }}>havuç</Text></Chip>
                    <Chip style={{ margin: 6 }} icon="" ><Text style={{ fontSize: 10 }}>yeşil biber</Text></Chip>
                    <Chip style={{ margin: 6 }} icon="" > <Text style={{ fontSize: 10 }}>soğan</Text></Chip>

                </View>

                <View style={style.recipesdescription} >

                    <View style={style.recipeskalori}>
                        <Ionicons style={{ padding: 5, fontSize: 24 }} name="flame-outline" />
                        <Text style={{ fontSize: 16, fontWeight: "700" }}> {item.calorie}  </Text>
                    </View  >
                    <View style={style.vr}></View>
                    <View style={style.recipestime}>
                        <Ionicons style={{ padding: 5, fontSize: 24 }} name="calculator-outline" />
                        <Text style={{ fontSize: 16, fontWeight: "700" }}>  {item.Amount}  </Text>
                    </View>


                </View>

                <DataTable>


                    <DataTable.Header style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} >
                        <DataTable.Title  ><Text style={style.Baslik}>Besin Degerleri</Text>
                        </DataTable.Title>

                        <Text onPress={() => setShowChart(!showChart)} style={{ color: '#8a2be2', fontSize: 16, fontWeight: "700" }}>Grafik</Text>

                    </DataTable.Header>



                    {showChart && <View style={{ backgroundColor: '' }}>
                        <VictoryPie
                            data={[
                                { x: "Karbonhidrat (gr)", y: 48 },
                                { x: "Protein", y: 40 },
                                { x: "Yağ (gr)", y: 55 }
                            ]}
                            colorScale={["blue", "green", "red",]}

                            radius={({ datum }) => 120 + datum.y - 30}
                            innerRadius={40}
                            labelRadius={({ innerRadius }) => innerRadius + 20}

                            style={{ labels: { fill: "white", fontSize: 14, fontWeight: "bold" } }}

                        />


                    </View>}

                    <DataTable.Row>
                        <DataTable.Cell>Karbonhidrat (g)</DataTable.Cell>
                        <DataTable.Cell numeric>159</DataTable.Cell>

                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Protein (g)</DataTable.Cell>
                        <DataTable.Cell numeric>159</DataTable.Cell>

                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Yağ (g)</DataTable.Cell>
                        <DataTable.Cell numeric>237</DataTable.Cell>

                    </DataTable.Row>



                    {showMore &&
                        <DataTable>
                            <DataTable.Row>
                                <DataTable.Cell>Lif (g)</DataTable.Cell>
                                <DataTable.Cell numeric>159</DataTable.Cell>

                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Sodyum (mg)</DataTable.Cell>
                                <DataTable.Cell numeric>237</DataTable.Cell>

                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Potasyum (mg)</DataTable.Cell>
                                <DataTable.Cell numeric>237</DataTable.Cell>

                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Kalsiyum (mg)</DataTable.Cell>
                                <DataTable.Cell numeric>237</DataTable.Cell>

                            </DataTable.Row>


                        </DataTable>

                    }


                </DataTable>


                <Button mode="contained" style={{ marginTop: 4, borderRadius: 0 }} onPress={() => setShowMore(!showMore)}>
                    Daha Fazlasini Gor
                </Button>
                <View>

                    <Card>

                        <Card.Content>
                           
                            <Paragraph style={{ padding: 5, fontSize: 16 }} >{item.description}</Paragraph>
                        </Card.Content>

                    </Card>
                </View>
            </View></ScrollView>

    );
};


const style = StyleSheet.create({
    Baslik: {
        alignItems: "center",
        fontSize: 15,


    },
    repicesname: {
        alignItems: 'center',
        justifyContent: "center",


    },
    recipesdescription: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 40,
        marginVertical: 10,


    },
    recipeskalori: {

        alignItems: "center",

    },
    recipestime: {

        alignItems: "center",

    },
    AnaBaslik: {

        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,


    },

    chip: { flexWrap: 'wrap',flexDirection:"row",  },



})

