import React from 'react';
import enzyme from 'enzyme';
import { expect } from 'chai';
import Form from '../';


describe("<Form />", () => {
    let wrapper = null;

    afterEach(() => {
        if (wrapper != null)
            wrapper.unmount();
    })

    it('Render correctly', () => {
        wrapper = enzyme.mount(<Form />);
        expect(wrapper.find("form")).to.have.lengthOf(1);
    });
});
