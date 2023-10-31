import { ISinger } from "src/singers/interface/singer.interface"
import { ISong } from "src/songs/interface/song.interface"

export interface IAlbum {
    name: string
    imageUrl: string
    singer: string
    songs: ISong[]
}