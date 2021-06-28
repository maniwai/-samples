import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: 'Mani',
  email: '',
  channel: '',
  comments: '',
  address: '',
}

const onSubmit = values => {
  console.log('Form data', values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
})

function Demo() {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <div className='uk-form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' component='div' />
        </div>
        <div className='uk-form-control'>
          <label htmlFor='email'>Email</label>
          <Field type='text' id='email' name='email' />
          <ErrorMessage name='email' />
        </div>
        <div className='uk-form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field type='text' id='channel' name='channel' />
          <ErrorMessage name='channel' />
        </div>
        <div className='uk-form-control'>
          <label htmlFor='comments'>Comment</label>
          <Field as='textarea' id='comments' name='comments' />
          <ErrorMessage name='channel' />
        </div>
        <div className='uk-form-control'>
          <label htmlFor='address'>Address</label>
          <Field as='textarea' name='address'>
            {props => {
              const { field, form, meta } = props
              return (
                <div>
                  <input id='address' {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              )
            }}
          </Field>
          <ErrorMessage name='channel' />
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default Demo
