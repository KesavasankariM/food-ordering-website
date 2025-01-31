import pizza1 from '../assets/pizza1.png'
import pizza2 from '../assets/pizza2.png'
import pizza3 from '../assets/pizza3.png'
import Card from './Card'

const Populardishes = () => {
    const menu = [
        {
            id:1,
            pizza:pizza1,
            name:"peporoni pizza",
            desc: "Spicy pepperoni,cheese and tomato sauce",
            rating:4
        },
        {
            id:2,
            pizza:pizza2,
            name:"Sushi pizza",
            desc: "Sushi flavours on a crispy crust",
            rating:4.5
        },
        {
            id:3,
            pizza:pizza3,
            name:"Margarita pizza",
            desc: "Fresh basil,mozzarella and tomato sauce", 
            rating:4.7
        },
    ] 
  return (
    <div className='py-20 px-5 lg:px-0 lg:py-20 bg-gray-800'>
        <div className='text-center max-w-7xl mx-auto'>
            <h1 className='text-3xl lg:text-4xl font-bold text-red-500'>Popular Dishes</h1>
            <p className='text-sm lg:text-xl text-white pt-2'>Check out our most popular and highly rated dishes.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 pt-11 gap-7'>
                {
                    menu.map((item)=>{
                        return <Card key={item.id} menu = {item} />
                    })
                }
            </div>
        </div>


    </div>
  )
}

export default Populardishes