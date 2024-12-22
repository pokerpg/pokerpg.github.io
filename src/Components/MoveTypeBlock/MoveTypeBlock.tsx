import {PokemonType} from "../../Types/types";
import "./MoveTypeBlock.scss"

type MoveTypeBlockProps ={
    moveType : PokemonType
}
export const MoveTypeBlock = ({moveType}:MoveTypeBlockProps) =>{

    return <span className={'move-type-block'}>{
        moveType.toUpperCase()}
    </span>


}