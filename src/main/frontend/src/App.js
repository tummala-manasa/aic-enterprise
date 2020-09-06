import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

// import { GLogin } from './features/auth/GLogin';
import { Navbar } from './features/navbar/Navbar';
import { Homepage } from './features/homepage/Homepage';
import { Footer } from './features/homepage/common/Footer';
import { updateEmailAuthDetails } from './features/auth/authSlice';
import { GLogin } from './features/auth/GLogin';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserDetails = async (token) => {
      const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
      try {
        const userDetailsResponse = await axios.get('/auth/user-details', { headers });
        if (userDetailsResponse)
          dispatch(updateEmailAuthDetails(userDetailsResponse.data.payload));
    
      } catch (err) {
        console.log('Error while fetching User details', err.message);
        return null;
      }
    }

    const cookies = new Cookies();
    const authToken = cookies.get('auth_token');
    
    if (authToken)
      getUserDetails(authToken);
  }, [dispatch])

  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path='/login' component={GLogin} /> */}
        <Route path='/' component={Homepage} />
      </Switch>
      <GLogin style={{ visibility: 'hidden'}} />
      <Footer />
    </Router>
  );
}

export default App;
