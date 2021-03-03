import React, {useReducer, useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import InputText from "./InputText";
import { login } from "../../store/actions/user";

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

export default function CardAuth() {
  const dispatch =useDispatch()
  const error = useSelector(state => state.user.error)
  const [formState, dispatchFromState] = useReducer(formReducer, {
    inputsValues: {
      email: "",
      password: ""
    },
    inputsValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });
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
  const submitHandler = async () => {
    if (!formState.formIsValid) {
      console.log('No valid form')
      return;
    }
    
    await dispatch(
      login(
        formState.inputsValues.email,
        formState.inputsValues.password
      )
    );
    console.log('Is a  valid form')
    return ;
  };
    return (
        <div className="card">
            <div className="card-header bg-primary">
              <Brand/>
            </div>
            <div className="card-body p-5">
                <h4 className="text-dark mb-5">Sign In</h4>
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
                      minLength={6}
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex my-2 justify-content-between">
                      <div className="d-inline-block mr-3">
                        <label className="control control-checkbox">Remember me
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                
                      </div>
                      <p><a className="text-blue" href="#">Forgot Your Password?</a></p>
                    </div>
                    <button onClick={submitHandler}  className="btn btn-lg btn-primary btn-block mb-4">Sign In</button>
                    <p>Don't have an account yet ?
                      <Link className="text-blue" to="/register" href="sign-up.html">Sign Up</Link>
                    </p>
                    <div>  
                    </div>
                  </div>
                </div>
            </div>

        </div>
    )
}
