import "dotenv/config";
import app from "./src/app.js"


const PORT = process.env.PORT || 8080

// (
//   async () => {

//     try {
      
//       app.listen(PORT, () => {
//         console.log(`Server is up and running on port: '${PORT}'.`)
//       });

//     } catch (error) {
//       console.error(error);
//       process.exit([1])
//     };
//   }
// )();


try {
      
  app.listen(PORT, () => {
    console.log(`Server is up and running on port: '${PORT}'.`)
  });

} catch (error) {
  console.error(error);
  process.exit([1])
};