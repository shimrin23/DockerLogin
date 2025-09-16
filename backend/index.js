// 

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const FormDataModel = require('./models/FormData');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Use Docker service name for MongoDB if available
const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/mern_db";

mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Test API
app.get('/', (req, res) => {
  res.send("API is running...");
});

// Register route
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await FormDataModel.findOne({ email });
    if (user) return res.json("Already registered");
    const newUser = await FormDataModel.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await FormDataModel.findOne({ email });
    if (!user) return res.json("No records found!");
    if (user.password === password) return res.json("Success");
    res.json("Wrong password");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://0.0.0.0:${PORT}`);
});
 












//  in your backend/index.js
// // const cors = require('cors');
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const dotenv = require('dotenv');
// // const FormDataModel = require('./models/FormData');

// // dotenv.config();

// // const app = express();
// // app.use(express.json());
// // app.use(cors());

// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log("✅ MongoDB connected"))
// //   .catch(err => console.error("❌ MongoDB error:", err));

// // app.get('/', (req, res) => {
// //   res.send("API is running...");
// // });

// // app.post('/register', (req, res) => {
// //   const { email, password } = req.body;
// //   FormDataModel.findOne({ email })
// //     .then(user => {
// //       if (user) {
// //         res.json("Already registered");
// //       } else {
// //         FormDataModel.create(req.body)
// //           .then(log_reg_form => res.json(log_reg_form))
// //           .catch(err => res.json(err));
// //       }
// //     });
// // });

// // app.post('/login', (req, res) => {
// //   const { email, password } = req.body;
// //   FormDataModel.findOne({ email })
// //     .then(user => {
// //       if (user) {
// //         if (user.password === password) {
// //           res.json("Success");
// //         } else {
// //           res.json("Wrong password");
// //         }
// //       } else {
// //         res.json("No records found!");
// //       }
// //     });
// // });

// // const PORT = process.env.PORT || 3001;
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server listening on http://127.0.0.1:${PORT}`);
// // });

// const cors = require('cors');
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const FormDataModel = require('./models/FormData');

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Use Docker service name for MongoDB if available
// const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/mern_db";

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch(err => console.error("❌ MongoDB error:", err));

// // Test API
// app.get('/', (req, res) => {
//   res.send("API is running...");
// });

// // Register route
// app.post('/register', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await FormDataModel.findOne({ email });
//     if (user) {
//       return res.json("Already registered");
//     }
//     const newUser = await FormDataModel.create(req.body);
//     res.json(newUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Login route
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await FormDataModel.findOne({ email });
//     if (!user) return res.json("No records found!");
//     if (user.password === password) return res.json("Success");
//     res.json("Wrong password");
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`🚀 Server listening on http://0.0.0.0:${PORT}`);
// });
