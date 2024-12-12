import AboutImage from '@/components/AboutImage'
import React from 'react'

const page = () => {
  return (
    <div className="aboutContainer">
      <div className="textContainer">
        <h2 className="about-heading">About The Shoe Spot</h2>
        <p className="about-paragraph">
          Since our inception in <b>2001</b>&comma; The Shoe Spot has been dedicated to providing high&dash;quality footwear for every occasion. From elegant sandals to stylish sneakers and a wide range of versatile shoe collections&comma; we have continually strived to bring comfort&comma; durability&comma; and the latest fashion trends to our valued customers. Our journey over the years has been fueled by a passion for delivering exceptional craftsmanship and ensuring customer satisfaction.
          <br />
          <br />
          We take pride in our attention to detail and commitment to quality&comma; making sure that every pair of shoes meets the highest standards. <em>Whether you&apos;re searching for casual wear&comma; formal styles&comma; or athletic footwear&comma; The Shoe Spot has something for everyone</em>. Our diverse selection caters to men&comma; women&comma; and children&comma; ensuring that every member of the family can find the perfect fit.
          <br />
          <br />
          At The Shoe Spot&comma; we believe that shoes are more than just a necessity &dash; they are a reflection of your personality and style. That&apos;s why we continuously innovate and update our collection to stay ahead of the curve in the ever-changing fashion industry. Our team works tirelessly to source premium materials&comma; collaborate with skilled artisans&comma; and ensure that every product we offer exceeds expectations.
          <br />
          <br />

Join us in celebrating over two decades of excellence, as we continue to bring you footwear that combines comfort, style, and unmatched quality. Thank you for making The Shoe Spot your trusted choice for all your footwear needs. Together, let&apos;s take every step with confidence and style.

          </p>
      </div>
      <div className="imageContainer">
        <AboutImage />
      </div>
    </div>
  );
};

export default page;
