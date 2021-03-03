import React, {useReducer, useCallback, useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import InputText from "./InputText";
import { signUp } from "../../store/actions/user";


const FORM_INPUT_VALIDATE = "FORM_INPUT_VALIDATE";
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_VALIDATE) {
    const updateValues = {
      ...state.inputsValues,
      [action.input]: action.value
    };
    const updateValidities = {
      ...state.inputsValidities,
      [action.input]: action.isValid
    };
    let updateFormIsValid = true;
    for (const key in updateValidities) {
      updateFormIsValid = updateFormIsValid && updateValidities[key];
    }
    return {
      inputsValues: updateValues,
      inputsValidities: updateValidities,
      formIsValid: updateFormIsValid
    };
  }
  return state;
};

export default function CardRegister() {
    const dispatch = useDispatch()
    const error = useSelector(state => state.user.error)
    const [count, setCount] = useState(0)
    const [user_type, setUser_type] = useState(count !=0 ? 'BUYER' : '')
    const [formState, dispatchFromState] = useReducer(formReducer, {
        inputsValues: {
          email: "",
          fullname:"",
          password: "",
          confirm_password: ""
        },
        inputsValidities: {
          email: false,
          fullname: false,
          password: false,
          confirm_password: false
        },
        formIsValid: false
      });

      useEffect( async () => {
        const response = await fetch('http://localhost:3000/first', {
          method: 'GET',
          headers:{
              'Content-Type': 'application/json'
          }
      })
      const res = await response.json();
      setCount(res.count)
      }, [])
      const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
          dispatchFromState({
            type: FORM_INPUT_VALIDATE,
            isValid: inputValidity,
            value: inputValue,
            input: inputIdentifier
          });
        },
        [dispatchFromState]
      );
      console.log(':::::::::::::::::',count)
  const submitHandler = async () => {
    if (!formState.formIsValid) {
      console.log('No valid form')
      return;
    }
    await dispatch(
      signUp(
        formState.inputsValues.email,
        formState.inputsValues.password,
        formState.inputsValues.fullname,
        user_type
      )
    );
    //console.log('User type:::',user_type) 
    console.log('Is a  valid form')
    return ;
  };
    return (
              <div className="card">
                <div className="card-header bg-primary">
                <Brand/>
                </div>
                <div className="card-body p-5">
                  <h4 className="text-dark mb-5">Sign Up</h4>
                    <div className="row">
                    {error &&
                    <div class="alert alert-dismissible fade show alert-danger" role="alert">
                      {error}
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                   </div>}
                      <div className="form-group col-md-12 mb-4">
                        <InputText
                            type="text"
                            id="fullname"
                            name="fullname"
                            styleInput="form-control input-lg"
                            placeholder="Fullname"
                            errorText="Please enter your fullname"
                            value={formState.inputsValues.fullname}
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            initiallyValid={false}
                            required
                        />
                      </div>
                     
                        {count > 0 && <div class="form-group col-md-12 mb-4">
                          <select onChange={(event)=>setUser_type(event.target.value)} class="form-control" id="user_type" name="user_type" >
                            <option value="BUYER">BUYER</option>
                            <option value="SELLER">SELLER</option>
                          </select>
                        </div>

                        }
                      <div className="form-group col-md-12 mb-4">
                        <InputText
                            type="email"
                            id="email"
                            name="email"
                            styleInput="form-control input-lg"
                            placeholder="Email"
                            errorText="Please enter a valid email address"
                            value={formState.inputsValues.email}
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            initiallyValid={false}
                            required
                            email
                        />
                      </div>
                      <div className="form-group col-md-12 ">
                        <InputText
                            type="password"
                            id="password"
                            name="password"
                            styleInput="form-control input-lg"
                            placeholder="Password"
                            errorText="must be at least 6 chars long"
                            value={formState.inputsValues.password}
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            initiallyValid={false}
                            required
                            minLength={8}
                            />
                      </div>
                      <div className="form-group col-md-12 ">
                        <InputText
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            styleInput="form-control input-lg"
                            placeholder="Confirm Password"
                            errorText="Please, Enter the same password above"
                            value={formState.inputsValues.confirm_password}
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            initiallyValid={false}
                            required
                            confirmPassword={formState.inputsValues.password}
                            minLength={8}
                            />
                      </div>
                      <div className="col-md-12">
                        <div className="d-inline-block mr-3">
                          <label className="control control-checkbox">
                            <input type="checkbox" />
                            <div className="control-indicator"></div>
                            I Agree the terms and conditions
                          </label>
                    
                        </div>
                        <button onClick={submitHandler} className="btn btn-lg btn-primary btn-block mb-4">Sign Up</button>
                        <p>Already have an account?
                          <Link className="text-blue" to="/login">Sign in</Link>
                        </p>
                      </div>
                    </div>

                </div>
              </div>
    )
}
