import React from 'react';
import { mount } from 'enzyme';
import LandingPage from '../../../components/Shared/LandingPage';

describe('Should render <LandingPage />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<LandingPage />);
  });
  it('should render the UI', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should simulate email text field change', () => {
    let setEmail = jest.fn();
    const wrapper3 = mount(<LandingPage onChange={setEmail} />);
    const handleChange = jest.spyOn(React, 'useState');
    handleChange.mockImplementation(emailAddress => [emailAddress, setEmail]);
    wrapper3.find('#emaill').at(0).simulate('change', { target: { value: 'eric@gmail.com' } });
    // expect(setEmail).toHaveBeenCalled();
  });
  it('should simulate the create button click', () => {
    // const fn = jest.spyOn(wrapper, 'createAccount');
    // const textField = wrapper.find('#email').at(4);
    // textField.simulate('change', {
    //   target: {
    //     value: 'eric@malaba.com'
    //   }
    // });
    // expect(wrapper2.find('#email').props()).toEqual({
    //   onChange: expect.any(Function),
    //   InputLabelProps: expect.any(Object),
    //   InputProps: expect.any(Object),
    //   className: expect.any(String),
    //   classes: expect.any(Object),
    //   type: "email",
    //   value: "",
    //   variant: "filled",
    //   id: "email",
    //   label: "Email address"
    // });
    // wrapper2.find('#email').simulate('change', {
    //   target: {
    //     value: 'eric@malaba.com'
    //   }
    // });


    const createBtn = wrapper.find('#create').at(1);
    // console.log('---------', wrapper2.find('#email').length);
    // console.log('---------', wrapper2.find('#email').at(1).prop('value'));
    // console.log('---------', wrapper2.find('#email').at(2).prop('value'));
    // console.log('---------', wrapper2.find('#email').at(3).prop('value'));
    // console.log('---------', wrapper2.find('#email').at(4).prop('value'));
    // expect(wrapper2.find('#email').at(1).prop('value')).toBe('eric@malaba.com');
    createBtn.simulate('click');
    global.storage = {
      store: {},
      getItem: (key) => this.store[key],
      setItem: (key, value) => (this.store[key] = value)
    };
    global.localStorage.setItem('user_email', 'email@me.com');
    // expect(creat));
  });
});
