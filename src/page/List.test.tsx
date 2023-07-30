import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";
import List from "./List";
import userEvent from "@testing-library/user-event";


describe('Home page should render', () => {

    const routes = [
        {
            path: "/",
            element: <></>,
        }, {
            children: [
                {
                    path: "/star-war",
                    element: <List />,
                    index: true,
                },
                {
                    path: "/star-war/details/:type/:id",
                    element: <>Details Page</>
                },
            ],
        }
    ];



    const WithProvider = ({ router }: any) => {
        return <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    }



    it('List should be displayed with the planets ', async () => {

        const router = createMemoryRouter(routes, {
            initialEntries: ["/star-war"],
            initialIndex: 0,
            future: {
                v7_normalizeFormMethod: true,
            }
        });
        render(<WithProvider router={router} />)

        await waitFor(() => {
            const allRows = screen.getAllByRole("cell")
            expect(allRows.length).toBe(1)
        })
        await waitForElementToBeRemoved(() => screen.getByText("Through the vast reaches of cyberspace..."));

        const textData = screen.getByText("Luke Skywalker")
        expect(textData).toBeInTheDocument();
    })



    it('List should navigate to deatils page ', async () => {

        const router = createMemoryRouter(routes, {
            initialEntries: ["/star-war","/star-war/people/1"],
            initialIndex: 0,
            future: {
                v7_normalizeFormMethod: true,
            }
        });
        render(<WithProvider router={router} />)
        await waitForElementToBeRemoved(() => screen.getByText("Through the vast reaches of cyberspace..."));

        const viewMoreBtn = screen.getByRole("link",{name:/view more/i})
        await userEvent.click(viewMoreBtn)
        expect(viewMoreBtn).not.toBeInTheDocument();

        expect(screen.getByText('Details Page')).toBeInTheDocument();
        screen.logTestingPlaygroundURL()
    })

})