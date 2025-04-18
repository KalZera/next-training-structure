import Image from 'next/image'
import logo from '../../public/logo.svg'
import userIcon from '../../public/user-icon.svg'
import likeIcon from '../../public/like-icon.svg'
import cartIcon from '../../public/cart-icon.svg'
export default function Header() {
  return (
    <header className="h-[100px] bg-primary  flex justify-between items-center px-3">
        <Image src={logo.src} alt="Logo" width={140} height={39}/>
        <div className='flex items-center'>

         <input type="text" placeholder="Search..." className="p-2 rounded w-96 h-14 bg-white text-primary"/>
         <button className="bg-secondary text-white px-4 py-2 rounded h-full">
          search
         </button>
        </div>
        <div className='flex items-center'>
          <button className="flex gap-2 text-white px-4 py-2 rounded h-full">
          <Image src={userIcon.src} alt="Logo" width={24} height={24}/>
            Sign In
          </button>
          <button className="flex gap-2 text-white px-4 py-2 rounded h-full">
          <Image src={likeIcon.src} alt="Logo" width={24} height={24}/>
            Favorites
          </button>
          <button className="flex gap-2 text-white px-4 py-2 rounded h-full"> 
          <Image src={cartIcon.src} alt="Logo" width={24} height={24}/>
            Cart
          </button>
        </div>
         
    </header>
  )
}