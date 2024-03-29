import { Item, List } from "./Form.styled";

export const Galery = ({ data }) => {
    return (
        <List>
            {data.map((item) => (
                <Item key={item.id}>
                    <img src={item.src.large} alt={Item.alt} />
                </Item>
            ))}
        </List>
    );
};
