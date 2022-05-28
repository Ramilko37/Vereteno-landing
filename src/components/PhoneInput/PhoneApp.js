import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";


const PhoneApp = () => {
    // handle events
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // handle submit
    const onSubmit = data => alert(JSON.stringify(data));

    const [countries, setCountries] = useState([])

    useEffect(() =>{
        const data = require('./CountryData.json')
        console.log('data', data)
        setCountries(data)

    },[])
  return (
    <React.Fragment>
      <section>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white w-auto h-96 rounded-lg mx-5 mt-20 sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
            {/* header section */}
            <div className="h-28 flex justify-center items-center shadow-md">
              <p className="uppercase text-4xl font-bold text-center">
                Validate phone Number
              </p>
            </div>

            {/* body section */}
            <div>
              <div className="grid grid-cols-3 mt-14 mx-5 gap-2">
                <div>
                  <div>
                      <select
                      className={`w-full text-2xl rounded-lg ${ errors.code &&
                        " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                      {...register("code", {
                           required: {
                               value: true,
                               message: 'Code is required'
                           }
                         })}
                      >
                        {
                            countries.map((item)=>{
                                return(
                                    <option key={uuidv4()} value={item.calling_code}>
                                        {item.calling_code}
                                    </option>
                                )
                            })
                        }
                      </select>
                  </div>
                  <div>
                  {errors.code && <span className="text-sm text-red-500">{errors.code.message}</span>}
                  </div>
                </div>
                <div className="col-span-2">
                  <div>
                      <input
                      type='tel'
                      placeholder="Phone"
                      className={`w-full text-2xl rounded-lg ${ errors.code &&
                        " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                      {...register("phone", {
                        required: {
                            value: true,
                            message: 'Phone is required'
                        },
                        pattern:{
                            value:/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message:'Please enter a valid phone number'
                        }
                      })}
                      />
                  </div>
                  <div>
                  {errors.phone && <span className="text-sm text-red-500">{errors.phone.message}</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* btn section */}
            <div className="flex justify-center items-center mt-14">
                <input 
                type='submit'
                value='Submit'
                className="w-2/5 h-10 bg-yellow-700 text-white font-bold rounded-lg"
                />
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default PhoneApp;
