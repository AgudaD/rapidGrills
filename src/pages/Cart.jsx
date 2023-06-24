import CartTop from '../components/CartTop'
import rider from '../assets/rider.png'

const Cart = () => {
  return (
    <div>
      <CartTop />
      <div className='px-12 py-6'>
        <div className='flex items-center gap-10 p-3 shadow-md drop-shadow-lg'>
            <img src={rider} alt="" />
            <div>
                <p className='text-sm'>Estimated delivery</p>
                <p className='text-xl font-semibold'>Now (30 min)</p>
            </div>
        </div>

        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <p className='bg-gray-400 p-2 text-lg'>1</p>
                <div>
                    <p className='text-pink-500 text-lg'>Exclusive Subway Deal</p>
                    <p className='text-gray-500 text-sm'>Chicken Teriyaki</p>
                </div>
            </div>
            <p className='text-gray-500 text-sm'>$50</p>
        </div>
      </div>
    </div>
  )
}

export default Cart
