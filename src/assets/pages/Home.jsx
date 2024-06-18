import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const { user } = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

  }, [user])


  return (
    <div className='container-home p-5 text-center'>

      <h3 className='desplay-3 text-dark fw-bold'> Home Page</h3>
      <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt deleniti reiciendis odit velit soluta, est aperiam, numquam dolores earum autem iusto consectetur! Sapiente nisi esse temporibus voluptatum, laudantium incidunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis est obcaecati fugit repudiandae numquam deserunt recusandae, sint suscipit odio quas expedita soluta inventore asperiores labore vel ipsa iusto perspiciatis rerum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio eveniet quidem quisquam minima dicta beatae, provident reiciendis excepturi deserunt modi commodi molestiae sapiente nihil, nisi tempore soluta? In, quaerat!Lorem</p>

    </div>
  )
}

export default Home
