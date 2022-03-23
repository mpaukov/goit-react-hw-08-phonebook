import { Routes, Route } from 'react-router-dom';
import { HomeView, LoginView, RegisterView } from 'views';
import { Container } from './App.styled';
import AppBar from 'components/AppBar';

function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
      </Routes>
    </Container>
  );
}

export { App };
