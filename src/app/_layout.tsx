// import { View, Text, StyleSheet } from "react-native";
// import { Ionicons, FontAwesome } from "@expo/vector-icons";
// import { Link } from "expo-router";

// export default function Home() {
//   return (
//     <View style={style.pagina}>
//       <View style={style.menu}>
//         <Link href="/home" asChild>
//           <Text style={style.txt_menu}>
//             <Ionicons name="home" size={16} color="white" /> Home
//           </Text>
//         </Link>

//         <Link href="/my_tasks" asChild>
//           <Text style={style.txt_menu}>
//             <Ionicons name="list" size={16} color="white" /> My Tasks
//           </Text>
//         </Link>

//         <Link href="/create_tasks" asChild>
//           <Text style={style.txt_menu}>
//             <Ionicons name="checkmark-done" size={16} color="white" /> Tasks
//           </Text>
//         </Link>

//         <Link href="/login" asChild>
//           <Text style={style.txt_menu}>
//             <FontAwesome name="sign-in" size={16} color="white" /> Login
//           </Text>
//         </Link>
//       </View>
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   pagina: {
//     flex: 1,
//     backgroundColor: "white",
//     justifyContent: "center",
//   },
//   menu: {
//     height: "10%",
//     width: "100%",
//     backgroundColor: "black",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     gap: 30,
//   },
//   txt_menu: {
//     marginTop: 15,
//     color: "white",
//   },
// });
