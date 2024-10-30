import React from 'react';
import Cardimg from '../assets/iphone14pro.png';

const Card = () => {
    return (
        <>
            <div className="productCard w-[304px] rounded-lg bg-gradient-to-tr from-blue-300 to-green-500 p-0.5 shadow-lg">
                <div className="productInner w-[300px] bg-[#F2FBFF] p-5 rounded-md text-center">
                    <div className="productImage flex justify-center">
                        <img className="productImageContent w-[100px]" src={Cardimg} alt="iPhone 14 Pro Max" />
                    </div>
                    <div className="productDetails leading-[15px]">
                        <h1 className="productTitle font-bold text-xl mb-2">iPhone 14 Pro Max</h1>
                        <p className="productDescription text-[14px]">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
