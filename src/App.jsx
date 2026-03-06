import { Suspense, use, useState } from 'react';
import './App.css';
import CustomersTicket from './assets/components/CustomersTicket/CustomersTicket';
import plusImg from './assets/plussign.png'
import vImg1 from './assets/vector1.png'
import vImg2 from './assets/vector2.png'
import CustomerCard from './assets/components/CustomerCard/CustomerCard';

const fetchInfo = async () => {
  const res = await fetch('/ticktsinfo.json')
  return res.json();
}



const ticketPromises = fetchInfo()


function App() {
  const [toggle, settoggle] = useState(false)
  const [inProgress, setInProgress] = useState([])
  const [resolvedTickets, setResolvedTickests] = useState([])
  const [selectedid, setSelectedid] = useState({})

  const handleInprogress = (ticket) => {
    if (selectedid[ticket.id] === true)
      return;
    setSelectedid(select => ({ ...select, [ticket.id]: true }))
    setInProgress(select => [...select, ticket])
  }

  const handleResolved = (ticket) => {
    setResolvedTickests(select => [...select, ticket]);
    setInProgress(select =>
      select.filter(sel => sel.id !== ticket.id)
    )
  }



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


      {/* first section */}
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-4">


          <div className="w-full md:w-1/2 h-[250px] rounded-xl bg-blue-400 relative overflow-hidden">
            <img
              src={vImg1}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="text-center">
                <h2 className="text-2xl">In-progress</h2>
                <span className="text-3xl font-bold">{inProgress.length}</span>
              </div>
            </div>
          </div>


          <div className="w-full md:w-1/2 h-[250px] rounded-xl bg-green-200 relative overflow-hidden">
            <img
              src={vImg2}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="text-center">
                <h2 className="text-2xl">Resolved</h2>
                <span className="text-3xl font-bold">{resolvedTickets.length}</span>
              </div>
            </div>
          </div>

        </div>
      </div>


      <Suspense fallback={<h3>Loading.....</h3>}>
        <CustomersTicket
          ticketPromises={ticketPromises}
          handleInprogress={handleInprogress}
          inProgress={inProgress}
          resolvedTickets={resolvedTickets}
          handleResolved={handleResolved}

        ></CustomersTicket>
      </Suspense>




      {/* footer */}


      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Cs-Ticket System</h6>
          <p className="max-w-xs">A Customer Support (CS) Ticket System
            serves as the backbone of modern service
            operations by transforming disorganized
            customer inquiries from emails, chats, and
            calls into a structured digital queue. </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>

        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">@cs-Ticket System</a>
          <a className="link link-hover">@cs-Ticket System</a>
          <a className="link link-hover">@cs-Ticket System</a>
          <a className="link link-hover">support@cst.com</a>
        </nav>

      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} -Ticket System.All right reserved</p>
        </aside>
      </footer>



    </>
  )
}

export default App
