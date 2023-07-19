import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Md Shoel',
    email: 'shoel@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Soumya Roy',
    email: 'soumya@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ritam das',
    email: 'ritam@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  

]

export default users
