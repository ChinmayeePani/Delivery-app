import "./App.css";

function App() {
  return (
    <div>

      {/* navbar */}
      <nav className="navbar">
        <ul className="ul">
          <li>Home</li>
          <li >Services</li>
          <li>Find Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      {/* image & para flexbox */}
      <div className="container">

        {/* image flexbox */}
      <div>
          <img src="/Img/boy.jpg" className='actual_img' />
        </div>

        {/* heading & para flexbox */}
        <div className="p">
          <h1>Trust In The Fastest And Most Reliable Delivery Service !</h1>
          <p>
            Courier companies are known for their fast-paced, reliable, and efficient delivery
            systems. They not only deliver goods and parcels but also transport feelings, emotions,
            affection, and curiosity. People on the receiving end have no limits to their
            excitement, and people sending those too can’t wait to make their loved ones happy. With
            the advancement of time, more and more delivery partners and courier companies are
            evolving. To capture the thrills that every delivery carries with itself and to stand
            out from the others, you need the aid of catchy and creative slogans depicting your
            ideas and intent with the brand.
          </p>

          {/* buttons */}
          <div className="btns">
          <button className="btn">Order Now</button>
          <button className="btn">Contact Us</button>
          </div>

          <div className="chat">
          <button className="chat_btn">Chat with us</button>
          </div>
          
        </div>

        
      </div>
    </div>
  );
}

export default App;
