import Link from 'next/link'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='header-sec'>
      {/* header logo */}
        <div className='header-logo'>
          <Image 
          src={"/brand-logo.png"}
          alt='The Shoe Spot logo'
          width={100}
          height={70}
          />
        </div>
        {/* creating a navbar */}
        <nav className='nav-sec'>
            <Link className='border' href="/">Home</Link>
            <Link className='border' href="/about">About</Link>
            <Link className='border' href="/products">Product</Link>
            <Link className='border' href="/contact">Contact</Link>
            <FaShoppingCart className='shop-cart'/>
        </nav>
    </header>
  )
}

export default Header