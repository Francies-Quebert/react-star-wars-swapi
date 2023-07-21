import { logRoles, render, screen } from "@testing-library/react"
import Home from "./Home"
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";
import userEvent from "@testing-library/user-event";
import Layout from "../component/Layout";


describe('Home page should render', () => {

    const routes = [
        {
            path: "/",
            element: <Home />,
        }, {
            path: 'star-war',
            element: <Layout />,
        }
    ];



    const WithProvider = ({ router }: any) => {
        return <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    }



    it('home should have a button to route to star-war page', async () => {

        const router = createMemoryRouter(routes, {
            initialEntries: ["/"],
            initialIndex: 0,
        });
        render(<WithProvider router={router} />)
        const button = screen.getByRole('link', { name: 'START HERE!' });
        expect(button).toBeInTheDocument()

        await userEvent.click(button)
        const image = screen.getByRole('img', {
            name: /banner image/i
        })
        expect(image).toBeInTheDocument()


    })


    it('how have all the content are visible', async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ["/"],
            initialIndex: 0,
        });
        render(<WithProvider router={router} />)

        const welcome = screen.getByRole('heading', {
            name: /welcome!/i
        })


        const join = screen.getByRole('heading', {
            name: /join the dark side/i
        })

        const desc = screen.getByText(
            /i am your father\. search your feelings, you know it to be true! join me, and together we can rule the galaxy as father and son\. it is the only way\./i
        )

        const btn = screen.getByRole('link', {
            name: /start here!/i
        })

        const image = screen.getByRole('img', {
            name: /darthvader/i
        })

        expect(welcome).toBeInTheDocument()
        expect(join).toBeInTheDocument()
        expect(desc).toBeInTheDocument()
        expect(btn).toBeInTheDocument()
        expect(image).toBeInTheDocument()
    }
    )



})