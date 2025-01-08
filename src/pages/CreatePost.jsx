import { useNavigate } from "react-router-dom";
import { getRandompromt } from '../utils';
import { Loader, FormField } from '../components';
import { useState } from "react";

const CreatePost = () => {
    const navigate = useNavigate();
    const [form, steForm] = useState({
        name: '',
        promt: '',
        photo: '',
    })
    const [generetingImg, setGeneretingImg] = useState(false);
    const [loading, setLoading] = useState(false)


    //  submit form data
    const handelSubmit = () => {

    }

    const handelChange = (e) => {

    }

    const handelSurpriseMe = () => {

    }

    return (
        <div className="pt-20 container mx-auto min-h-[calc(100vh-73px)]  ">
       
            <div>
                <form className=" max-w-3xl" onSubmit={handelSubmit}>
                    <div className=" gap-5 ">
                    <FormField
                    type='text'
                        name='name'
                        labelName='Your Name'
                        placeholder='Mars Ai'
                        value={form.name}
                        handelChange={handelChange}
                    />
                    <br />
                    <FormField
                        name='name'
                        type='text'
                        labelName='Promt'
                        placeholder='an armchair in the shape of an avocado'
                        value={form.promt}
                        handelChange={handelChange}
                        isSurpriseMe
                        handelSurpriseMe={handelSurpriseMe}
                    />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
