import './App.css'
//import Loader from './common/Loader'
//import Sidebar from './layouts/Sidebar'
//import MailList from './pages/MailList' 
import SendMail from './pages/SendMail'
//import MailList from './pages/MailList'
//import MailReceive from './pages/MailReceive'
//import FollowingMail from './pages/FollowingMail'

function App() {

  return (
    <>
      {/* <Loader/> 
      <Sidebar on={true} handleClick={false}/>
      <MailList /> */}
      <SendMail /> 
      {/* <MailList /> 
      <MailReceive /> 
      <FollowingMail /> */}
    </>
  )
}

export default App
