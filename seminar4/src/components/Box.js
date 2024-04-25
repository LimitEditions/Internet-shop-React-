function Box({children}) {
    return (  
        <div style={{border: '2px solid red', margin: '20px'}}>
            {children}
        </div>
    );
}

export default Box;
