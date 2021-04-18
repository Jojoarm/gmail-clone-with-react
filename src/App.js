import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        //the user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>
      {/* if there is no user we render the login page at first */}
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {/* only display the sendMail component when the compose button is clicked */}
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
        
    </Router>
  );
}

export default App;
