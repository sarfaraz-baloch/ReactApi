import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
function Login() {

    const {values, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues:{
        name:'',
        email: '',
        phone:'',
        },
        validationSchema:Yup.object({
            name: Yup.string().min(4, 'Name must be at least 4 characters').max(10, 'Name must be less than 10 characters').required('Name is required'),
            email: Yup.string().email('Invalid email address').matches('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$', 'Invalid email address').required('Email is required'),
            phone: Yup.string().matches(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm, 'Invalid phone number try +923000000000').required('Phone number is required'),
        }),
        onSubmit: (values) => {
          console.log(values)
        }
    })
  return (
    <div className="w-full h-screen flex justify-center items-center p-2 bg-slate-200">
        
  <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>

  <div className="mb-5">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Name
    </label>
    <input
    onChange={handleChange}
      name="name"
      value={values.name}
      type="text"
      id="password"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      required=""
    />
    <p className="text-red-500">{errors.name && touched.name && errors.name}</p>
  </div>


  <div className="mb-5">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your email
    </label>
    <input
    onChange={handleChange}
      value={values.email}
      type="text"
      name="email"
      id="email"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      placeholder="name@flowbite.com"
    //   required=""
    />
    <p className="text-red-500">{errors.email && touched.email && errors.email}</p>
  </div>
  
  <div className="mb-5">
    <label
      htmlFor="repeat-password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Phone Number
    </label>
    <input
    onChange={handleChange}
      name="phone"
      value={values.phone}
      type="text"
      id="repeat-password"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      required=""
    />
    <p className="text-red-500">{errors.phone && touched.phone && errors.phone}</p>
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input
        id="terms"
        type="checkbox"
        defaultValue=""
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        required=""
      />
    </div>
    <label
      htmlFor="terms"
      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      I agree with the{" "}
      <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
        terms and conditions
      </a>
    </label>
  </div>
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Register new account
  </button>
</form>

    </div>
  )
}

export default Login
