import { Routes, Route } from 'react-router-dom';
import { HomeView, LoginView, RegisterView } from 'views';
import { Container } from './App.styled';
import AppBar from 'components/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import { PrivateRoute } from 'components/PrivateRoute';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactForm />
              <Filter title="Find contact by name" />
              <ContactList />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<></>} />
      </Routes>
    </Container>
  );
}

export { App };
