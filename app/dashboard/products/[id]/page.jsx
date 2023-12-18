import React from 'react'
import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css'

const ProductId = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" fill/>
            </div>
       IPhone
        </div>

        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
            <label >Title</label>
            <input type="text" name='title' placeholder='Iphone' />
            <label >Price</label>
            <input type="number" name='price' placeholder='50000' />
            <label >Stock</label>
            <input type="number" name='stock' />
            <label >Color</label>
            <input type="text" name='color' placeholder='Red' />
            <label >Size</label>
            <textarea type="text" name='size' placeholder='Wayanad' />
            <label >Cat </label>
            <select name="cat" id="cat">
                <option value="Juallery">juallery</option>
                <option value="cloths">Cloths</option>
            </select>
            <label >Discription </label>
            <textarea name="desc" id="desc"  rows="10" placeholder='Description'></textarea>
<button>Update</button>
          
            </form>
          

        </div>
    </div>
  )
}

export default ProductId