
export const saveFilter =({name,body}:any)=>{
    const saveDataStringify:any = localStorage.getItem('save');
    const saveData = saveDataStringify ? JSON.parse(saveDataStringify): []
    const findItem = saveData.find((item:any) => item.name === name)
    if(findItem){
        console.log("this name is exist")
    }else{
        saveData.push({name,body})
    }
    localStorage.setItem("save",JSON.stringify(saveData))
}