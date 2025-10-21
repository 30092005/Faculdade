import { Tabs } from "expo-router/tabs";
import { MaterialIcons } from "@expo/vector-icons"
 
export default function Layout (){
    return(

        <Tabs screenOptions={{

            headerShown: false
        }}>
            

            <Tabs.Screen name="tela_2/home" options={{
                tabBarLabel: "Home",
                tabBarIcon: (cor) => <MaterialIcons name="home" size={20} color={cor.focused ? 'black' : 'gray' } />
            }} />
            <Tabs.Screen name="tela_3/my_tasks" options={{
                tabBarLabel: "Minha Tarefa",
                tabBarIcon: (cor) => <MaterialIcons name="task" size={20} color={cor.focused ? 'black' : 'gray' } />
            }} />
            <Tabs.Screen name="tela_4/create_tasks" options={{
                tabBarLabel: "Criar Tarefa",
                tabBarIcon: (cor) => <MaterialIcons name="add-task" size={20} color={cor.focused ? 'black' : 'gray' } />
            }} />
            <Tabs.Screen name="tela_1/login" options={{
                tabBarLabel: "Logout",
                tabBarIcon: (cor) => <MaterialIcons name="logout" size={20} color={cor.focused ? 'black' : 'gray' } />
            }} />

        </Tabs>

    )


}