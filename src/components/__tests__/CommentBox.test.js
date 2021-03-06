import React from 'react';
import Root from 'Root';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox/CommentBox';


let wrapped = null;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it("contains a textarea and 2 buttons", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(2);
});


describe("the textarea", () => {
    
    beforeEach(() => {
        wrapped.find("textarea").simulate("change", { 
            target: { value: "new comment" } 
        });
    
        wrapped.update();
    });

    it("has a type area, that users can type in", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    });
    
    it("makes type area to get emptied after submit", () => {
        wrapped.find("form").simulate("submit");
        wrapped.update();
        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});