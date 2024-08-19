import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import {  addFormData } from '../store/Slice/FormSlice';
import 'tailwindcss/tailwind.css';

// Validation schema with Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  companyName: Yup.string().required('Company name is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const MyForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
    // Dispatch form data to Redux store
    dispatch(addFormData(values));
    message.success("added")
    console.log(values , "valesss");
    
    resetForm();
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          companyName: '',
          subject: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4">
              <Field name="firstName">
                {({ field }: any) => (
                  <Input {...field} placeholder="First Name" className="w-full border border-gray-300 rounded-md p-2" />
                )}
              </Field>
              {errors.firstName && touched.firstName ? (
                <div className="text-red-500 text-sm">{errors.firstName}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <Field name="lastName">
                {({ field }: any) => (
                  <Input {...field} placeholder="Last Name" className="w-full border border-gray-300 rounded-md p-2" />
                )}
              </Field>
              {errors.lastName && touched.lastName ? (
                <div className="text-red-500 text-sm">{errors.lastName}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <Field name="email">
                {({ field }: any) => (
                  <Input {...field} type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md p-2" />
                )}
              </Field>
              {errors.email && touched.email ? (
                <div className="text-red-500 text-sm">{errors.email}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <Field name="phoneNumber">
                {({ field }: any) => (
                  <Input {...field} placeholder="Phone Number" className="w-full border border-gray-300 rounded-md p-2" />
                )}
              </Field>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <Field name="companyName">
                {({ field }: any) => (
                  <Input {...field} placeholder="Company Name" className="w-full border border-gray-300 rounded-md p-2" />
                )}
              </Field>
              {errors.companyName && touched.companyName ? (
                <div className="text-red-500 text-sm">{errors.companyName}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <Field name="subject">
                {({ field }: any) => (
                  <Input {...field} placeholder="Subject" className="w-full border border-gray-300 rounded-md p-2" />
                )}
              </Field>
              {errors.subject && touched.subject ? (
                <div className="text-red-500 text-sm">{errors.subject}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <Field name="message">
                {({ field }: any) => (
                  <Input.TextArea {...field} placeholder="Message" className="w-full border border-gray-300 rounded-md p-2" />
                )}
              </Field>
              {errors.message && touched.message ? (
                <div className="text-red-500 text-sm">{errors.message}</div>
              ) : null}
            </div>
            <Button type="primary" htmlType="submit" className="w-full mt-4">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
