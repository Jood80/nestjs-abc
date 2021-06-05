"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateItemDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var CreateItemDto = /** @class */ (function () {
    function CreateItemDto() {
    }
    __decorate([
        swagger_1.ApiProperty({
            description: 'The name of that poor item that you will damage',
            minimum: 1,
            "default": 'Hat'
        })
    ], CreateItemDto.prototype, "name");
    __decorate([
        swagger_1.ApiProperty({
            description: 'The quantity of that usless product that you want to buy',
            "default": 2
        })
    ], CreateItemDto.prototype, "quantity");
    __decorate([
        swagger_1.ApiProperty({
            description: 'Not really sure how to describe that ',
            "default": 'Lorem text will cry about that'
        })
    ], CreateItemDto.prototype, "desc");
    return CreateItemDto;
}());
exports.CreateItemDto = CreateItemDto;
