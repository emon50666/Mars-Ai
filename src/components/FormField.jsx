

const FormField = ({name,labelName,value,handelChange,isSurpriseMe,handelSurpriseMe,placeholder,type}) => {
    return (
        <div>
            <div className="">
               
                <div className=" flex   ">
                <label className="block text-sm font-medium text-gray-800" htmlFor={name}>
                    {labelName}
                </label>
                {isSurpriseMe &&(
                    <button
                    type="button"
                    onClick={handelSurpriseMe}
                    className="  font-normal border relative bottom-3 px-2 rounded-lg bg-purple-50 border-gray-200"
                    >Generate Promt</button>
                )}
                </div>
                <input type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handelChange}
                value={value}
                required
                className="border  w-full py-2 px-2  rounded-md outline-none border-gray-300"
/>
            </div>

        </div>
    );
};

export default FormField;