const express = require("express");
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const { User } = require('./models');
const app = express();
const PORT = 3015;
const path = require('path');

const db = require('./config/config.json');

app.use(express.json());
app.use(express.urlencoded());

const es6Renderer = require('express-es6-template-engine');
const { userInfo } = require("os");
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('routes', path.join(__dirname, 'routes'))


// home route
app.get('/', async (req, res) => {
  res.render('routes/index', {
    locals: {
      title: "Lets Tailgate"
    },
    partials: {
      head: "/partials/head"
    }
  })
})
// app.get('/profile', async (req, res) => {
//   res.send('this page works')
// });

app.get('/profile', async (req, res) => {
  res.render('routes/profile',{
    locals: {
      title: "Profile Page",
      // user:
      // path
    },
    partials: {
      head: "/partials/head"
    }
  })
});

//signup
app.post('/users/create', async (req, res) => {
  const { firstName, lastName, email, location } = req.body

  try{
  const newUser = await User.create({firstName, lastName, email, location})

  return res.redirect('/profile') 
  } catch(err){
    console.log(err)
    return res.status(500).json(err)
  }

});


// //selects all users
// app.get('/users/all', async (req, res) => {
//   const path = req.path
//   const users = await User.findAll();
//   res.render('users', {
//     locals: {
//       title: "TailGators",
//     },
//     partials: {
//       head: "/partials/head"
//     }
//   })
// })


// // //get users by id
// // app.get('/users/:id', async (req, res) => {
// //   const users = await User.findAll();
// //   res.render('profile');
// // });

// // create user-signup


// //select events
// app.get('/events/search', async (req, res) => {
//   const { } = req.body
//   try{
//   const newEvent = await events.create({})
//   return res.redirect('/') 
//   } catch(err){
//     console.log(err)
//     return res.status(500).json(err)
//   }
// });

// //get users by last name
// app.get('/users/by-last-name', async (req, res) => {
//   const users = await User.findAll({
//       attributes: ['lastName']
//   });
//   res.json(users);
// });

// // delete user
// app.delete('/users/:id', async (req, res) => {
//   const id = req.params.id
//   try {
//     const user = await User.findOne({ where: { id } })

//     await user.destroy()

//     return res.json({ message: 'Profile Deleted...' })
//   } catch (err) {
//     console.log(err)
//     return res.status(500).json({ error: 'Something went wrong' })
//   }

// });

app.listen(PORT, () => {
console.log(`Tailgators API is running on port ${PORT}`);
});


