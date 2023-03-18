import {FC} from 'react';
import LoginForm from '../components/LoginForm';
import Spacer from '../components/Spacer';
import PublicLayout from '../layouts/PublicLayout';

const Login: FC = () => (
  <PublicLayout>
    <Spacer size={250} />
    <LoginForm />
    <Spacer size={250} />
  </PublicLayout>
);

export default Login;
