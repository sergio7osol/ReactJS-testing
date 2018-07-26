import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox/CommentBox';

let wrapped = null;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it("contains a textarea and a button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
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