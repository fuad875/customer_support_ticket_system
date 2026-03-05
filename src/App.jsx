import './App.css';
import plusImg from './assets/plussign.png'
import vImg1 from './assets/vector1.png'
import vImg2 from './assets/vector2.png'

function App() {


  return (
    <>
     <div className='max-w-[1200px] max-h-[78px] mx-auto'>
      <div className="navbar   bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
              <a className="btn btn-primary py-3 px-3  rounded"><img src={plusImg}></img>New Ticket</a>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CS-Ticket System</a>
        </div>
        <div className="navbar-end hidden lg:flex flex-col gap-4 items-center  ">
          <ul className="menu menu-horizontal">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
            <a className="btn btn-primary py-3 px-3  rounded"><img src={plusImg}></img>New Ticket</a>
          </ul>
        </div>

      </div>
    </div>

      <div className='max-w-[1000px]  mx-auto' >
        <div className=" flex flex-row justify-between items-center">
          <div className=" w-[708px] h-[250px]  rounded-xl bg-blue-400">
            <img
              src={vImg1}
              alt=" " />
          </div>
          <div className="  w-[708px] h-[250px]  rounded-xl bg-green-200">
            <img
              src={vImg2}
              alt="" />
          </div>
        </div>
      </div>



    </>
  )
}

export default App
