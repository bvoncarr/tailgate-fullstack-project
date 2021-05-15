const express = require("express");
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const { User } = require('./models');
const { Event } = require('./models');
const app = express();
const PORT = 3015;
const path = require('path');

const db = require('./config/config.json');

app.use(express.json());
app.use(express.urlencoded());

const es6Renderer = require('express-es6-template-engine');
const { userInfo } = require("os");
const { as } = require("pg-promise");
const { POINT_CONVERSION_COMPRESSED } = require("constants");
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
      head: '/partials/head'
    }
  })
})
// app.get('/profile', async (req, res) => {
//   res.send('this page works')
// });


//retrive all events
// app.get('/events', async (req,res) =>{
//   const event = await Event.findAll({
//   });
//   res.json(event)
// });

// app.get('/events/:id', async (req,res) =>{
//   const events = await Events.findAll({
//     attributes: ['id' , 'eventName']
//   });
//   res.json(events)
// });



//gets all available events
app.get('/events/all', async (req,res) =>{
  // const path = req.path
  const events = await Event.findAll({
    limit: 4,
    where:{},
    order:[['id', 'ASC']]
  });
  console.log(events[2].dataValues)
  const event1 = events[0].dataValues;
  const event2 = events[1].dataValues;
  const event3 = events[2].dataValues;
  const event4 = events[3].dataValues;
  res.render('routes/joinTeam',{
    locals: {
      title: "Join Tailgate Event",
      event1,
      event2,
      event3,
      event4
      
      //path
    },
    partials: {
      head: '/partials/head'
    }
  })
})

//signup
app.post('/users/create', async (req, res) => {
  const { firstName, lastName, email, location } = req.body
  res.render('/profile')

  try{
  const newUser = await User.create({firstName, lastName, email, location})

  return res.redirect('/profile') 
  } catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
});

//route to the profile page
app.get('/profile', async (req, res) => {
  const latestUser = await User.findAll({ 
    limit: 1,
    where:{},
    order:[['id', 'DESC']]
  })
  console.log(latestUser[0].dataValues)
  const userArray = latestUser[0].dataValues
  res.render('routes/profile',{
    locals: {
      title: "Profile Page",
      user: userArray
      // path
    },
    partials: {
      head: '/partials/head'
    }
  })
});


//post to the events table
app.post('/events/create', async (req, res) => {
  const newEvent = await Event.create(req.body);
  res.redirect('/event')
});


// //selects all users from users table
// app.get('/users/all', async (req, res) => {
//   const path = req.path
//   const users = await User.findAll();
//   res.render('/routes/users', {
//     locals: {
//       title: "TailGators",
//       users,
//       path
//     },
//     partials: {
//       head: "/partials/head"
//     }
//   })
// })


//get users by id
app.get('/users/:id', async (req, res) => {
  const users = await User.findAll();
  res.render('/profile');
});

// create user-signup


//get users by last name
app.get('/users/by-last-name', async (req, res) => {
  const users = await User.findAll({
      attributes: ['lastName']
  });
  res.json(users);
});

// delete user
app.delete('/users/:id', async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findOne({ where: { id } })

    await user.destroy()

    return res.json({ message: 'Profile Deleted...' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }

});

app.listen(PORT, () => {
console.log(`Tailgators API is running on port ${PORT}`);
});


