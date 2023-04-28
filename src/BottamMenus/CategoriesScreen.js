import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {categories} from '../redux/reducerSlice.js/CategoriesSlice';

export default function CategoriesScreen({navigation}) {
  const [isVisible, setIsVisible] = useState(false);
  const [addCategoryName, setCategoryName] = useState('');

  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.categoriesSlice);
  console.log(categoriesData)
  // const newArr = [];

  // add categories on save button
  const addCategorySaveButton = async () => {
    // await newArr.push(addCategory);
    // console.log(newArr);
    // setCategory('');
    // console.log("Add Categories =>",addCategoryName);
    dispatch(categories(addCategoryName));
  };

  return (
    <View style={styles.container}>
      <View style={styles.ViewButton}>
        {/* Inventory Button */}
        <TouchableOpacity
          style={styles.selectedButton}
          onPress={() => navigation.navigate('Inventory')}>
          <Text style={styles.selectedText}>Inventory</Text>
        </TouchableOpacity>

        {/* Categories Button */}
        <TouchableOpacity style={styles.unselectButton}>
          <Text style={styles.unselectedText}>Categories</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        visible={isVisible}
        transparent={true}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}>
        <View style={styles.modalInnerView}>
          <Text style={styles.addCategoryText}>Add New Category</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Category Name"
            keyboardType="email-address"
            autoCapitalize="sentences"
            value={addCategoryName}
            onChangeText={(addCategoryName) => setCategoryName(addCategoryName)}
            onSubmitEditing={Keyboard.dismiss}
          />

          <TouchableOpacity
            style={styles.cancelButtonBackground}
            onPress={() => setIsVisible(false)}>
            <Text style={styles.saveButton}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButtonBackground}
            onPress={() => [addCategorySaveButton(), setIsVisible(false)]}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      
      {/* View Categories Data */}
        <View style={{marginHorizontal: 20, marginTop: 10, backgroundColor: 'white', height: 40, borderRadius: 15}}>
          <Text style={{marginLeft: 15, marginTop: 10, color: 'black', fontWeight: '600'}}>{addCategoryName}</Text>
        </View>

      {/* Add Categories Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setIsVisible(true);
        }}>
        <Icon name="add-circle" size={25} color="white" style={styles.icon} />
        <Text style={styles.addButtonText}>Add Categories</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectedButton: {
    backgroundColor: 'white',
    marginTop: 20,
    height: 40,
    width: 140,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginLeft: 22,
    marginRight: 22,
  },
  selectedText: {
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    paddingTop: 9,
  },
  unselectButton: {
    backgroundColor: '#008AD8',
    marginTop: 20,
    height: 40,
    width: 140,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginLeft: 22,
    marginRight: 22,
  },
  unselectedText: {
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
    paddingTop: 9,
  },
  addButton: {
    backgroundColor: '#008AD8',
    marginTop: 660,
    alignSelf: 'center',
    height: 45,
    width: 180,
    borderRadius: 30,
    position: 'absolute',
    flexDirection: 'row',
  },
  ViewButton: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  icon: {
    paddingTop: 8,
    paddingLeft: 25,
  },
  addButtonText: {
    marginTop: 12,
    color: 'white',
    fontWeight: '600',
  },
  addCategoryText: {
    color: 'black',
    fontWeight: '600',
    marginLeft: 15,
    marginTop: 10,
    fontSize: 17,
  },
  modalInnerView: {
    marginTop: 90,
    position: 'absolute',
    backgroundColor: '#D9E4EC',
    width: '95%',
    height: 245,
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputField: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  cancelButtonBackground: {
    backgroundColor: 'silver',
    marginTop: 40,
    height: 40,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    marginLeft: 22,
    marginRight: 22,
  },
  saveButtonBackground: {
    backgroundColor: '#008AD8',
    marginTop: 10,
    height: 40,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    marginLeft: 22,
    marginRight: 22,
  },
  saveButton: {
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
    paddingTop: 9,
  },
});
