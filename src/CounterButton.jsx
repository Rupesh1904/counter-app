
export default function CounterButton({by,incrementMethod, decrementMethod}){
    // const [count, setCount] =useState(0);

    function IncrementCount(){
       // setCount(count+by);
        incrementMethod(by);
    }
    function DecrementCount(){
       // setCount(count-by);
        decrementMethod(by);
    }
    return (
        <div className="Counter">
             <div>
                <button className="counterButton" onClick={IncrementCount}>+{by}</button>
                <button className="counterButton" onClick={DecrementCount}>-{by}</button>
            </div>
        </div>
    )
}