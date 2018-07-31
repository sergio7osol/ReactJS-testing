import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';

import CommentList from 'components/CommentList/CommentList'

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

describe("commentList", () => {
    it("creates one LI per comment", () => {
        wrapped.update();
    });
});