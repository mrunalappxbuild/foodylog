import {FlatList, flatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

function renderCategoryItem

function CategoriesScreen(){
     return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={}/>
}

export default CategoriesScreen;