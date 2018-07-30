import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App/App';
import CommentBox from 'components/CommentBox/CommentBox';
import CommentList from 'components/CommentList/CommentList';

let wrapped = null;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('Shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('Shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});