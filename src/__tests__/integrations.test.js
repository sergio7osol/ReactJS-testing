import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App/App';

it("can fetch a list of comments and display them", () => {
    // render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // find fetComments button and click it
    wrapped.find("action='async-fetch'").simulate("click");

    // expect to find a list of comments - 500 LI
    expect(wrapped.find("li").length).toEqual(500);

    wrapped.unmount();
});