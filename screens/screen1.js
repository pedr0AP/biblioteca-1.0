import React,{Component} from "react";
import {View, Text, TouchableOpacity,StyleSheet} from "react-native";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";

const styles = StyleSheet.create({
     text: { color: "#ffff", fontSize: 15 },
     button: { width: "43%", height: 55, justifyContent: "center", alignItems: "center", backgroundColor: "#F48D20", borderRadius: 15 }
})

getCameraPermissions = async notState => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);

    this.setState ({ cameraPermission: status === "granted",
                    notState: notState,
                    scan: false })
        
} 


export default class Screen1 extends Component{
   constructor(props){
    super(props);    
    
    this.state={
        notState: "normal",
        cameraPermission: null,
        scan: false,
        data: "",
    }
    

   }
   
   
    render(){
        return (
            <View style = {{backgroundColor: "#00ffff" }}>
      <Text>
    Screen1
      </Text>

        <TouchableOpacity style = {styles.button} onPress={()=> this.getCameraPermissions()}>
            
            <Text style = {styles.text}>
            Digitalizar QR code
            </Text>

        </TouchableOpacity>
            </View>
        )

    }

}