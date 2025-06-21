import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import summaryApi from './common';
import { useEffect } from 'react';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch()
  const fetchUserDetails = async ()=>{
    const dataResponse = await fetch(summaryApi.current_user.url,{
      method:summaryApi.current_user.method,
      credentials: 'include',
    })
    const dataApi = await dataResponse.json();
    console.log("dataApi", dataApi);

    if(dataApi.success){
           console.log("Fetched user data:", dataApi.data);
      dispatch(setUserDetails(dataApi.data));
      console.log("Dispatched user data to Redux");

    }
    console.log('data-user' ,dataResponse);
    
  }

  useEffect(()=>{
    /**user Details */
fetchUserDetails();
     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
  <>
  <Context.Provider value={{
fetchUserDetails  // user detail fetch

  }}>
    <ToastContainer />
  <Header/>
  <main className='min-h-[calc(100vh-120px)] '>
  <Outlet/>

  </main>
  <Footer/>
</Context.Provider>
  </>
  );
}

export default App;
