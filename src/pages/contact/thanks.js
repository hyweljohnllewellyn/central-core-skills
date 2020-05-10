import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import _get from 'lodash/get'
import AlertSmile from 'react-feather/dist/icons/smile'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
  <Helmet>
    <title>Thanks</title>
  </Helmet>
  <section className="section thick">
    <div className="container skinny taCenter">
      <p>
        <AlertSmile size="5rem" />
      </p>
      <h1>Thank you!</h1>
      <p>
        We appreciate that you have taken time to send us a message.  
        We will contact you to discuss what you need and arrange a booking for a workshop or individual consultation.
        <br />
        Head back to{' '}
        <Link to="/">Home</Link>
      </p>
    </div>
  </section>
</Layout>
)