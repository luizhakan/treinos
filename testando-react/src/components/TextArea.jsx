function TextArea(props){
    return (
        <div>
            <input type={props.type} name={props.name} placeholder={props.placeholder} />
        </div>
    );
}

export default TextArea;