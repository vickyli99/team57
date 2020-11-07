import React from 'react';
import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';



class DataList extends Component {

  static navigationOptions =
  {
     title: 'DataList',
  };

constructor(props) {

   super(props)

   this.state = {

     TextInput_userID: '',
     TextInput_homeAirport : '',
     TextInput_pointsNeeded: '',
     TextInput_typeOfPoints : '',
     TextInput_savedRoutes: ''
   }

 }

 InsertStudentRecordsToServer = () =>{

      fetch('https://web.illinois.edu:2083/cpsess7330461724/frontend/paper_lantern/filemanager/showfile.html?file=InsertUserInfo.php&fileop=&dir=%2Fhome%2Fwhydontwe%2Fpublic_html%2Fphp&dirop=&charset=&file_charset=&baseurl=&basedir=', {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        userID : this.state.TextInput_userID,

        homeAirport : this.state.TextInput_homeAirport,

        pointsNeeded : this.state.TextInput_pointsNeeded,

        typeOfPoints: this.state.TextInput_typeOfPoints, 

        savedRoutes: this.state.TextInput_savedRoutes
      })

      }).then((response) => response.json())
          .then((responseJson) => {

            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);

          }).catch((error) => {
            console.error(error);
          });

}

 GoTo_Show_StudentList_Activity_Function = () =>
  {
    this.props.navigation.navigate('Second');
    
  }

 render() {
   return (

<View style={styles.MainContainer}>


       <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> User Info Form </Text>
 
       <TextInput
         
         placeholder="Enter UserName"

         onChangeText={ TextInputValue => this.setState({ TextInput_userID : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TextInput
         
         placeholder="Enter homeAirport"

         onChangeText={ TextInputValue => this.setState({ TextInput_homeAirport : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TextInput
         
         placeholder="Enter pointsNeeded"

         onChangeText={ TextInputValue => this.setState({ TextInput_pointsNeeded : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

       <TextInput

         placeholder="Enter typeOfPoints"

         onChangeText={ TextInputValue => this.setState({ TextInput_typeOfPoints : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} >

        <Text style={styles.TextStyle}> INSERT STUDENT RECORD TO SERVER </Text>

      </TouchableOpacity>

      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_StudentList_Activity_Function} >

        <Text style={styles.TextStyle}> SHOW ALL INSERTED STUDENT RECORDS IN LISTVIEW </Text>

      </TouchableOpacity>
 

</View>
           
   );
 }
}

export default DataList