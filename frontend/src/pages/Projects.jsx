import ProjectsPage from '../components/projectspage/ProjectsPage';
import AndroidApps from '../components/projectspage/AndroidApps';
import { MyContext } from '../Context/Context';
import { useContext } from 'react';
import ShopifyApps from '../components/projectspage/ShopifyApps';

export default function Projects() {
    const { theme } = useContext(MyContext);

    return (
        <div className={theme === 'dark' ? 'bg-gray-800' : 'bg-soft-white'}>
            <AndroidApps />
            <ShopifyApps />
            <ProjectsPage />
        </div>
    );
}