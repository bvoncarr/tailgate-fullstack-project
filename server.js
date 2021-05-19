const express = require("express");
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const { User } = require('./models');
const { Event } = require('./models');
const app = express();
const path = require('path');
const PORT=process.env.PORT||3004;

app.use(express.json());
app.use(express.urlencoded());


const es6Renderer = require('express-es6-template-engine');
const { userInfo } = require("os");
const { as } = require("pg-promise");
const { POINT_CONVERSION_COMPRESSED } = require("constants");
const { profile } = require("console");
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
});


//get all users
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

//login
app.post('/users/login', async (req, res) => {
  const {email} = req.body;
  const user = await User.findOne ({
    where: { email: email},
    returning: true,
    plain: true
  })
  .then(function (result){
    // console.log(result)
    id = result.id
    console.log(id)
    return id
  })
  res.redirect(`/profile/${id}`)
});

//delete user profile by id
app.post('/profile/delete', async (req, res) => {
  const { id } = req.body;
  const deletedUser = await User.destroy({
      where: {
         id,
      }
  });
  res.redirect('/');
});

//update user profile
app.post('/profile/update/:id', async (req, res) => {
  console.log(req.params)
  const { id } = req.params;
  
  const updatedUser = await User.update(req.body, {
    where: {
      id,
    }
  });
  res.redirect(`/profile/${id}`);
});

//user by firstName
app.post('/users/search', async (req, res) => {
  const users = await User.findAll({
      where: {
          firstName: req.body.term,
      }
  });
  res.json(users);
});

//get all users
app.get('/users', async (req,res) =>{
  const users = await User.findAll({
    //limit: 4,
  });
  console.log(user);
  res.render('./routes/profile', {
    locals: {
      title: 'Tailgator Events',
    },
    partials: {
      head: '/partials/head'
    }
  })
});

//gets all available events
app.get('/events/all', async (req,res) =>{
  // const path = req.path
  const events = await Event.findAll({
    limit: 4,
    where:{},
    order:[['id', 'DESC',]]
  });
  console.log(events[3].dataValues)
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

  try{
  const newUser = await User.create({
    firstName, lastName, email, location},
    {returning: true,
    plain: true
    },
    )
  .then(function (result){
    // console.log(result)
    id = result.id
    console.log(id)
    return id
  })
  res.redirect(`/profile/${id}`)
  
  } catch(err){
    console.log(err)
    return res.redirect('/')
  }
});

//route to the profile page
app.get('/profile/:id', async (req, res) => {
  // const latestUser = await User.findAll({ 
  //   limit: 1,
  //   where:{},
  //   order:[['id', 'DESC']]
  // })
  // console.log(latestUser[0].dataValues)
  // const userArray = latestUser[0].dataValues
  const {id} = req.params
  const user = await User.findByPk(id)

  res.render('./routes/profile',{
    locals: {
      title: "Profile Page",
      user
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
  res.redirect('/events/all')
});

//Tailgate Form
app.get('/createTg', async (req, res) => {
  res.render('./routes/createTg', {
    locals: {
      title: 'Create a Tailgate'
    },
    partials: {
      head: '/partials/head'
    }

    })
  })

  //contactUs route
app.get('/contactUs', async (req, res) => {
  res.render('./routes/contactUs', {
    locals: {
      title: 'Contact Us'
    },
    partials: {
      head: '/partials/head'
    }

    })
  });

app.listen(PORT, () => {
console.log(`Tailgators API is running on port ${PORT}`);
});


