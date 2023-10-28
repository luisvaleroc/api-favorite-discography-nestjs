export class CreateAlbumDto {
    name: string;
    url: string;
    autor: string;

    constructor(data: { name: string; url: string; autor: string }) {
        this.name = data.name;
        this.url = data.url;
        this.autor = data.autor;
    }

    toObject(): Record<string, any> {
        return {
            name: this.name,
            url: this.url,
            autor: this.autor,
        };
    }
}