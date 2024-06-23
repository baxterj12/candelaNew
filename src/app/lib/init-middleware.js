import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  methods: ['GET','HEAD','POST','PUT','DELETE','PATCH'],
  origin: 'https://candelanew.onrender.com',
  credentials: true,
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function InitMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export default InitMiddleware(cors);