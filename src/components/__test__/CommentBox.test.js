import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox/CommentBox';

it("contains a textarea and a button", () => {
    const wrapped = mount(<CommentBox />);

    console.log(wrapped.find("textarea"));
    console.log(wrapped.find("button"));

    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
});