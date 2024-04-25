function RenderList({listItems, renderItem}) {
    return (  
        <ul>
            {listItems.map((item, index) => (
                <li key="index">{renderItem(item, index)}</li>
            ))}
        </ul>
    );
}

export default RenderList;