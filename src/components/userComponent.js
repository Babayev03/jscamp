import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../modules/user.js"
import UserService from "../services/userService.js"

console.log("User component yuklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)
let user1 = new User(1, "Engin", "Demirog", "Ankara")
let user2 = new User(2, "Baran", "Gokcekli", "Mugla")

userService.add(user1)
userService.add(user2)


console.log(userService.list())
console.log(userService.getById(2))
