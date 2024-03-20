import axios from "axios";
export const BASE_URL = "https://kizaapi.ksesystem.com/"

class ApiServices {

  getToken(){
     let obj = {
        Authorization:sessionStorage.getItem("token")
     }
     return obj;
  }

  getCategory(){
    return  axios.post(BASE_URL+"api/category/all")
  }

  addSubCategory(data){
    return axios.post(BASE_URL+"api/subcategory/add",data,{headers:this.getToken()})
  }

}

export default new ApiServices