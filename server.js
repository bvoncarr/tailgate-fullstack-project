const express = require("express");
const Sequelize = require('sequelize');
const { User, Interest } = require('./models');
const app = express();
const PORT = 3008;

app.use(express.json());
app.use(express.urlencoded());

// create user
// app.post('/users', async (req, res) => {
//   const { firstName, lastName, email } = req.body

//   try{
//   const newUser = await User.create({firstName,lastName,email})

//   return res.json(userAdded) 
//   } catch(err){
//     console.log(err)
//     return res.status(500).json(err)
//   }

// });

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// // create user
// app.post('/users', async (req, res) => {
//   const { name, email } = req.body

//   try{
//   const newUser = await User.create({name, email})

//   return res.json(userAdded) 
//   } catch(err){
//     console.log(err)
//     return res.status(500).json(err)
//   }

// });



app.get('/users/by-last-name', async (req, res) => {
  const users = await User.findAll({
      attributes: ['lastName']
  });
  res.json(users);
});

// // delete user
// app.delete('/users/:id', async (req, res) => {
//   const id = req.params.id
//   try {
//     const user = await User.findOne({ where: { id } })

//     await user.destroy()

//     return res.json({ message: 'User deleted!' })
//   } catch (err) {
//     console.log(err)
//     return res.status(500).json({ error: 'Something went wrong' })
//   }
// });



// app.put('/users/:id', async (req, res) => {
//   const id = req.params.id
//   const { firstName, lastName, email} = req.body
//   try {
//     const user = await User.findOne({ where: { id } })

//     user.firstName = firstName
//     user.lastName = lastName
//     user.email = email

//     await user.save()

//     return res.json(user)
//   } catch (err) {
//     console.log(err)
//     return res.status(500).json({ error: 'Something went wrong' })
//   }
// });

// app.post('/posts', async (req, res) => {
//   const { userid, body } = req.body

//   try {
//     const user = await User.findOne({ where: { uuid: userUuid } })

//     const post = await Post.create({ body, userId: user.id })

//     return res.json(post)
//   } catch (err) {
//     console.log(err)
//     return res.status(500).json(err)
//   }
// })


  app.listen(PORT, () => {
  console.log(`Tailgators API is running on port ${PORT}`);
  });
