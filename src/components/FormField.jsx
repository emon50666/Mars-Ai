

const FormField = ({name,labelName,value,handelChange,isSurpriseMe,handelSurpriseMe,placeholder,type}) => {
    return (
        <div>
            <div className="">
               
                <div className="flex  items-center gap-3 mb-2">
                <label className="block text-sm font-medium text-gray-800" htmlFor={name}>
                    {labelName}
                </label>
                {isSurpriseMe &&(
                    <button
                    type="button"
                    onClick={handelSurpriseMe}
                    className="py1 px-3 font-normal border rounded-lg bg-gray-50 border-gray-200"
                    >Generate Promt</button>
                )}
                </div>
                <input type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handelChange}
                required

                />
            </div>

        </div>
    );
};

export default FormField;