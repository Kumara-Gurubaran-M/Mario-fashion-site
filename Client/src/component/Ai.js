import React, { useState } from 'react';
import { Link, generatePath } from "react-router-dom"
import { addItem } from './redux/reducer/cartreducer';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"

function Ai() {
    const [inputText, setInputText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [clothType, setClothType] = useState('');
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState(true)


    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleClothChange = (e) => {
        setClothType(e.target.value);
    };
    const params = useParams();
    const dispatch = useDispatch();

    const addToCart = () => {
        const item = {
            productName: inputText,
            img: imageUrl,
            price: Math.floor(Math.random() * (5000 - 1000 + 1)) + 100,
            count: 1,
            selectedSize: selectedSize,
            clothType: clothType
        };
        dispatch(addItem(item))
        setCart(false)
    }

    const handleGenerateClick = async () => {
        const payload = {
            text_prompts: [
                {
                    text: inputText,
                    weight: 1
                }
            ],
            sampler: "K_EULER_ANCESTRAL",
            steps: 2,
            seed: 0
        };

        setLoading(true);
        try {
            const response = await fetch('http://localhost:9000/imagegenerate', {
                method: "post",
                body: JSON.stringify(payload),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            const imageBase64 = responseData.artifacts[0].base64;
            const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
            setImageUrl(imageUrl);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching image:', error);
            setLoading(false);
        }
    };


    return (
        <div className='ai'>
            <h1>Customize your own Custom</h1>
            <p>Please give a proper detailed instruction about your coustum to get perfect design as you think and mention gender </p>
            <div className='about'>
                <input
                    type='search'
                    placeholder='Search....'
                    value={inputText}
                    onChange={handleInputChange}
                />
                <button className='ai-button' onClick={handleGenerateClick} disabled={loading}>
                    {loading ? 'Generating...' : 'Generate'}
                </button>
            </div>
            {imageUrl && <img src={imageUrl} alt="Generated" />}



            <div className='options'>
                <label htmlFor="dress-size">Select Dress Size: </label>

                <select id="dress-size" value={selectedSize} onChange={handleChange}>
                    <option value="">--Select--</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                <br /><br />
                <label htmlFor="clothType">Cloth Type: </label>
                <select id="dress-size" value={clothType} onChange={handleClothChange}>
                    <option value="">--Select--</option>
                    <option value="silk">Silk</option>
                    <option value="cotton">Cotton</option>
                    <option value="fabric">Fabric</option>
                </select>
            </div>



            {cart ?
                <button className='AI-button' onClick={addToCart} disabled={!inputText || !imageUrl || !selectedSize || !clothType}>Add to Cart</button>
                :
                <Link to="/Cart"><button className='AI-button'>Go to Cart</button></Link>

            }
        </div>
    );
}

export default Ai;
