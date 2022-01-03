import {Input, Div} from './recipe_comp';

export const Recipe_Input = ()=>{

    return(
        <Div>
            <Input placeholder='title' ></Input>
            <Input placeholder='ingredients'></Input>
            <Input placeholder='time to cook'></Input>
            <Input placeholder='image'></Input>
            <Input placeholder='instructions'></Input>
        </Div>
    )
}