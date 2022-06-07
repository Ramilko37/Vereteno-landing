// import React, {useState} from 'react';
// import {useForm} from 'react-hook-form';
// import "./style.css";
// import DropDown from "../../../components/DropDown";
// import styled from 'styled-components/macro';;
// import {Checkbox} from "../../../components/CheckBox";
//
//
// const LoginForm = ({handleSignUp, handleSignIn, registered, codeValue, setValue}) => {
//
//     const {register, handleSubmit, formState: {errors}} = useForm();
//     const [phoneHandled, setPhoneHandled] = useState(false);
//
//
//     const onSubmitSignUp = (data) => {
//         console.log(data)
//         // handleSignUp(data);
//         setPhoneHandled(!phoneHandled);
//         console.log(phoneHandled);
//     };
//
//     const onSubmitSignIn = (data) => {
//         console.log(data)
//         // handleSignIn(data);
//         setPhoneHandled(!phoneHandled);
//         console.log(phoneHandled);
//     };
//
//     console.log(errors);
//     console.log(registered)
//
//
//
//     const [checked, setChecked] = useState(false);
//
//     const handleCheckboxChange = () => {
//         setChecked(!checked)
//         console.log('checked', checked)
//     }
//
//
//     return (
//         <>
//             {
//
//                     <>
//                     <form style={{display: phoneHandled ? 'none' : 'flex'}}
//                           className="sign-up"
//                           onSubmit={!registered ? handleSubmit(onSubmitSignUp) : handleSubmit(onSubmitSignIn)}>
//                         <div className='flexWrapper'>
//                             <FlexWrapper>
//                                 <DropDown codeValue={codeValue} setValue={setValue}
//                                 />
//                                 <PhoneInput
//                                              type="phone"
//                                              placeholder="phone"
//                                              {...register("phone_number", {
//                                                  required: true,
//                                                  pattern: {
//                                                      value: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
//                                                      message: 'CPF inválido',
//                                                  }
//                                              })
//                                              } />
//                             </FlexWrapper>
//                             <SubmitButton
//                                 disabled={!checked}
//                                 type="submit"
//                             />
//                         </div>
//                     </form>
//                         <form className="sign-up" onSubmit={handleSubmit(onSubmitSignIn)}
//                               style={{display: !phoneHandled ? 'none' : 'block'}}
//                         >
//                             <input
//                                 id="code"
//                                 placeholder="Код"
//                                 {...register("code", {
//                                     required: "required",
//                                 })}
//                                 type="password"
//                             />
//                             <SubmitButton
//                                 disabled={!checked}
//                                 type="submit"
//                             />
//                         </form>
//                     <FlexWrapper onClick={handleCheckboxChange}>
//                         <Checkbox checked={checked} />
//                         <TextContent>При входе в аккаунт, я соглашаюсь с<LinkSpan href='#' >политикой конфиденциальности</LinkSpan></TextContent>
//                     </FlexWrapper>
//                         </>
//                     // :
//                     // <form className="sign-in" onSubmit={handleSubmit(onSubmitSignIn)}>
//                     //     <PhoneInput  style={{display: phoneHandled ? 'none' : 'block'}}
//                     //             type="phone"
//                     //            placeholder="phone"
//                     //            {...register("phone_number", {
//                     //                required: true,
//                     //                pattern: {
//                     //                    value: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
//                     //                    message: 'CPF inválido',
//                     //                }
//                     //            })
//                     //            } />
//                     //     <CodeInput
//                     //         style={{display: phoneHandled ? 'block' : 'none'}}
//                     //         id="code"
//                     //         placeholder="Код"
//                     //         {...register("code", {
//                     //             required: "required",
//                     //         })}
//                     //         type="password"
//                     //     />
//                     //     <input className='submitButton' type="submit"/>
//                     // </form>
//             }
//         </>
//     );
// }
// export default LoginForm;
