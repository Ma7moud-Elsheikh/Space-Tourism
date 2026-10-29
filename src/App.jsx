import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const Crew = lazy(() => import('./pages/Crew'));
const Destination = lazy(() => import('./pages/Destination'));
const Technology = lazy(() => import('./pages/Technology'));

function App() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="destination" element={<Destination />} />
                    <Route path="crew" element={<Crew />} />
                    <Route path="technology" element={<Technology />}>
                        <Route path="tech1" element={<tech1 />} />
                    </Route>
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
