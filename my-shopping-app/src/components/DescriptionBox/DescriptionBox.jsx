import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates bthe buying and selling of products or services over the internet.it serves as a virtual market place where businesses ans individuals can show case their products,interact with customers and conduct transactions without the need for a physicalpresence E-commerce have gained immense popularity due to their convenience,accessebility,and the global reach they offer. </p>
            <p>E-commerce typically display products or service along with detailed descriptions,images,prices ,and any available variations(e.g.sizes,colors).Each product usually has its own delicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox