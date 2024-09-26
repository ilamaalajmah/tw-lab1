function NavBar() {
    return (
      <nav className='m-0 p-0'>
        <ul className='flex justify-center gap-4 w-screen bg-[rgb(252,183,0)] py-3 max-sm:gap-5 h-15 m-0 p-0'>
          <li>ALL-CATEGORIES</li>
          <li className='max-sm:hidden'>TODAY DEALS</li>
          <li className='max-sm:hidden'>ELECTRONIC</li>
          <li className='max-sm:hidden'>CLOTHINGS</li>
          <li className='max-sm:hidden'>COMPUTERS</li>
          <li className='max-sm:hidden'>FURNITURES</li>
          <li className='max-sm:hidden'>MOM & BABY</li>
          <li className='max-sm:hidden'>BOOKS & MORE</li>
          {/* Small screen menu icon */}
          <li className='hidden max-sm:w-5 max-sm:inline'>
            <img src="data:image/jpeg;base64,/9j/..." alt="Menu" />
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;