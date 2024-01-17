export default function TextDiv(props){
    const text = props.text

    return (
        <div className="flex items-center p-10 border border-solid border-gray-300">
            <p>
                {text}
            </p>
        </div>
    )
}