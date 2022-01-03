import {Input, Div, Button} from './recipe_comp';

export const Recipe_Input = ()=>{

    return(
        <Div>
            <Input type="text" placeholder='title' ></Input>
            <Input type="text" placeholder='ingredients'></Input>
            <Input type="text" placeholder='time to cook'></Input>
            <Input type="text" placeholder='image'></Input>
            <Input type="text" placeholder='instructions'></Input>

            <Input type="submit">Submit</Input>
        </Div>
    )
}