import './bootstrap';
import '../css/app.css';
import CalendarState from './context/calendarState';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import axios from 'axios';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <CalendarState>
                <App {...props} />
            </CalendarState>
        );
    },
});

InertiaProgress.init({ color: '#4B5563' });