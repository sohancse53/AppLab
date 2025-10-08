const getFromLocalStorage = () =>{
    const items = localStorage.getItem('installed');
    if(items){
        const ItemsArray = JSON.parse(items);
        return ItemsArray;
    }
    return [];
}


const setToLocalStorage = (obj) =>{
    const ItemsArray = getFromLocalStorage();
    const check = ItemsArray.some(item=>item.id == obj.id)
    if(check){
        alert('App Already Exist')
    }
    else{
      const newItemsArray = [...ItemsArray,obj]
       const newItemsString = JSON.stringify(newItemsArray);
      localStorage.setItem("installed",newItemsString);
    }
 

}

export default setToLocalStorage;