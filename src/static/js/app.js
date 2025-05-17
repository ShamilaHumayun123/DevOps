function App() {
    const [input, setInput] = React.useState('');
    const [result, setResult] = React.useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input).toString());
            } catch (e) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ];

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <h3 className="text-center mb-4">🧮 React Calculator</h3>
                <div className="form-control mb-2" readOnly>{input || '0'}</div>
                <div className="form-control mb-3 text-success" readOnly>{result}</div>
                <div className="row">
                    {buttons.map((btn, i) => (
                        <div className="col-3 mb-2" key={i}>
                            <button
                                className={`btn btn-${btn === 'C' ? 'danger' : btn === '=' ? 'success' : 'secondary'} w-100`}
                                onClick={() => handleClick(btn)}
                            >
                                {btn}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
