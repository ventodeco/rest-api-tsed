import {Controller} from "@tsed/di";
import { QueryParams } from "@tsed/platform-params";
import {Get} from "@tsed/schema";
import { TestRequest } from '../requests/TestRequest';

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }

  @Get("/tes")
  index(@QueryParams() params: TestRequest) {

    console.log("tes", params)

    let tes = params.coba
    return "hello " + tes + " " + params.saja
  }
}
