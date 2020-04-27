const { createContainer, asClass, asValue, asFunction } = require("awilix")

//config
const config = require("../config")
const app = require(".")

//services
const { HomeService } = require("../services")

//controllers
const { HomeController } = require("../controllers")

//routes
const { HomeRoutes } = require("../routes/index.routes")
const Routes = require("../routes")

//models
const { UserModel, IdeaModel, CommentModel } = require("../models")

//repositories
const { UserRepository, IdeaRepository, CommentRepository } = require("../repositories")

//services
const { UserService, IdeaService, CommentService } = require("../services")

const container = createContainer()

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
  })
  .register({
    User: asValue(UserModel),
    Idea: asValue(IdeaModel),
    Comment: asValue(CommentModel)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
  })

module.exports = container
