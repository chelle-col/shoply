import ItemDetails from './ItemDetails';
import rootReducer from './rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from "@testing-library/react";

const store = createStore( rootReducer );
const testItem = {
    "1":
    {
    "name": "testItem",
    "price": 100.00,
    "description": "tesing",
    "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
    }
};



it("Should Render", function () {
    render(
        <Provider store={store}>
            <ItemDetails itemArray={Object.entries(testItem)[0]}/>
        </Provider>
        );
});

it("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}>
            <ItemDetails itemArray={Object.entries(testItem)[0]}/>
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});