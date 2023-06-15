import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { addProduct, getProducts } from "../Redux/Admin/api";
import AdminProductCards from "../Components/AdminProductCards";



export interface NewDataType {
  src1:string;
  name: string;
  image: string;
  material: string;
  currentPrice:number;
  originalPrice:number;
  video:string;
  rating:number,
  id?: number;
}





const initialState = {
  src1:"",
  currentPrice:0,
  originalPrice:0,
  video:"",
  name: "",
  image: "",
  rating:0,
  material: "",
};

export const Admin = () => {
  // const dispatch=useDispatch()
  // const Products:IAdmin_Product[]=useSelector((store:Admin_Products_State)=>store.Admin_Products)
  // console.log(Products,"products")
const [allProducts,setAllProducts]=useState<NewDataType[]>([])
// const [edited, setEdited] = useState<NewDataType[]>([])
  const [newData,setNewData] = useState<NewDataType>(initialState)


  const handleChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const {value,name} = e.target

    setNewData({...newData, [name] : value})
    console.log(newData)
  }
  const handleSubmitPost = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addProduct(newData)
}



useEffect(()=>{
getProducts().then((res)=>{
  setAllProducts([...res])
})
},[])

console.log(allProducts)
  return (
    <div className={`${styles.admin}`}>
      <h1>Welcome to Admin Portal</h1>

      <div className={`${styles.AdminPageContainer}`}>
      <div className={`${styles.Sortbar}`}>
     
<form action=""> 
<p>  Search products</p>
  <input type="text" placeholder="Search by id" name="id" />
  <p>  Sort By Material</p>
<select name=" material" id=""   >
              <option value="">Material</option>
              <option value="Diamond">Diamond</option>
              <option value="Solitaire">Solitaire"</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
            </select>
            <p>  Sort By Price</p>
            <select name=" material" id=""   >
              <option value="">Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
            <p>Filter By Price</p>
<div className={`${styles.Checkbox}`}>

            <input type="checkbox"  value="25000" />
            <label htmlFor="">Above 25000</label>
</div>
<div className={`${styles.Checkbox}`}>

            <input type="checkbox"  value="25000" />
            <label htmlFor="">15000 - 25000</label>
</div>
<div className={`${styles.Checkbox}`}>

            <input type="checkbox"  value="25000" />
            <label htmlFor="">Under 25000</label>
</div>
<div className={`${styles.Checkbox}`}>

            <input type="checkbox"  value="25000" />
            <label htmlFor="">Under 25000</label>
</div>
<div className={`${styles.Checkbox}`}>

            <input type="checkbox"  value="25000" />
            <label htmlFor="">Under 1000</label>
</div>
</form>
        </div>
        <div className={`${styles.AdminProductsList}`}>


        {allProducts.map((el: NewDataType) => 
           (
            <div  className={`${styles.AdminProductCards}`} >
<img src={el.src1} alt="" />
<p>{el.name}</p>
<p>{el. material}</p>
<h2>{el.currentPrice} Rs</h2>
<div className={`${styles.Edit_deletebutton}`}>
<button className={`${styles.editbtn}`}>Edit</button>
<button  className={`${styles.deletebtn}`}>Delete</button>
</div>
            </div>
           )
          )}
        </div>

        <div className={`${styles.AddingSection}`}>
          <div className={`${styles.ProductAddingForm}`}>


            <p>Add new product</p>


  <form action="" onSubmit={handleSubmitPost}>

  <input type="text" placeholder="Product Name"  name="name" onChange={handleChange}/>
            <select name=" material" id=""  onChange={handleChange} >
              <option value="">Category</option>
              <option value="Diamond">Diamond</option>
              <option value="Solitaire">Solitaire"</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
            </select>
            <div className={`${styles.pricetodiscount}`}>
              <input type="text" placeholder="Price" name="originalPrice" onChange={handleChange} />
              <p>To</p>
              <input type="text" placeholder="Discount" name="currentPrice" onChange={handleChange} />
            </div>
            <input type="text" placeholder="Upload Image link" name="src1" onChange={handleChange}/>

            <div className={`${styles.SlidingComponent}`}>
              <p>Rating</p>
              <div className={`${styles.slider}`}>
                <input type="range" min="1" max="5" step="1" id="slider" name="rating" onChange={handleChange} />

                <div className={`${styles.slidingnumber}`}>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                </div>
              </div>
            </div>

            <div className={`${styles.tagBestSeller}`}>
              <label htmlFor="">Best-Seller</label>
              <input type="checkbox" name="BestSeller" onChange={handleChange}value="BestSeller" checked/>
            </div>
            <input type="text" placeholder="Video about product"  name="src2" onChange={handleChange} />
            <input type="text" placeholder="Alternate Image" />
            <button type="submit">Add/edit</button>


  </form>



          </div>
        </div>
      </div>
    </div>
  );
};
