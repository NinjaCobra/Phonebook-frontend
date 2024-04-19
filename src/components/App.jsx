import { useEffect, lazy } from "react";
import { useDispatch} from "react-redux";
import Layout  from "./Layout";
import { refreshUser } from "redux/auth/operations";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Routes, Route } from "react-router-dom";
import { useAuth, useTheme } from "hooks";

import { ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from "utils/theme";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts')); 
const ProfilePage = lazy(() => import('../pages/Profile')); 
const VerificationPage = lazy(() => import('../pages/Verification'));

const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();
  const theme = useTheme();

  useEffect(()=>{
    dispatch(refreshUser())
  },[dispatch]);

    return (
      !isRefreshing &&
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
              <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts" />} />
              <Route path="/verify" element={<RestrictedRoute component={VerificationPage} redirectTo="/contacts"/>}/>
              <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts"/>}/>
              <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
              <Route path="/profile" element={<PrivateRoute component={ProfilePage} redirectTo="/login"/>}/>
            </Route>
        </Routes>
      </ThemeProvider>
    )
  };

export default App; 

