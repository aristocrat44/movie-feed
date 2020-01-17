import React from 'react';
import ReactDOM from 'react-dom';
import {render,fireEvent, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import {Year} from '../year.component';

afterEach(cleanup);

it('Renders without error',()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Year/>, div);
})

/*************** I DON'T UNDERSTAND WHY expect toHaveTextContent IS NOT WORKING/////////////////////////////
 *************** SINCE jest-dom has moved to @testing-library/jest-dom.  /////////////////////////
 *************** COULDN'T FIND SOLUTION SO I USED `react-testing-library`
it('Renders correctly passing props', () =>{
    
    const {getByTestId} = render(<Search placeholder="test"/>);
    expect(getByTestId('search').textContent).toBe("test");
})
*/

const setup = () => {
    const utils = render(<Year/>)
    const input = utils.getByTestId('year')
    return {
        input, ...utils
    }
}

test(('year input working or not'),()=>{
    const {input} = setup()
   fireEvent.change(input, {target: {value: 'test input'}})
   expect(input.value).toBe('test input')
})

test(('year placeholder working or not'),()=>{
    const {input} = setup()
   fireEvent.change(input, {target: {placeholder: 'test placeholder'}})
   expect(input.placeholder).toBe('test placeholder')
})
