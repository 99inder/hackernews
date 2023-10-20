import "./styles.css";

const Spinner = () => {
    return (
        <div className="absolute h-screen w-screen top-0 left-0 z-30 grid place-content-center">
            <div className="spinner"></div>
        </div>
    )
}

export default Spinner