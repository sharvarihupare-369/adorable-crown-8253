import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { addProduct, deleteProduct, getProducts, updateProducts } from "../Redux/Admin/api";
import AdminProductCards from "../Components/AdminProductCards";
import { useSearchParams } from "react-router-dom";

export interface NewDataType {
  src1: string;
  src2:string;
  name: string;
  image: string;
  material: string;
  currentPrice: number;
  originalPrice: number;
  video: string;
  rating: number;
  id?: number;
}

const initialState = {
  src1: "",
  src2:"",
  currentPrice: 0,
  originalPrice: 0,
  video: "",
  name: "",
  image: "",
  rating: 0,
  material: "",
};

export const Admin = () => {
  // const dispatch=useDispatch()
  // const Products:IAdmin_Product[]=useSelector((store:Admin_Products_State)=>store.Admin_Products)
  // console.log(Products,"products")

  const [searchParams, setSearchParams] = useSearchParams();
  const initialMaterial = searchParams.getAll("material");
  const initialId = searchParams.get("id");
  const initialType = searchParams.getAll("type");
  const initialOrder = searchParams.getAll("order");

  const [order, setOrder] = useState(initialOrder || undefined);
  const [material, setMaterial] = useState<string[]>(initialMaterial || []);
  const [type, setType] = useState(initialType || []);
  const [id, setId] = useState(initialId || null);
const[editId,setEditId]=useState<number>()

const [deleteId,setDeleteId]=useState<number>()


  const [allProducts, setAllProducts] = useState<NewDataType[]>([]);


  const [editProduct, setEditProduct] = useState<NewDataType>(initialState);



  const [newData, setNewData] = useState<NewDataType>(initialState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
   
   //for adding new product
    setNewData({ ...newData, [name]: value });

    //for editing
    setEditProduct({ ...editProduct, [name]: value });


    console.log(newData);
  };
  const handleSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct(newData);
setAllProducts(pre=> [...pre,newData])
  };

  const obj = {
    params: {
      id: searchParams.get("id"),
      material: searchParams.getAll("material"),
      type: searchParams.getAll("type"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };
;
  useEffect(() => {
    getProducts(obj).then((res) => {
      console.log(res);
      setAllProducts([...res]);
    });
  }, [searchParams]);



  ///Filtering part//////////////////////
  const handelMaterial = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let newMaterial = [...material];
    if (newMaterial.includes(value)) {
      newMaterial = newMaterial.filter((el) => el !== value);
    } else {
      newMaterial.push(value);
    }
    setMaterial(newMaterial);
    console.log(material);
  };

  const handelId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setId(value);
  };



  useEffect(() => {
    let params: Record<string, string | string[]> = {
      material: material,
      type: type,
      order: order,
    };
    if (id !== null) {
      params.id = id; // Assign the value of "id" if it is not null
    }
    setSearchParams(params);
  }, [id, material, order, type]);


  const handleEdit = (productId: number) => {
    const selectedProduct = allProducts.find((product) => product.id === productId);
  
    if (selectedProduct) {
      const { id, ...filteredProduct } = selectedProduct;
      setEditId(productId)
      setEditProduct(filteredProduct);
    }
  };
  console.log(editProduct,"editable") 



const HandelProductChange=()=>{
  console.log("changinggggggggggggggggg")
  updateProducts(editProduct,editId).then((res)=>{
    getProducts(obj).then((res) => {
      console.log(res);
      setAllProducts([...res]);
    });
  })
}



const handelDelete = (id: number) => {
  deleteProduct(id)
    .then(() => {
      // getProducts(obj).then((res) => {
      //   console.log(res);
      //   setAllProducts([...res]);
      // });

      const newAllProducts = allProducts.filter((product) => product.id !== id);
      setAllProducts(newAllProducts);




    })
    .catch((error) => {
      console.error("Failed to delete product:", error);
    });
};




















  //console.log(allProducts)
  return (
    <div className={`${styles.admin}`}>
      <h1>Welcome to Admin Portal</h1>

      <div className={`${styles.AdminPageContainer}`}>
        <div className={`${styles.Sortbar}`}>
          <form action="">
            <p> Search products</p>
            <input
              type="text"
              placeholder="Search by id"
              name="id"
              onChange={handelId}
            />

            <p> Sort By Material</p>

            {/* <select name=" material" id=""  onChange={handelMaterial} >
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
            </select> */}

            <div className={`${styles.Checkbox}`}>
              <input
                type="checkbox"
                value="Diamond"
                onChange={handelMaterial}
              />
              <label htmlFor="">Diamond</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input
                type="checkbox"
                value="Solitaire"
                onChange={handelMaterial}
              />
              <label htmlFor="">Solitaire</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="Silver" onChange={handelMaterial} />
              <label htmlFor="">Silver</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="Gold" onChange={handelMaterial} />
              <label htmlFor="">Gold</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="Pearls" onChange={handelMaterial} />
              <label htmlFor="">Pearls</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input
                type="checkbox"
                value="Gemstone"
                onChange={handelMaterial}
              />
              <label htmlFor="">GemStone</label>
            </div>
            <p>Filter By Price</p>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="25000" />
              <label htmlFor="">Above 25000</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="25000" />
              <label htmlFor="">15000 - 25000</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="25000" />
              <label htmlFor="">Under 25000</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="25000" />
              <label htmlFor="">Under 25000</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="25000" />
              <label htmlFor="">Under 1000</label>
            </div>
            <p>Filter by Rating</p>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="4" />
              <label htmlFor="">4⭐ & above</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="4" />
              <label htmlFor="">3⭐</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="4" />
              <label htmlFor="">2⭐</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="4" />
              <label htmlFor="">1⭐</label>
            </div>
          </form>
        </div>
        <div className={`${styles.AdminProductsList}`}>
          {allProducts.map((el: NewDataType) => (
            <div className={`${styles.AdminProductCards}`}>
              <img src={el.src1} alt="" />
              <p>{el.name}</p>
              <p>{el.material}</p>
              <h2>{el.currentPrice} Rs</h2>
              <div className={`${styles.Edit_deletebutton}`}>
                <button className={`${styles.editbtn}`}   onClick={() =>handleEdit(el.id!)}  >Edit</button>
                <button className={`${styles.deletebtn}`} onClick={()=>handelDelete(el.id!)}   >Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.AddingSection}`}>
          <div className={`${styles.ProductAddingForm}`}>
            <p>Add new product</p>

            <form action="" onSubmit={handleSubmitPost}>

              <input
                type="text"
                placeholder="Product Name"
                name="name"
                value={editProduct.name}
                onChange={handleChange}
              />
              <select name=" material" id="" value={editProduct.material}
             onChange={handleChange}>
                <option value="">Category</option>
                <option value="Diamond">Diamond</option>
                <option value="Solitaire">Solitaire"</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
              </select>
              <div className={`${styles.pricetodiscount}`}>
                <input
                  type="text"
                  placeholder="Price"
                  name="originalPrice"
                  value={editProduct.originalPrice}
                  onChange={handleChange}
                />
                <p>To</p>
                <input
                  type="text"
                  placeholder="Discount"
                  name="currentPrice"
                  value={editProduct.currentPrice}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                placeholder="Upload Image link"
                name="src1"
                onChange={handleChange}
                value={editProduct.src1}
              />

              <div className={`${styles.SlidingComponent}`}>
                <p>Rating</p>
                <div className={`${styles.slider}`}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    id="slider"
                    name="rating"
                    onChange={handleChange}
                  />

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
                <input
                  type="checkbox"
                  name="BestSeller"
                  onChange={handleChange}
                  value="BestSeller"
                  checked
                />
              </div>
              <input
                type="text"
                placeholder="Video about product"
                name="src2"
                value={editProduct.video}
                onChange={handleChange}
              />
              <input type="text" placeholder="Alternate Image" value={editProduct.src2} />
         <div className={`${styles.FormButtonDiv}`}>
         <button type="submit">Add</button>
              <button onClick={HandelProductChange}>Edit </button>
         </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
