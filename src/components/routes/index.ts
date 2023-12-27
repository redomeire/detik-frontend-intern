import home from "../../page/home.html?raw"
import about from "../../page/about.html?raw"


type Route = {
    path: string,
    component: string
}

export const routes: Route[] = [
    {
        path: '/',
        component: home
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/gallery',
        component: ''
    },
    {
        path: '/news',
        component: ''
    },
    {
        path: '/register',
        component: ''
    },
    {
        path: '*',
        component: '<p>not found</p>'
    }
]
