import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          {/* Top Bar */}
          <View style={styles.container}>
            {/* First Row */}
            <View style={styles.header}>
              <Image
                style={styles.profilePic}
                source={require("../../../assets/images/portrait1.jpg")}
              />
              <View style={styles.headerDetails}>
                <Text style={styles.userName}>User Name</Text>
                <Text style={styles.userTitle}>Artisan and Electrician</Text>
                <Text style={styles.userEdit}>Edit Profile</Text>
              </View>
            </View>
            {/*  */}
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Current Status</Text>
              <View style={styles.statusButton}></View>
            </View>
          </View>
        </View>
        {/* Bottom bar */}
      </ScrollView>
    );
  }
}

{
  /* <Text>Location: Tembisa, Maokeng</Text>
              <Text>Cell: 012 345 6789</Text>
              <Text>Email User.Name@gmail.com</Text> */
}
const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    height: 260,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#0077b6",
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    height: 180,
    flexDirection: "row",
  },
  headerDetails: {
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  userName: {
    fontSize: 20,
    textAlign: "center",
  },
  userTitle: {
    fontSize: 15,
  },
  userEdit: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 10,
    width: "80%",
    backgroundColor: "white",
  },
  profilePic: {
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    height: 150,
    width: 150,
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  statusText: {
    color: "white",
    fontSize: 18,
  },
  statusButton: {
    marginHorizontal: 10,
    width: 100,
    height: 30,
    borderWidth: 2,
    borderColor: "black",
  },
});

export default Profile;
