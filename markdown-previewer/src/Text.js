
function Text({handleChange, value}) {
    return (
        <div className="textarea-wrapper">
            <h3 className="editor-title">
                Editor
            </h3>
                <textarea
                    cols="62"
                    rows="40"
                    id="editor"
                    onChange={(e)=>handleChange(e.target.value)}
                    value={value}
                />

        </div>
    )
    
}
export default Text;