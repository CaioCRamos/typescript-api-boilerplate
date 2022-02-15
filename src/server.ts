import App from "./app";
import * as dotenv from "dotenv"
import StudentController from "./domain/student/student.controller";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const app = new App([
  new StudentController()
], parseInt(process.env.PORT as string, 10));

app.listen();
