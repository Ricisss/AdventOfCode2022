"use strict";
exports.__esModule = true;
exports.Folder = void 0;
var Folder = /** @class */ (function () {
    function Folder(folderName, parentFolder) {
        this.Folders = [];
        this.Files = [];
        this.name = folderName;
        this.parentFolder = parentFolder;
    }
    Folder.prototype.GetSize = function (size) {
        if (size === void 0) { size = 0; }
        this.Files.forEach(function (file) {
            size += file.size;
        });
        this.Folders.forEach(function (folder) {
            size += folder.GetSize(0);
        });
        return size;
    };
    Folder.prototype.ContainsFolder = function (folderName) {
        for (var i = 0; i < this.Folders.length; i++) {
            var folder = this.Folders[i];
            if (folder.name === folderName)
                return folder;
        }
        return null;
    };
    Folder.prototype.AddSubFolder = function (folder) {
        this.Folders.push(folder);
    };
    Folder.prototype.AddFile = function (file) {
        this.Files.push(file);
    };
    Folder.prototype.print = function (indentation) {
        if (indentation === void 0) { indentation = ""; }
        var size = this.GetSize();
        var sizeString = "";
        if (size < 100000)
            sizeString = "<------------------------------";
        console.log(indentation + "|" + this.name + "|" + " (dir) " + sizeString);
        this.Files.forEach(function (file) {
            console.log(indentation + "-" + file.name + "-" + " (size=" + file.size + ")");
        });
        indentation += "  ";
        this.Folders.forEach(function (folder) {
            folder.print(indentation);
        });
    };
    return Folder;
}());
exports.Folder = Folder;
