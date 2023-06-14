import React from 'react'
import styles from "./Admin.module.css"
import { getAdminProducts } from '../Redux/Admin/action'
import { useDispatch } from 'react-redux'
export const Admin = () => {
const dispatch=useDispatch()

// React.useEffect(()=>{
//   dispatch(getAdminProducts())
// })

  return (
    <div className={`${styles.admin}`} >
      
<h1>Welcome to Admin Portal</h1>

<div className={`${styles.AdminPageContainer}`}>

  <div className={`${styles.AdminProductsList}`}>

  </div>


  <div  className={`${styles.AddingSection}`}>
 
<div className={`${styles.ProductAddingForm}`}>
<p>Add new product</p>
<input type="text" placeholder='Product Name' />
<select name="Category" id="">
  <option value="">Category</option>
  <option value="Diamond">Diamond</option>
  <option value="Solitaire">Solitaire"</option>
  <option value="Gold">Gold</option>
  <option value="Silver">Silver</option>
</select>
<div className={`${styles.pricetodiscount}`}>
<input type="text" placeholder='Price'  /><p>To</p>
<input type="text" placeholder='Discount'/>
</div>
<input type="text" placeholder='Upload Image link' />

<div className={`${styles.SlidingComponent}`}>
  <p>Rating</p>
  <div className={`${styles.slider}`}>
<input type="range" min="1" max="5"  step="1" id="slider"/>



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
<input type="checkbox" value="BestSeller" />
</div>
<input type="text" placeholder='Video about product'/>
<input type="text" placeholder='Alternate Image' />
<button>Add/edit</button>
</div>
</div>


</div>

    </div>
  )
}
