import AsyncStorage from "@react-native-async-storage/async-storage"

//Storing string value
export const storeStringData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value)
    console.log(`Key : ${key}, and value:${value} saved to storage`)
  } catch (e) {
    console.log('I found an error trying to save to local data', e)
    // saving error
  }
}

//Storing object value
export const storeObjectData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
    console.log('I found an error trying to save to local data', e)
  }
}

// Reading string value
export const getStringData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    console.log(`here is the key value: ${value}`)
    if (value !== null) {
      // value previously stored
      console.log(`here is the key value in if ${value}`)
      return value
    }
    // return value
  } catch (e) {
    // error reading value
    console.log('I found an error trying to read local data', e)
  }
}

//Reading object value
export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('I found an error trying to read local data', e)
  }
}
