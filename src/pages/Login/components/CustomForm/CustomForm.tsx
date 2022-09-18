import { UseAuthStore, useForm } from "@/hooks";
import { PrivateRoutes, StatusLogin } from "@/models";
import { AppStore } from "@/redux/storer";
import { ButtonCustom, Label } from "@/style-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CheckBoxInputswitch, CumstonInput, LayoutcheckBoxInputswitch } from "../../style-components/Input.style";


const loginfields = {
  email: 'maicol9@jimenez.co', password: '000000',
}



const Form = () => {
  const { startLogin } = UseAuthStore();
  const { onInputChange, email, password } = useForm(loginfields)
  const userState = useSelector((state: AppStore) => state.user);
  const [Remenberme, setRemenberme] = useState(true);

  const onSummit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startLogin({ email: email, password: password }, Remenberme);
   
  }
  const onSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemenberme(event.target.checked)
  }
  return (
    <form   onSubmit={(e: any)=>onSummit(e)}>
    <Label>Email</Label>
    <div className="MarginBottom-3">
      <CumstonInput 
      type="email" 
      placeholder="Examples@example.com" 
      name="email"
      value={email}
      onChange={onInputChange}/>
    </div>
    <Label>Password</Label>
    <div className="MarginBottom-3">
      <CumstonInput 
      type="password" 
      placeholder="Password"
      name="password"
      value={password}
      onChange={onInputChange}
      className="form-control" />
    </div>
    <LayoutcheckBoxInputswitch>
      <CheckBoxInputswitch  type="checkbox" id="rememberMe"  onChange={onSwitch} checked={Remenberme}/>
      <Label className="checkLabel"  htmlFor="rememberMe">Remember me</Label>
    </LayoutcheckBoxInputswitch>
      <div className="text-center">
      <ButtonCustom type='submit' name='btnGradient' className='.MarginBottom-0  mt-4' disabled={userState.status === StatusLogin.CHEKING}>Sign in</ButtonCustom>
    </div>
  </form>
    
  )
};

export default Form;
