import { resolve } from "./di";
import Test from "./Test";

const x = resolve(Test)

x.method();