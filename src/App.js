import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [crypto, setCrypto] = useState('');
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [link, setLink] = useState('');
  const [eur, setEur] = useState('');
  const [usd, setUsd] = useState('');
  const [des, setDes] = useState('');


  const handleSubmit = () => {
    const url = `https://api.coingecko.com/api/v3/coins/${crypto}`;

    axios.get(url).then(res => {
      setImg(res.data.image.large);
      setName(res.data.name);
      setSymbol(res.data.symbol);
      setLink(res.data.links.homepage[0]);
      setEur("Europen Price:"+ res.data.market_data.current_price.eur);
      setUsd("United State Price:"+ res.data.market_data.current_price.usd);
      setDes(res.data.description.en);
    });

  }
  return (
    <div className="App">
      <h1 className='title'>Crypto Serch</h1>
      <div className='search'>

        <input
          type='text'
          value={crypto}
          onChange={(e) => setCrypto(e.target.value)}
          placeholder='enter the of cripto'
          className='list-input'
          required
        />

      </div>

      <button onClick={handleSubmit} type='submit' className='btn'>Submit</button>
       <div className='container'>
        <div className='crypto-info'>
          <img src={img} alt='crypto' width="150" />
          <br/>
          <h1 className='crypto-title'>{name}</h1>
          <h2>{symbol}</h2>
          <h2><a className='link' href={link} >{link}</a></h2>
          <br/>
          <h2>{eur}</h2>
          <h2>{usd}</h2>
        </div>
        <div className="des">
          {des}
          </div>
       </div>
      
    </div>
  );
}

export default App;
