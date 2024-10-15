import './App.css'
// import Modal from './components/utilities/Modal'
//import Loader from './common/Loader'
//import Sidebar from './layouts/Sidebar'
//import MailList from './pages/MailList' 
import SendMail from './pages/SendMail'
//import MailList from './pages/MailList'
//import MailReceive from './pages/MailReceive'
//import FollowingMail from './pages/FollowingMail'

function App() {

  return (
    <div className='bg-black'>
      {/* <Modal error={false} /> */}
      {/* <Loader/> 
      <Sidebar on={true} handleClick={false}/>
      <MailList /> */}
       <SendMail /> 
      {/* <MailList /> 
      <MailReceive /> 
      <FollowingMail /> */}
    </div>
  )
}

export default App
