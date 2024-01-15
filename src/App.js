import logo from './logo.svg';
import './App.css';
import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {

  const clientId = '1003384197313-405gci03q3go9vi68ue62g4sr9q0vhak.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messanger/>
    </GoogleOAuthProvider>
  );
}

export default App;
