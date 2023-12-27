import { routes } from "../components/routes";

export const loadHTMLContent = () => {
    try {
        const pathname = window.location.pathname

        const route = routes.find((route) => route.path === pathname)

        if(route === undefined) throw new Error("route path not found")
        
        return route.component
    } catch (error) {
        console.error(error);
        return '<p>Route not found</p>'
    }
}
