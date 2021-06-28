import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: 'Mani',
  email: '',
  channel: '',
}

const onSubmit = values => {
  console.log('Form data', values)
}

const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }
  if (!values.channel) {
    errors.channel = 'Required'
  }

  return errors
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
})

function Demo() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  console.log('Visited fields', formik.touched)

  return (
    // note: step 1: we specify onSubmit prop to formik.handleSubmit
    // note: will call the onSubmit method of useFormik()
    <form onSubmit={formik.handleSubmit}>
      <div className='uk-form-control'>
        <label htmlFor='name'>Name</label>
        <Field
          type='text'
          id='name'
          name='name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
      </div>
      <div className='uk-form-control'>
        <label htmlFor='email'>Email</label>
        <Field
          type='text'
          id='email'
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
      </div>
      <div className='uk-form-control'>
        <label htmlFor='channel'>Channel</label>
        <Field
          type='text'
          id='channel'
          name='channel'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Demo
