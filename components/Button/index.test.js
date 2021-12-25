import React from "react";
import renderer from "react-test-renderer";
import {Button} from './index';

describe('Button', () => {
    it('should render the default props', () => {
        const component = renderer.create(<Button label="">SOME TEXT</Button>);
        expect(component.toJSON).toMatchSnapshot();
    });
});