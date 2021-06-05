"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PostsController = void 0;
var common_1 = require("@nestjs/common");
var post_dto_1 = require("./dto/post.dto");
var swagger_1 = require("@nestjs/swagger");
var PostsController = /** @class */ (function () {
    function PostsController(postsService) {
        this.postsService = postsService;
    }
    PostsController.prototype.getPostById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.postsService.post({ id: Number(id) })];
            });
        });
    };
    PostsController.prototype.getFilteredPosts = function (searchString) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.postsService.posts({
                        where: {
                            OR: [
                                {
                                    title: { contains: searchString }
                                },
                                {
                                    content: { contains: searchString }
                                },
                            ]
                        }
                    })];
            });
        });
    };
    PostsController.prototype.createDraft = function (postData) {
        return __awaiter(this, void 0, Promise, function () {
            var title, content, authorEmail;
            return __generator(this, function (_a) {
                title = postData.title, content = postData.content, authorEmail = postData.authorEmail;
                return [2 /*return*/, this.postsService.createPost({
                        title: title,
                        content: content,
                        author: {
                            connect: { email: authorEmail }
                        }
                    })];
            });
        });
    };
    PostsController.prototype.publishPost = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.postsService.updatePost({
                        where: { id: Number(id) },
                        data: { published: true }
                    })];
            });
        });
    };
    PostsController.prototype.deletePost = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.postsService.deletePost({ id: Number(id) })];
            });
        });
    };
    __decorate([
        common_1.Get('post/:id'),
        __param(0, common_1.Param('id'))
    ], PostsController.prototype, "getPostById");
    __decorate([
        common_1.Get('filtered-posts/:searchString'),
        __param(0, common_1.Param('searchString'))
    ], PostsController.prototype, "getFilteredPosts");
    __decorate([
        common_1.Post('post'),
        swagger_1.ApiCreatedResponse({ description: 'Post Drafting' }),
        swagger_1.ApiBody({ type: post_dto_1.CreatePostDto }),
        __param(0, common_1.Body())
    ], PostsController.prototype, "createDraft");
    __decorate([
        common_1.Put('post/:id'),
        __param(0, common_1.Param('id'))
    ], PostsController.prototype, "publishPost");
    __decorate([
        common_1.Delete('post/:id'),
        __param(0, common_1.Param('id'))
    ], PostsController.prototype, "deletePost");
    PostsController = __decorate([
        common_1.Controller()
    ], PostsController);
    return PostsController;
}());
exports.PostsController = PostsController;
