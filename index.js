import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Todoapp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => toggleTask(item.id)}
    >
      <View style={[styles.checkbox, { borderColor: item.completed ? 'gray' : 'black' }]}>
        {item.completed && <View style={styles.checkmark} />}
      </View>
      <Text style={[styles.taskText, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:50,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    width: 5,
    height: 10,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    transform: [{ rotate: '45deg' }],
  },
  taskText: {
    marginLeft: 8,},});

export default Todoapp;


// // // import { View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native'
// // // import React, {useState} from 'react'
// // // import Constants  from 'expo-constants'

// // // export default BmiCalculator = () => {
// // //     const [weight, setweight]= useState('')
// // //     const [height, setheight]= useState('')
// // //     const [bmi,setbmi]= useState('')
// // //     const [description,setdescription]= useState('')
    
// // //     const calculateBMI = () => {
// // //         const bmi=weight/((height/100)*(height/100))
// // //         setbmi(bmi.toFixed(1))

// // //         if(bmi <18.5){
// // //             setdescription('Underweight, Eat More!!!')
// // //         }
// // //         else if(bmi >=18.5 && bmi <=24.9){
// // //             setdescription('Normal, Keep it up and stay healthy')
// // //         }
// // //         else if(bmi >= 25 && bmi<= 29.9)
// // //         {
// // //             setdescription('Overweight,Start doing exercises!!')
// // //         }
// // //         else{
// // //             setdescription('Obese, Work hard in Gym!!')
// // //         }
// // //     }
// // //     return (
// // //         <View style={styles.container}>
// // //             <View style={styles.title}>
// // //                 <Text style={styles.titleText}>BMI Calculator</Text>
// // //             </View>
// // //             <TextInput
// // //                 style={styles.input}
// // //                 value={weight}
// // //                 onChangeText={(text) => setweight(text)}
// // //                 placeholder='Weight in Kg'
// // //                 keyboardType='numeric'
// // //             />
// // //             <TextInput
// // //                 style={styles.input}
// // //                 value={height}
// // //                 onChangeText={(text) => setheight(text)}
// // //                 placeholder='Height in Cm'
// // //                 keyboardType='numeric'
// // //             />
// // //             <TouchableOpacity
// // //                 style={styles.button}
// // //                 onPress={calculateBMI}
// // //             >
// // //                 <Text style={styles.buttonText}>calculate</Text>
// // //             </TouchableOpacity>
// // //             <View style={styles.resultView}>
// // //                 <Text style={styles.result}>{bmi}</Text>
// // //                 <Text style={styles.result}>{description}</Text>

// // //             </View>
// // //         </View>
// // //     )
// // // }

// // // // export default BmiCalculator

// // // const styles = StyleSheet.create({
// // //     container: {
// // //       flex: 1,
// // //       paddingTop: Constants.statusBarHeight,
// // //       backgroundColor:'white'
// // //     },
// // //     title: {
// // //         backgroundColor:'#87CEEB',
// // //         height:80,
// // //         justifyContent:'center',
// // //         alignItems:'center',
// // //         marginBottom:10
// // //     },
// // //     titleText:{
// // //         fontSize:30,
// // //         color:'red',
// // //         fontWeight:'bold'
// // //     },
// // //     input:{
// // //         height:55,
// // //         margin:15,
// // //         borderWidth:1/2,
// // //         padding:10,
// // //         borderRadius:5,
// // //         backgroundColor:'#D1D1D1',
// // //         fontSize:18
// // //     },
// // //     button:{
// // //         height:55,
// // //         margin:15,
// // //         borderWidth:1/2,
// // //         padding:10,
// // //         borderRadius:20,
// // //         backgroundColor:'black',
// // //         justifyContent:'center',
// // //         alignItems:'center'
// // //     },
// // //     buttonText:{
// // //         fontSize:25,
// // //         color:'#fff',
// // //         fontWeight:'bold'
// // //     },
// // //     resultView:{
// // //         margin:15
// // //     },
// // //     result:{
// // //         fontSize:25,
// // //         color:'#2c6975',
// // //         fontWeight:'bold'
// // //     }
// // // });

// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   Button,
// //   StyleSheet,
// //   TextInput,
// //   TouchableOpacity,
// // } from "react-native";



// // const ExpenseManager = () => {
// //   const [category, setCategory] = useState("Grocery");
// //   const [amount, setAmount] = useState("");
// //   const [income, setIncome] = useState("");
// //   const [expenses, setExpenses] = useState([]);
// //   const [showDropdown, setShowDropdown] = useState(false);
// //   const [weeklyIncome, setWeeklyIncome] = useState(0);
  
// //   const handleAddExpense = () => {
// //     const newExpense = {
// //       category,
// //       amount: parseFloat(amount), //amount must be converted to float because by default it is string
// //     };
// //     setExpenses([...expenses, newExpense]);//the ...expenses will add the new data with the old data.
// //     setAmount("");
// //   };

// //   const totalWeeklyIncome = () => {
// //     const a = parseFloat(income) + parseFloat(weeklyIncome);
// //     setWeeklyIncome(a);
// //   };

// //   const categoryExpenses = () => {
// //     const categoryExpenses = {};// array used to store all the category expenses
// //     expenses.forEach((expense) => {
// //         if (categoryExpenses[expense.category]) {
// //           categoryExpenses[expense.category] += expense.amount;
// //         } else {
// //           categoryExpenses[expense.category] = expense.amount;
// //         }
// //     });
// //     return categoryExpenses;
// //   };

// //   const toggleDropdown = () => {
// //     setShowDropdown(!showDropdown);
// //   };

// //   const selectCategory = (selectedCategory) => {
// //     setCategory(selectedCategory);
// //     setShowDropdown(false);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Expense Manager</Text>
// //       <View style={styles.inputContainer}>
// //         <TextInput
// //           style={styles.input}
// //           value={income}
// //           onChangeText={setIncome}
// //           placeholder="Enter Today Income"
// //           keyboardType="numeric"
// //         />
// //         <Button title="Add Income" onPress={totalWeeklyIncome} />
// //         <TouchableOpacity
// //           style={styles.dropdownButton}
// //           onPress={toggleDropdown}
// //         >
// //           <Text style={styles.dropdownButtonText}>Category: {category}</Text>
// //         </TouchableOpacity>
// //         {showDropdown && (
// //           <View style={styles.dropdown}>
// //             <TouchableOpacity onPress={() => selectCategory("Grocery")}>
// //               <Text style={styles.dropdownOption}>Grocery</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity onPress={() => selectCategory("Utilities")}>
// //               <Text style={styles.dropdownOption}>Utilities</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity onPress={() => selectCategory("Transportation")}>
// //               <Text style={styles.dropdownOption}>Transportation</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity onPress={() => selectCategory("Entertainment")}>
// //               <Text style={styles.dropdownOption}>Entertainment</Text>
// //             </TouchableOpacity>
// //           </View>
// //         )}
// //         <TextInput
// //           style={styles.input}
// //           value={amount}
// //           onChangeText={setAmount}
// //           placeholder="Enter Expense Amount"
// //           keyboardType="numeric"
// //         />
// //         <Button title="Add Expense" onPress={handleAddExpense} />
// //       </View>
// //       <View style={styles.summaryContainer}>
// //         <View style={styles.summary}>
// //           <Text style={styles.summaryTitle}>Weekly Income:</Text>
// //           <Text style={styles.summaryValue}>Rs.{weeklyIncome}</Text>
// //         </View>
// //         <Text style={styles.summaryTitle}>Weekly Expense by Category:</Text>
// //         {Object.keys(categoryExpenses()).map((cat) => (
// //           <View key={cat} style={styles.summary}>
// //             <Text style={styles.summaryCategory}>{cat}:</Text>
// //             <Text style={styles.summaryValue}>
// //               Rs.{categoryExpenses()[cat]}
// //             </Text>
// //           </View>
// //         ))}
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "#f0f0f0",
// //   },
// //   inputContainer: {
// //     backgroundColor: "#fff",
// //     padding: 20,
// //     borderRadius: 10,
// //     marginBottom: 20,
// //     width: "90%",
// //     shadowColor: "#000",
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 3.84,
// //     elevation: 5,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: "gray",
// //     borderWidth: 1,
// //     marginBottom: 10,
// //     paddingHorizontal: 10,
// //   },
// //   dropdownButton: {
// //     height: 40,
// //     backgroundColor: "#e3e3e3",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: 10,
// //     borderRadius: 5,
// //     marginTop: 10,
// //   },
// //   dropdownButtonText: {
// //     fontSize: 16,
// //   },
// //   dropdown: {
// //     backgroundColor: "#f9f9f9",
// //     borderColor: "gray",
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     paddingHorizontal: 10,
// //     marginBottom: 10,
// //   },
// //   dropdownOption: {
// //     fontSize: 16,
// //     paddingVertical: 5,
// //   },
// //   summaryContainer: {
// //     backgroundColor: "#fff",
// //     padding: 20,
// //     borderRadius: 10,
// //     width: "90%",
// //   },
// //   summary: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginBottom: 5,
// //   },
// //   summaryTitle: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// //   summaryCategory: {
// //     flex: 1,
// //     fontSize: 16,
// //   },
// //   summaryValue: {
// //     fontSize: 16,
// //     color: "#007bff",
// //   },
// // });

// // export default ExpenseManager;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';

// const Converter = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [selectedUnit, setSelectedUnit] = useState('km');
//   const [convertedValue, setConvertedValue] = useState('');
//   const [unitType, setUnitType] = useState('distance');

//   const convertUnits = () => {
//     const value = parseFloat(inputValue);

//     if (isNaN(value)) {
//       setConvertedValue('Invalid input');
//       return;
//     }

//     let result;

//     if (unitType === 'distance') {
//       if (selectedUnit === 'km') {
//         // Convert kilometers to miles
//         const conversionRate = 0.621371; // 1 km = 0.621371 miles
//         result = value * conversionRate;
//       } else if (selectedUnit === 'mi') {
//         // Convert miles to kilometers
//         const conversionRate = 1.60934; // 1 mi = 1.60934 km
//         result = value * conversionRate;
//       }
//     } else if (unitType === 'weight') {
//       if (selectedUnit === 'kg') {
//         // Convert kilograms to pounds
//         const conversionRate = 2.20462; // 1 kg = 2.20462 pounds
//         result = value * conversionRate;
//       } else if (selectedUnit === 'lbs') {
//         // Convert pounds to kilograms
//         const conversionRate = 0.453592; // 1 lb = 0.453592 kg
//         result = value * conversionRate;
//       }
//     }

//     setConvertedValue(result.toFixed(2));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Unit Converter</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter value"
//         keyboardType="numeric"
//         value={inputValue}
//         onChangeText={(text) => setInputValue(text)}
//       />
//       <RNPickerSelect
//         placeholder={{ label: 'Select Type', value: null }}
//         onValueChange={(value) => setUnitType(value)}
//         items={[
//           { label: 'Distance', value: 'distance' },
//           { label: 'Weight', value: 'weight' },
//         ]}
//         style={{
//           inputIOS: styles.pickerInput,
//           inputAndroid: styles.pickerInput,
//         }}
//       />
//       <RNPickerSelect
//         placeholder={{ label: 'Select Unit', value: null }}
//         onValueChange={(value) => setSelectedUnit(value)}
//         items={unitType === 'distance' ? [
//           { label: 'Kilometers (km)', value: 'km' },
//           { label: 'Miles (mi)', value: 'mi' },
//         ] : [
//           { label: 'Kilograms (kg)', value: 'kg' },
//           { label: 'Pounds (lbs)', value: 'lbs' },
//         ]}
//         style={{
//           inputIOS: styles.pickerInput,
//           inputAndroid: styles.pickerInput,
//         }}
//       />
//       <TouchableOpacity style={styles.convertButton} onPress={convertUnits}>
//         <Text style={styles.convertButtonText}>Convert</Text>
//       </TouchableOpacity>
//       <Text style={styles.result}>Converted Value: {convertedValue}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#3498db',
//   },
//   header: {
//     fontSize: 24,
//     color: 'white',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'white',
//     borderWidth: 1,
//     color: 'white',
//     marginBottom: 20,
//     padding: 10,
//   },
//   pickerInput: {
//     height: 40,
//     borderColor: 'white',
//     borderWidth: 1,
//     color: 'white',
//     marginBottom: 20,
//     padding: 10,
//   },
//   convertButton: {
//     backgroundColor: '#2980b9',
//     padding: 10,
//     borderRadius: 5,
//   },
//   convertButtonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
//   result: {
//     color: 'white',
//     fontSize: 18,
//     marginTop: 20,
//   },
// });

// export default Converter;

