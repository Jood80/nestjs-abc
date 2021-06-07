"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var chat_gateway_1 = require("./chat.gateway");
var posts_module_1 = require("./posts/posts.module");
var users_module_1 = require("./users/users.module");
var auth_module_1 = require("./auth/auth.module");
var auth_controller_1 = require("./auth/auth.controller");
var auth_service_1 = require("./auth/auth.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [posts_module_1.PostsModule, users_module_1.UsersModule, auth_module_1.AuthModule],
            controllers: [app_controller_1.AppController, auth_controller_1.AuthController],
            providers: [app_service_1.AppService, chat_gateway_1.ChatGateway, auth_service_1.AuthService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
