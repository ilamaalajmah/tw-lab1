function CarouselItem() {
    return (
      <div className='flex flex-row justify-center items-start gap-4'>
        {/* الكارد الأول */}
        <div className='flex flex-col justify-start items-start m-10 p-10 bg-white p-4 border border-gray-300 rounded shadow-md w-5/12 max-sm:w-full'>
          <h2 className='text-2xl font-bold text-left'>WOODEN MINIMISTIC CHAIRS</h2>
          <p className='text-lg text-left'>SALE UP TO</p>
          <p className='text-3xl font-bold text-left text-red-600'>40% OFF</p>
          <button className='mt-4 bg-[rgb(252,183,0)] text-black py-2 px-4 rounded hover:bg-yellow-400'>
            Shop Now
          </button>
          <img 
            className='w-[50%] max-sm:w-[60%] object-cover rounded mt-2' 
            src="https://www.besthf.com/bcassets/bcpublic_2/landingPages/ChairLandHeader_1r.jpg" 
            alt="Wooden Chairs"
          />
        </div>
  
        {/* الكارد الثاني */}
        <div className='flex flex-col items-center bg-white p-4 border border-gray-300 rounded shadow-md w-5/12 max-sm:w-full mt-6'>
          <h2 className='text-2xl font-bold text-center'>WOODEN MINIMISTIC CHAIRS</h2>
          <p className='text-lg text-center'>SALE UP TO</p>
          <p className='text-3xl font-bold text-center text-red-600'>40% OFF</p>
          <button className='mt-4 bg-[rgb(252,183,0)] text-black py-2 px-4 rounded hover:bg-yellow-400'>
            Shop Now
          </button>
          <img 
            className='w-[50%] max-sm:w-[70%] object-cover rounded mt-4'  // تم تقليل عرض الصورة
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCRYnsUFOspBAE3uOTrFX7c6j9PqlM2WhKA&s" 
            alt="Wooden Chairs"
          />
        </div>
      </div>
    )
  }
  
  export default CarouselItem;