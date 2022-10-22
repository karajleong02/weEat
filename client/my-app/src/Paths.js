import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home, Profile, Suggestions } from '..src/pages';
import Layout from './pages/Layout';

export default function Paths() {
    <BrowserRouter>
        <Routes>
            <Route path="/" component={<Layout />}>
                <Route index component={<Login />} />
                <Route path="home" component={<Home />} />
                <Route path="profile" component={<Profile />} />
                <Route path="suggestions" component={<Suggestions />} />
            </Route>
        </Routes>
    </BrowserRouter>
}