import { File } from "./File";

export class Folder {
    public readonly parentFolder: Folder;
    public readonly name: string;

    public readonly Folders: Folder[] = [];
    public readonly Files: File[] = [];

    constructor(folderName: string, parentFolder: Folder) {
        this.name = folderName;
        this.parentFolder = parentFolder;
    }

    public GetSize(size = 0): number {
        this.Files.forEach((file: File) => {
            size += file.size;
        })
        this.Folders.forEach((folder: Folder) => {
            size += folder.GetSize(0);
        })
        return size;
    }

    public ContainsFolder(folderName: string): Folder {
        for (let i = 0; i < this.Folders.length; i++) {
            const folder = this.Folders[i];
            if (folder.name === folderName)
                return folder;
        }

        return null;
    }

    public AddSubFolder(folder: Folder) {
        this.Folders.push(folder);
    }

    public AddFile(file: File) {
        this.Files.push(file);
    }

    public print(indentation = "") {
        const size = this.GetSize();
        let sizeString = "";
        if (size < 100000)
            sizeString = "<------------------------------";

        console.log(indentation + "|" + this.name + "|" + " (dir) " + sizeString);


        this.Files.forEach((file: File) => {
            console.log(indentation + "-" + file.name + "-" + " (size=" + file.size + ")");
        })

        indentation += "  ";
        this.Folders.forEach((folder: Folder) => {
            folder.print(indentation);
        })
    }
}